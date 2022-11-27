import { BASE_API_WEATHER_URL, BASE_LAT_DEFAULT, BASE_LONG_DEFAULT } from "@/app/shared/helpers/constants";
import { setDateFormat, getForecastDays } from "@/app/shared/helpers/date";

import type { HTTPService } from "@/app/shared/services/http/http.services";
import type { LoaderService } from "@/app/shared/services/loader/loader.services";
import type { LocatorService } from "@/app/shared/services/locator/locator.services";
import type { PersistService } from "@/app/shared/services/persistData/persist.data.services";

import type { ILocator } from "@/app/shared/types/locator";
import type { IWeatherRepository } from "../core/repository/weather.repository";
import type { Weather } from "../core/weather";
import { CHANGE_WEATHER_LIST } from "./store/weather/actions";
import { GET_WEATHER_LIST } from "./store/weather/getters";
import { WeatherDTOAdapter } from "./weather.adapter";
import type { WeatherDTOType } from "./weather.DTO.type";

export class WeatherResources implements IWeatherRepository {
  constructor(
    private readonly client: HTTPService,
    private readonly locator: LocatorService,
    private readonly loaderService: LoaderService,
    private readonly persistService: PersistService
  ) { }

  async getWeatherForecast(): Promise<Weather> {
    const storedWeatherData = this.persistService.getFromData({ getter: GET_WEATHER_LIST })

    if (storedWeatherData) return JSON.parse(JSON.stringify(storedWeatherData))

    const setDate = new Date()
    const currentDay = setDateFormat({ date: setDate })
    const next7Days = setDateFormat({ date: getForecastDays({ next: 7 }) })
    try {
      this.loaderService.changeLoaderState({ value: true })
      const position: Record<string, any> = await this.locator.getCurrentLocation().catch((catchResult): ILocator => catchResult)
      const { weather, sources } = await this.client.get<WeatherDTOAdapter>(BASE_API_WEATHER_URL, {
        date: currentDay,
        last_date: next7Days,
        lon: position?.coords?.longitude || BASE_LONG_DEFAULT,
        lat: position?.coords?.latitude || BASE_LAT_DEFAULT
      })

      const { station_name } = sources.find((source: Record<string, any>) => source.observation_type === 'forecast')
      const addWeatherPlace = (weather as unknown as any[]).map(node => {
        return {
          ...node,
          ...{ place: station_name }
        }
      })
      const weatherInstance = new WeatherDTOAdapter(addWeatherPlace).createWeatherInstance()
      this.persistService.save({ action: CHANGE_WEATHER_LIST, params: weatherInstance.weatherEntity })
      return weatherInstance

    } catch (e) {
      throw new Error(e as string)
    } finally {
      this.loaderService.changeLoaderState({ value: false })
    }
  }

}