import type { ChartType, Plot, Series, Xaxis } from "../core/bar.types.";
import { ChartBar } from "../core/bar";

export class BarDTOAdapter {
  constructor(
    public readonly series: number[],
    public readonly chart: ChartType,
    public readonly plotOptions?: Plot | Record<string, any>,
    public readonly xaxis?: string[],
    public readonly labels?: string[]
  ) { }

  createBarInstance(): ChartBar {
    return ChartBar.createChartBar(
      this.series,
      this.chart,
      this.plotOptions,
      this.xaxis,
      this.labels
    )
  }
}