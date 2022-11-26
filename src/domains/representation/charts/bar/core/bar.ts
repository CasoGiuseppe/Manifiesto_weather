import type { Bar, ChartType, Plot, Series, Theme, Xaxis } from "./bar.types.";

export class ChartBar {
  constructor(
    private readonly series: number[],
    private readonly chart: ChartType,
    private readonly plotOptions?: Plot,
    private readonly xaxis?: string[],
    private readonly labels?: string[],
    private readonly theme?: Theme,
  ) { }

  static createChartBar(
    series: number[],
    chart: ChartType,
    plotOptions: Plot = {},
    xaxis: string[] = [],
    labels: string[] = [],
    theme: Theme = {}) {
    return new ChartBar(series, chart, plotOptions, xaxis, labels, theme)
  }

  get barEntity(): Bar {
    return {
      series: this.series,
      chart: this.chart,
      plotOptions: this.plotOptions,
      xaxis: this.xaxis,
      labels: this.labels,
      theme: this.theme
    }
  }
}