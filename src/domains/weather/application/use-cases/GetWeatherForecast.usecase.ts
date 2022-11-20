import type { WeatherResources } from "../../infrastructure/WeatherResources.adapter";

export class GetWeatherForecast {
  constructor(
    private readonly handleResponse: WeatherResources
  ) { }

  execute() {
    return this.handleResponse.getWeatherForecast()
  }
}