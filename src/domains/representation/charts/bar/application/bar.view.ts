import type { ChartBar } from "../core/bar";
import type { ChartType, Plot } from "../core/bar.types.";

export class BarViewModel {
  private constructor(
    public readonly series: number[],
    public readonly chart: ChartType,
    public readonly plotOptions?: Plot | Record<string, any>,
    public readonly xaxis?: string[],
    public readonly labels?: string[],
  ) { }

  static createBarViewModel(data: ChartBar) {
    const { series, chart, plotOptions, xaxis, labels } = data.barEntity
    return new BarViewModel(series, chart, plotOptions, xaxis, labels)
  }

  get parsedData() {
    return {
      series: [{
        data: this?.series.map(node => node === 0 ? Math.floor(Math.random() * 10) + 1 : node),
      }],
      options: {
        chart: this.chart,
        plotOptions: this.plotOptions,
        xaxis: { categories: this.xaxis?.map((axis: string) => axis) },
        labels: this.labels
      }
    }
  }
}