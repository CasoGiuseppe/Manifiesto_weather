import type { IWeatherRepository } from "@/domains/weather/core/repository/weather.repository";
import type { ForecastDay } from "@/domains/weather/core/weather.types";
import { Chart } from "../core/chart";
import type { IChartRepository } from "../core/repository/chart.repository";

export class ChartResources implements IChartRepository {
  constructor(
    private readonly weatherRepository: IWeatherRepository
  ) { }

  async getOriginChartData(id: string): Promise<Chart> {
    const origin = await (await this.weatherRepository.getWeatherForecast()).weatherEntity;
    const { forecastDay } = origin.find(data => data.id === id) as unknown as ForecastDay
    return Chart.createChart({ origin: forecastDay })
  }
}