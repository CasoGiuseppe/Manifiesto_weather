import type { IWeatherRepository } from "@/domains/weather/core/repository/weather.repository";
import { GetChartParameters } from "./GetChartParameters.usecase";

export class ChartServices {
  private readonly getChartParameters: GetChartParameters;

  constructor(
    private readonly wheaterRepository: IWeatherRepository
  ) {
    this.getChartParameters = new GetChartParameters(this.wheaterRepository);
  }

  async getChartParamsData(id: string) {
    return this.getChartParameters.execute(id)
  }
}