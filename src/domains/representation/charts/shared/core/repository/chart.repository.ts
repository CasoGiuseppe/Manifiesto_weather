import type { Chart } from '../chart';

export interface IChartRepository {
  getOriginChartData(id: string): Promise<Chart>
}