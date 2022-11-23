import type { IWeatherRepository } from "@/domains/weather/core/repository/weather.repository";
import type { ForecastDay } from "@/domains/weather/core/weather.types";
import { Chart } from "../../core/chart";
import { ChartViewModel } from "../chart.view";

export class GetChartParameters {
  constructor(
    private readonly weatherRepository: IWeatherRepository
  ) { }
  async execute(id: string) {
    const dataWeather = await (await this.weatherRepository.getWeatherForecast()).weatherEntity
    const { forecastDay } = dataWeather.find(data => data.id === id) as unknown as ForecastDay
    const { temperatureModel, humidityModel, windModel } = ChartViewModel.createChartViewModel(Chart.createChart(forecastDay))
    return {
      temperature: temperatureModel,
      humidity: humidityModel,
      wind: windModel
    }
  }
}