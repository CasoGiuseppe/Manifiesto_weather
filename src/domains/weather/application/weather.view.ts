import type { Weather } from "../core/weather";
import type { WeatherType } from "../core/weather.types";

export class WeatherViewModel {
  private constructor(
    private readonly weather: WeatherType,
    private readonly id: string | undefined,
  ) { }

  static createWeatherViewModel(weather: Weather, id: string | undefined) {
    return new WeatherViewModel(weather.weatherEntity || weather, id);
  }

  get all() {
    return this.weather
  }

  get currentDay() {
    return (!this.id) ? this.weather[0] : this.weather.find(node => node.id === this.id)
  }

  get currentID() {
    return this.currentDay?.id
  }

  get allTemperatures(): number[] {
    return this.currentDay?.forecastDay.map(node => Math.floor(node.temperature)) || []
  }

  get medianTemperature(): string {
    return `${Math.floor((Math.min(...this.allTemperatures) + Math.max(...this.allTemperatures)) / 2)}`
  }

  get minTemperature(): string {
    return `${Math.min(...this.allTemperatures)}°`
  }

  get maxTemperature(): string {
    return `${Math.max(...this.allTemperatures)}°`
  }

  get nextItem(): string {
    const currentLenght: number = this.weather.length
    const currentIndex: number = this.weather.indexOf(this.currentDay || this.weather[0])
    return this.weather[(currentIndex + 1) % currentLenght]?.time.replace(/\//g, '')
  }

  get prevItem(): string {
    const currentLenght: number = this.weather.length
    const currentIndex: number = this.weather.indexOf(this.currentDay || this.weather[0])
    return this.weather[(currentIndex + currentLenght - 1) % currentLenght]?.time.replace(/\//g, '')
  }

  get time(): string | undefined {
    return this.currentDay?.time.replace(/\//g, '.')
  }

  get place(): string | undefined {
    return this.currentDay?.place.replace(/\//g, ' - ').toLowerCase()
  }
}
