export type WeatherType = ForecastDay[]

export interface ForecastDay {
  time: string;
  id: string,
  place: string;
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
  icon: string;
}