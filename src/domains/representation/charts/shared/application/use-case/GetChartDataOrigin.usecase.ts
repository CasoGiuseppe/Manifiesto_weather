import { Chart } from '../../core/chart';
import type { ForecastDay } from "@/domains/weather/core/weather.types";
import type { IWeatherRepository } from "@/domains/weather/core/repository/weather.repository";

export class GetChartDataOrigin {
  constructor(
    private readonly weatherRepository: IWeatherRepository
  ) { }

  async execute(id: string): Promise<Chart> {
    const origin = await (await this.weatherRepository.getWeatherForecast()).weatherEntity;
    const { forecastDay } = origin.find(data => data.id === id) as unknown as ForecastDay
    return Chart.createChart({ origin: forecastDay })
  }
}