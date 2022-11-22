import type { WeatherPanel } from "@/domains/weather/application/use-cases/types";
import type { WeatherType } from "@/domains/weather/core/weather.types";
import { defineStore } from "pinia";

// actions
import { CHANGE_WEATHER_LIST, CHANGE_CURRENT_DAY } from "./actions";

// getters
import getters from "./getters";
import type { IWeatherStore } from "./types";


// types
export const useWeatherStore = defineStore({
  id: "weatherState",
  state: (): IWeatherStore => {
    return {
      weather: undefined,
      current: undefined
    }
  },

  actions: {
    [CHANGE_WEATHER_LIST](weather: WeatherType | undefined = undefined) {
      this.weather = weather;
    },

    [CHANGE_CURRENT_DAY](current: WeatherPanel | undefined = undefined) {
      this.current = current;
    },
  },

  getters,
});

export const weatherStore = useWeatherStore();
export type WeatherTypeStore = typeof weatherStore;
