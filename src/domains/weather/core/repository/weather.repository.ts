import type { Weather } from "../weather";

export interface IWeatherParams {
  from: string,
  to: string,
  long: string,
  lat: string
}

export interface IHandleRequest {
  getWeatherForecast({ from, to, long, lat }: IWeatherParams): Promise<Weather>
}