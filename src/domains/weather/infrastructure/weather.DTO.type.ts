export type WeatherDTOType = {
  weather: Weather[];
  sources: WeatherDay[];
}

export interface WeatherDay {
  id: number;
  dwd_station_id: string;
  observation_type: string;
  lat: number;
  lon: number;
  height: number;
  station_name: string;
  wmo_station_id: string;
  first_record: Date;
  last_record: Date;
  distance: number;
}

export interface Weather {
  timestamp: Date;
  source_id: number;
  precipitation: number;
  pressure_msl?: number;
  sunshine?: number;
  temperature: number;
  wind_direction: number;
  wind_speed: number;
  cloud_cover?: number;
  dew_point: number;
  relative_humidity: number;
  visibility?: number;
  wind_gust_direction: number;
  wind_gust_speed: number;
  condition: string;
  fallback_source_ids: FallbackSourceIds;
  icon: string;
}

export interface FallbackSourceIds {
  wind_speed: number;
  wind_direction: number;
  wind_gust_speed: number;
  wind_gust_direction: number;
  pressure_msl?: number;
  visibility?: number;
  sunshine?: number;
  cloud_cover?: number;
}
