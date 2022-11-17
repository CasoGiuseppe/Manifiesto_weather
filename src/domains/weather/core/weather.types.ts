export type WeatherType = {
  weather: Weather[]
}

export interface Weather {
  timestamp: Date;
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