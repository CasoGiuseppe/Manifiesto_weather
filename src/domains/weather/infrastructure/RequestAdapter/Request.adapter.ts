import { BASE_API_WEATHER_URL } from "@/app/shared/helpers/constants";
import type { HTTPService } from "@/app/shared/services/http/http.services";
import type { UUIDService } from "@/app/shared/services/uuid/uuid.services";
import type { IHandleRequest, IWeatherParams } from "../../core/repository/weather.repository";
import type { Weather } from "../../core/weather";
import { WeatherDTOAdapter } from "../weather.adapter";

export class RequestAdapter implements IHandleRequest {
  constructor(
    private readonly client: HTTPService,
    private readonly uuid: UUIDService
  ) { }

  async getWeatherForecast({ from, to, long, lat }: IWeatherParams): Promise<Weather> {
    try {
      const { weather } = await this.client.get<WeatherDTOAdapter>(BASE_API_WEATHER_URL, { date: from, last_date: to, lon: long, lat })
      const modifyWeatherResponse = weather.map(day => {
        const newDate = new Date(day.timestamp)
        return {
          ...day, ...{
            timestamp: newDate.toJSON().slice(0, 10).replace(/-/g, '-'),
            time: newDate.toLocaleTimeString()
          }
        }
      })

      const newWeatherFormat = [...new Set(modifyWeatherResponse.map(day => day.timestamp))].map(node => {
        return {
          time: node,
          id: this.uuid.create(),
          forecastDay: modifyWeatherResponse.filter((day) => day.timestamp === node)
        }
      })

      console.log(newWeatherFormat)
      const instance = new WeatherDTOAdapter(modifyWeatherResponse)
      return instance.createUserInstance()
    } catch (e) {
      throw new Error(e as string)
    }
  }
}