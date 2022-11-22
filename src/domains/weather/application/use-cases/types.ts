export interface WeatherPanel {
  current: WeatherCurrent,
  next: string,
  prev: string
}

export interface WeatherCurrent {
  time: string | undefined,
  place: string | undefined,
  temperature: string,
  max: string,
  min: string
}