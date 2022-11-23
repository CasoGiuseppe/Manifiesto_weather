export interface WeatherPanel {
  current: WeatherCurrent,
  next: string,
  prev: string
}

export interface WeatherCurrent {
  id: string | undefined,
  time: string | undefined,
  place: string | undefined,
  temperature: string,
  max: string,
  min: string
}