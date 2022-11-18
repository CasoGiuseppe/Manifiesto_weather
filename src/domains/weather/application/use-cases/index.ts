import type { RequestAdapter } from "../../infrastructure/RequestAdapter/Request.adapter";
import { GetWeatherForecast } from "./GetWeatherForecast.usecase";

export class WeatherServices {
  private readonly getWeatherForecast: GetWeatherForecast;

  constructor(
    private readonly requestAdapter: RequestAdapter
  ) {
    this.getWeatherForecast = new GetWeatherForecast(this.requestAdapter)
  }

  async getWeatherForecastData(from: string, to: string, long: string, lat: string) {
    return await this.getWeatherForecast.execute(from, to, long, lat)
  }
}