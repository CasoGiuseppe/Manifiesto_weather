import { Is as IsBadge, IsChart } from '@/app/ui/components/base/base-badge/types'

export type CUSTOMMODEL = {
  typeChart: IsChart,
  class: string,
  direction: IsBadge,
  payoff: string,
}

export const BAR_TYPE: CUSTOMMODEL = {
  typeChart: IsChart.TRUE,
  class: '60',
  direction: IsBadge.COLUMN,
  payoff: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et, sed do eiusmod tempor incididunt ut labore et'
}