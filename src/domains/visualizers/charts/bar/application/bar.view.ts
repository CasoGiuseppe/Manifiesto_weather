import type { ChartBar } from "../core/bar";
import type { ChartType, Plot } from "../core/bar.types.";

export class BarViewModel {
  private constructor(
    public readonly series: number[],
    public readonly xaxis: string[],
    public readonly chart: ChartType,
    public readonly plotOptions: Plot
  ) { }

  static createBarViewModel(data: ChartBar) {
    const { series, xaxis, chart, plotOptions } = data.barEntity
    return new BarViewModel(series, xaxis, chart, plotOptions)
  }

  get parsedData() {
    return {
      series: [{
        data: this?.series.map(node => node === 0 ? Math.floor(Math.random() * 10) + 1 : node),
      }],
      options: {
        chart: this.chart,
        plotOptions: this.plotOptions,
        xaxis: { categories: this.xaxis.map((axis: string) => axis.slice(0, -3)) }
      }
    }
  }
}