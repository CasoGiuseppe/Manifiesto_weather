import { Weather } from "../core/weather";
import type { WeatherDay } from "../core/weather.types";

export class WeatherDTOAdapter {
  constructor(
    public readonly weather: WeatherDay[]
  ) { }

  createUserInstance(): Weather {
    return Weather.createWeatherForecast({
      weather: this.weather
    })
  }
}