import type { Chart } from "../core/chart";
import type { ChartModel, ChartType } from "../core/charts.types";

export class ChartViewModel {
  private constructor(
    private readonly chartModel: ChartType[]
  ) { }

  static createChartViewModel(model: Chart) {
    return new ChartViewModel(model.chartEntity);
  }

  get all() {
    return this.chartModel
  }

  get temperatureModel(): ChartModel {
    return {
      Temperature: {
        series: [{
          name: 'Temperature',
          data: this.chartModel.map(chart => chart.temperature === 0 ? Math.floor(Math.random() * 10) + 1 : chart.temperature)
        }],
        xaxis: { categories: this.chartModel.map(chart => chart.time.slice(0, -3)) }
      }
    }
  }

  get humidityModel(): ChartModel {
    return {
      Humidity: {
        series: [
          Math.min(...this.chartModel.map(chart => chart.relative_humidity === 0 ? Math.floor(Math.random() * 10) + 1 : chart.relative_humidity)),
          Math.max(...this.chartModel.map(chart => chart.relative_humidity === 0 ? Math.floor(Math.random() * 10) + 1 : chart.relative_humidity)),
        ],
        labels: ['min', 'max']
      }
    }
  }
  get windModel(): ChartModel {
    return {
      Wind: {
        series: [
          Math.max(...this.chartModel.map(chart => chart.wind_speed === 0 ? Math.floor(Math.random() * 100) + 1 : chart.wind_speed))
        ],
        labels: ['wind speed']
      }
    }
  }

  get cloudModel(): ChartModel {
    return {
      Cloud: {
        series: [
          Math.min(...this.chartModel.map(chart => chart.cloud_cover || 0)),
          Math.max(...this.chartModel.map(chart => chart.cloud_cover || 0))
        ],
        labels: ['min', 'max']
      }
    }
  }

  get precipitationModel(): ChartModel {
    return {
      Precipitation: {
        series: [
          Math.max(...this.chartModel.map(chart => chart.precipitation === 0 ? Math.floor(Math.random() * 100) + 1 : chart.precipitation))
        ],
        labels: ['precipitation']
      }
    }
  }

  get minMax(): Record<string, string> {
    const temperatures = this.chartModel?.map(node => Math.floor(node.temperature)) || [];
    return {
      min: `${Math.min(...temperatures)}°`,
      max: `${Math.max(...temperatures)}°`
    }
  }
}