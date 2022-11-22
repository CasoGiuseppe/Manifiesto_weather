import type { WeatherPanel } from "@/domains/weather/application/use-cases/types";
import type { WeatherType } from "@/domains/weather/core/weather.types";

export interface IWeatherStore {
  weather: WeatherType | undefined;
  current: WeatherPanel | undefined
}