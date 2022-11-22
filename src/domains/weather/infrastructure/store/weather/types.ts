import type { WeatherType } from "@/domains/weather/core/weather.types";

export interface IWeatherStore {
  weather: WeatherType | undefined;
}