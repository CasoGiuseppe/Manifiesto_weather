export interface IChartStore {
  current: Record<string, any>
}

export interface IChartModel {
  series: ISeries,
  xaxis: string[]
}

export interface ISeries {
  name: string,
  data: number[]
}