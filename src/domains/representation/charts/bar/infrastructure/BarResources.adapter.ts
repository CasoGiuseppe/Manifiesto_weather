import type { Chart } from "../../shared/core/chart";
import type { ChartData, OriginData } from "../../shared/core/chart.types";
import { ChartSharedModule } from "../../shared/modules/modules";
import type { ChartBar } from "../core/bar";
import type { ChartType, Plot, Series, Xaxis } from "../core/bar.types.";
import type { IChartBar } from "../core/repository/bar.repository";
import { BarDTOAdapter } from "./bar.adapter";

export class BarResources implements IChartBar {
  constructor() { }

  async getChartBarData(origin: any): Promise<ChartBar> {
    const { origin: { origin: data } } = origin
    const series: number[] = data.map((chart: OriginData) => chart.temperature)
    const xaxis: string[] | undefined = data.map((chart: OriginData) => chart.time)
    const chart: ChartType | undefined = { type: 'bar', ...ChartSharedModule }
    const plotOptions: Plot = {
      bar: {
        horizontal: false,
        borderRadius: 4,
        endingShape: 'rounded'
      },
    }

    const bar = new BarDTOAdapter(series, chart, plotOptions, xaxis)
    return bar.createBarInstance()
  }
}