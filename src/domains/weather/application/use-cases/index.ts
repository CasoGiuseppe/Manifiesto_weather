import type { WeatherResources } from "../../infrastructure/WeatherResources.adapter";
import { GetWeatherForecast } from "./GetWeatherForecast.usecase";

export class WeatherServices {
  private readonly getWeatherForecast: GetWeatherForecast;

  constructor(
    private readonly weatherResources: WeatherResources
  ) {
    this.getWeatherForecast = new GetWeatherForecast(this.weatherResources)
  }

  async getWeatherForecastData(id: string | undefined = undefined) {
    return await this.getWeatherForecast.execute(id)
  }
}