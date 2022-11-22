import { setDateFormat, getTimeFromDate } from "@/app/shared/helpers/date";

import { Weather } from "../core/weather";
import type { WeatherDTOType } from "./weather.DTO.type";
import { UUIDService } from "@/app/shared/services/uuid/uuid.services";

export class WeatherDTOAdapter {
  constructor(
    public readonly weather: WeatherDTOType
  ) { }

  createWeatherInstance(): Weather {
    const modifyWeatherResponse = (this.weather as unknown as any[]).map(day => {
      const newDate = new Date(day.timestamp)
      return {
        ...day, ...{
          timestamp: setDateFormat({ date: newDate }),
          time: getTimeFromDate({ date: newDate })
        }
      }
    })

    const transformedForecast = [...new Set(modifyWeatherResponse.map(day => day.timestamp))].map((node) => {
      return {
        time: this.getCorrectDateFormat(node),
        id: node.id || UUIDService.create(),
        forecastDay: modifyWeatherResponse.filter((day) => day.timestamp === node).map(detail => {
          return {
            time: detail.time,
            precipitation: detail.precipitation || 0,
            sunshine: detail.sunshine || 0,
            temperature: detail.temperature || 0,
            wind_speed: detail.wind_speed || 0,
            cloud_cover: detail.cloud_cover || 0,
            relative_humidity: detail.relative_humidity || 0,
            visibility: detail.visibility || 0,
            condition: detail.condition || 0,
            icon: detail.icon,
          }
        })
      }
    })
    return Weather.createWeatherForecast(transformedForecast)
  }

  getCorrectDateFormat(date: string): string {
    const dateTransform = new Date(date)
    return `${dateTransform.getDate()}/${dateTransform.getMonth()}/${dateTransform.getFullYear()}`
  }
}