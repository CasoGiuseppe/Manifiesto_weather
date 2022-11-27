export interface IComponent {
  type: any,
  label: string,
  properties: Record<string, any>
}

export interface ICell {
  id: string,
  type?: string,
  value?: string,
  component?: IComponent
}

export interface IRowValue {
  id: string,
  values: ICell[]
}

export interface IRow {
  row: IRowValue
}

export interface ITableHead {
  head: string[],
  body: IRowValue[],
  current: string | undefined
}