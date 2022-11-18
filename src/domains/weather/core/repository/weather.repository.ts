import type { Weather } from "../weather";

export interface IWeatherParams {
  long: string,
  lat: string
}

export interface IHandleRequest {
  getWeatherForecast({ long, lat }: IWeatherParams): Promise<Weather>
}