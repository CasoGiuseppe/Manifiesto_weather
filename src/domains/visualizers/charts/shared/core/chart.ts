import type { ChartData } from './chart.types';

export class Chart {
  constructor(
    private readonly origin: ChartData
  ) { }

  static createChart(props: ChartData) {
    return new Chart(props)
  }

  get chartEntity(): ChartData {
    return this.origin
  }
}