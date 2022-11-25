import type { ChartData } from '../../../shared/core/chart.types';
import type { ChartBar } from '../bar';

export interface IChartBar {
  getChartBarData(origin: ChartData): Promise<ChartBar>;
}