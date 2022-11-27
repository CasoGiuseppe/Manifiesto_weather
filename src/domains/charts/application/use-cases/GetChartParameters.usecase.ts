import type { IWeatherRepository } from "@/domains/weather/core/repository/weather.repository";
import type { ForecastDay, WeatherType } from "@/domains/weather/core/weather.types";
import { Chart } from "../../core/chart";
import { ChartViewModel } from "../chart.view";

export class GetChartParameters {
  constructor(
    private readonly weatherRepository: IWeatherRepository
  ) { }
  async execute(id: string) {
    const dataWeather = await (await this.weatherRepository.getWeatherForecast()) as unknown as WeatherType
    const { forecastDay } = dataWeather.find(data => data.id === id) as unknown as ForecastDay
    const {
      temperatureModel,
      humidityModel,
      windModel,
      cloudModel,
      precipitationModel,
      minMax
    } = ChartViewModel.createChartViewModel(Chart.createChart(forecastDay))
    return {
      temperature: temperatureModel,
      humidity: humidityModel,
      wind: windModel,
      cloud: cloudModel,
      precipitation: precipitationModel,
      minMax
    }
  }
}