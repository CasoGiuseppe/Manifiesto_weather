import type { Chart } from "../core/chart";
import type { ChartType } from "../core/charts.types";

export class ChartViewModel {
  private constructor(
    private readonly chartModel: ChartType[]
  ) { }

  static createChartViewModel(model: Chart) {
    return new ChartViewModel(model.chartEntity);
  }

  get temperatureModel() {
    return {
      Temperature: {
        series: [{
          name: 'Temperature',
          data: this.chartModel.map(chart => chart.temperature === 0 ? Math.floor(Math.random() * 10) + 1 : chart.temperature)
        }],
        xaxis: { categories: this.chartModel.map(chart => chart.time) }
      }
    }
  }

  get humidityModel() {
    return {
      Humidity: {
        type: 'donut',
        series: [
          Math.min(...this.chartModel.map(chart => chart.relative_humidity === 0 ? Math.floor(Math.random() * 10) + 1 : chart.relative_humidity)),
          Math.max(...this.chartModel.map(chart => chart.relative_humidity === 0 ? Math.floor(Math.random() * 10) + 1 : chart.relative_humidity)),
        ],
        labels: ['min', 'max']
      }
    }
  }
  get windModel() {
    return {
      Wind: {
        type: 'radialBar',
        series: [
          Math.max(...this.chartModel.map(chart => chart.wind_speed === 0 ? Math.floor(Math.random() * 10) + 1 : chart.wind_speed))
        ],
        labels: ['wind speed']
      }
    }
  }
}