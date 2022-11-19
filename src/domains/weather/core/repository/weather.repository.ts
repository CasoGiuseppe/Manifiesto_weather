import type { Weather } from "../weather";

export interface IHandleRequest {
  getWeatherForecast(): Promise<Weather>
}