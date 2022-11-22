import type { WeatherResources } from "../../infrastructure/WeatherResources.adapter";
import { WeatherViewModel } from "../weather.view";
import type { WeatherPanel } from "./types";

export class GetWeatherForecast {
  constructor(
    private readonly weatherResources: WeatherResources
  ) { }

  async execute(id: string | undefined = undefined): Promise<WeatherPanel> {
    try {
      const APIresult = await this.weatherResources.getWeatherForecast()
      const weatherViewModel = WeatherViewModel.createWeatherViewModel(APIresult, id)

      return {
        current: {
          time: weatherViewModel.time,
          temperature: weatherViewModel.medianTemperature,
          max: weatherViewModel.maxTemperature,
          min: weatherViewModel.minTemperature
        },
        next: weatherViewModel.nextItem,
        prev: weatherViewModel.prevItem
      }
    } catch (e) {
      throw new Error(e as string);
    }
  }
}