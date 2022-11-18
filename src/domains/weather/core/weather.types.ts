export type WeatherType = {
  weather: WeatherDay[]
}

export interface WeatherDay {
  id: UniqueId;
  timestamp: string;
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