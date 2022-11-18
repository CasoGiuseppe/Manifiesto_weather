import type { WeatherType, WeatherDay } from './weather.types'

export class Weather {
  constructor(
    private readonly weather: WeatherDay[],
  ) { }

  static createWeatherForecast(props: WeatherType) {
    const { weather } = props
    return new Weather(weather)
  }

  get WeatherEntity(): WeatherType {
    return {
      weather: this.weather
    }
  }
}