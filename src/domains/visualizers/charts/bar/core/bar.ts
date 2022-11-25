import type { Bar, ChartType, Plot, Series, Xaxis } from "./bar.types.";

export class ChartBar {
  constructor(
    private readonly series: number[],
    private readonly xaxis: string[],
    private readonly chart: ChartType,
    private readonly plotOptions: Plot
  ) { }

  static createChartBar(series: number[], xaxis: string[], chart: ChartType, plotOptions: Plot) {
    return new ChartBar(series, xaxis, chart, plotOptions)
  }

  get barEntity(): Bar {
    return {
      series: this.series,
      xaxis: this.xaxis,
      chart: this.chart,
      plotOptions: this.plotOptions
    }
  }
}