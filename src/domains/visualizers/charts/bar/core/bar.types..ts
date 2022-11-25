export type Bar = {
  series: number[];
  xaxis: string[];
  chart: ChartType;
  plotOptions: Plot
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
  zoom: Zoom
}

export type Zoom = {
  enabled: boolean
}

export type Plot = {
  bar: BarOptions
}

export type BarOptions = {
  horizontal: boolean,
  borderRadius: number,
  endingShape: string
}