export type Bar = {
  series: number[];
  xaxis?: string[];
  labels?: string[];
  chart: ChartType;
  plotOptions?: Plot;
  theme?: Theme
}

export type Series = {
  name: string,
  data: number[] | string[] | undefined;
}

export type Xaxis = {
  [key: string]: string[]
}

export type ChartType = {
  type: string,
  foreColor: string,
  zoom: Enabled
}

export type Enabled = {
  enabled: boolean
}

export type Plot = {
  [key: string]: PlotOptions
}

export type PlotOptions = {
  horizontal?: boolean,
  borderRadius?: number,
  endingShape?: string,
  dataLabels?: DataLabelsOptions
}

export type Theme = {
  monochrome?: Enabled
}

export type DataLabelsOptions = {
  name: DataNameOptions
}

export type DataNameOptions = {
  fontSize: string,
  color: string
}