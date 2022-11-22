import type { WeatherType } from './weather.types'

export class Weather {
  constructor(
    private readonly weather: WeatherType,
  ) { }

  static createWeatherForecast(props: WeatherType) {
    return new Weather(props)
  }

  get weatherEntity(): WeatherType {
    return this.weather
  }
}