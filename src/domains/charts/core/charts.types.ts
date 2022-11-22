export type ChartType = {
  type: string;
  series: Series,
  width?: string | number,
  height?: string | number,
  options: Record<string, any>
}

export interface Series {
  name: string,
  data: number[]
}