import type { IWeatherRepository } from "@/domains/weather/core/repository/weather.repository";
import { GetChartDataOrigin } from "./GetChartDataOrigin.usecase";

export class ChartServices {
  private readonly getChartParameters: GetChartDataOrigin;

  constructor(
    private readonly wheaterRepository: IWeatherRepository
  ) {
    this.getChartParameters = new GetChartDataOrigin(this.wheaterRepository);
  }

  async getChartParamsData(id: string) {
    return this.getChartParameters.execute(id)
  }
}