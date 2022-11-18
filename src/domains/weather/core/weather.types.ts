export type WeatherType = ForecastDay[]

export interface ForecastDay {
  time: string;
  forecastDay: WeatherDay[]
}

export interface WeatherDay {
  time: string;
  precipitation: number;
  sunshine?: number;
  temperature: number;
  wind_speed: number;
  cloud_cover?: number;
  relative_humidity: number;
  visibility?: number;
  condition: string;
  icon: string;
}