export type ChartType = {
  time: string;
  precipitation: number;
  sunshine?: number;
  temperature: number;
  wind_speed: number;
  cloud_cover?: number;
  relative_humidity: number;
}

export type ChartModel = {
  [key: string]: ChartData
};

export type ChartData = {
  series: number[] | Record<string, any>[],
  xaxis?: Record<string, any>,
  labels?: string[]
}