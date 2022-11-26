import type { IChartRepository } from "../../../shared/core/repository/chart.repository";
import type { BarResources } from "../../infrastructure/BarResources.adapter";
import { GetBarOptions } from "./GetBarOptions.usecase";

export class BarChartServices {
  private readonly getBarOptions: GetBarOptions;

  constructor(
    private readonly chartRepository: IChartRepository,
    private readonly barResources: BarResources
  ) {
    this.getBarOptions = new GetBarOptions(this.chartRepository, this.barResources);
  }

  async getBarChartOptions(id: string) {
    return await this.getBarOptions.execute(id);
  }
}