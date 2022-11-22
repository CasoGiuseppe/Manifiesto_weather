import type { ChartType, Series } from './charts.types'

export class Chart {
  constructor(
    private readonly type: string,
    private readonly series: Series,
    private readonly width: string | number | undefined,
    private readonly height: string | number | undefined,
    private readonly options: Record<string, any>,
  ) { }

  static createChart(props: ChartType) {
    const { type, series, width, height, options } = props
    return new Chart(type, series, width, height, options)
  }

  get chartEntity(): ChartType {
    return {
      type: this.type,
      series: this.series,
      width: this.width,
      height: this.height,
      options: this.options
    }
  }
}