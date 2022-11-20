import { BASE_API_WEATHER_URL, BASE_LAT_DEFAULT, BASE_LONG_DEFAULT } from "@/app/shared/helpers/constants";
import { setDateFormat, getForecastDays } from "@/app/shared/helpers/date";

import type { HTTPService } from "@/app/shared/services/http/http.services";
import type { LocatorService } from "@/app/shared/services/locator/locator.services";
import type { UUIDService } from "@/app/shared/services/uuid/uuid.services";
import type { ILocator } from "@/app/shared/types/locator";
import type { IWeatherRepository } from "../core/repository/weather.repository";
import type { Weather } from "../core/weather";
import { WeatherDTOAdapter } from "./weather.adapter";

export class WeatherResources implements IWeatherRepository {
  constructor(
    private readonly client: HTTPService,
    private readonly uuid: UUIDService,
    private readonly locator: LocatorService
  ) { }

  async getWeatherForecast(): Promise<Weather> {
    const setDate = new Date()
    const currentDay = setDateFormat({ date: setDate })
    const next7Days = setDateFormat({ date: getForecastDays({ next: 7 }) })
    try {

      const position: Record<string, any> = await this.locator.getCurrentLocation().catch((catchResult): ILocator => catchResult)
      const { weather } = await this.client.get<WeatherDTOAdapter>(BASE_API_WEATHER_URL, {
        date: currentDay,
        last_date: next7Days,
        lon: position?.coords?.longitude || BASE_LONG_DEFAULT,
        lat: position?.coords?.latitude || BASE_LAT_DEFAULT
      })

      const instance = new WeatherDTOAdapter(this.uuid.create(), weather)
      return instance.createUserInstance()

    } catch (e) {
      throw new Error(e as string)
    }
  }

}