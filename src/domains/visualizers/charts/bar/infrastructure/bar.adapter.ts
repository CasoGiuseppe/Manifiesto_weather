import type { ChartType, Plot, Series, Xaxis } from "../core/bar.types.";
import { ChartBar } from "../core/bar";

export class BarDTOAdapter {
  constructor(
    public readonly series: number[],
    public readonly xaxis: string[],
    public readonly chart: ChartType,
    public readonly plotOptions: Plot,
    public readonly typeChart?: boolean
  ) { }

  createBarInstance(): ChartBar {
    return ChartBar.createChartBar(
      this.series,
      this.xaxis,
      this.chart,
      this.plotOptions
    )
  }
}