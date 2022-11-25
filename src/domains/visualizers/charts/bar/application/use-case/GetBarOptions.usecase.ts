import type { IChartRepository } from "../../../shared/core/repository/chart.repository";
import type { BarResources } from "../../infrastructure/BarResources.adapter";
import { BarViewModel } from "../bar.view";

export class GetBarOptions {
  constructor(
    private readonly chartRepository: IChartRepository,
    private readonly barResources: BarResources
  ) { }

  async execute(id: string) {
    const BarData = await this.barResources.getChartBarData(await (await this.chartRepository.getOriginChartData(id)))
    return BarViewModel.createBarViewModel(BarData).parsedData
  }
}