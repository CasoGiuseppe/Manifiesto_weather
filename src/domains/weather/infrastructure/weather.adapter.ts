import { Weather } from "../core/weather";
import type { WeatherDTOType } from "./weather.DTO.type";

export class WeatherDTOAdapter {
  constructor(
    public readonly id: UniqueId,
    public readonly weather: WeatherDTOType
  ) { }

  createUserInstance(): Weather {
    const modifyWeatherResponse = (this.weather as unknown as any[]).map(day => {
      const newDate = new Date(day.timestamp)
      return {
        ...day, ...{
          timestamp: newDate.toJSON().slice(0, 10).replace(/-/g, '-'),
          time: newDate.toLocaleTimeString('en-US', { hour12: false })
        }
      }
    })

    const newWeatherFormat = [...new Set(modifyWeatherResponse.map(day => day.timestamp))].map(node => {
      return {
        time: node,
        id: this.id,
        forecastDay: modifyWeatherResponse.filter((day) => day.timestamp === node).map(detail => {
          return {
            time: detail.time,
            precipitation: detail.precipitation,
            sunshine: detail.sunshine,
            temperature: detail.temperature,
            wind_speed: detail.wind_speed,
            cloud_cover: detail.cloud_cover,
            relative_humidity: detail.relative_humidity,
            visibility: detail.visibility,
            condition: detail.condition,
            icon: detail.icon,
          }
        })
      }
    })
    return Weather.createWeatherForecast(newWeatherFormat)
  }
}