import type { WeatherResources } from "../../infrastructure/WeatherResources.adapter";
import { WeatherViewModel } from "../weather.view";
import type { WeatherPanel } from "./types";

export class GetWeatherForecast {
  constructor(
    private readonly weatherResources: WeatherResources,
  ) { }

  async execute(id: string | undefined = undefined): Promise<WeatherPanel> {
    try {
      const forecastWeatherFromApi = await this.weatherResources.getWeatherForecast()
      const {
        currentID,
        time,
        place,
        medianTemperature,
        maxTemperature,
        minTemperature,
        nextItem,
        prevItem
      } = WeatherViewModel.createWeatherViewModel(forecastWeatherFromApi, id)

      return {
        current: {
          id: currentID,
          time,
          place,
          temperature: medianTemperature,
          max: maxTemperature,
          min: minTemperature
        },
        next: nextItem,
        prev: prevItem
      }
    } catch (e) {
      throw new Error(e as string);
    }
  }
}