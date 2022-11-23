import type { ChartType } from './charts.types'

export class Chart {
  constructor(
    private readonly chart: ChartType[],
  ) { }

  static createChart(props: ChartType[]) {
    return new Chart(props)
  }

  get chartEntity(): ChartType[] {
    return this.chart
  }
}