import type { Weather } from "../weather";

export interface IWeatherRepository {
  getWeatherForecast(): Promise<Weather>
}