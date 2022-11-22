import type { WeatherType } from "@/domains/weather/core/weather.types";
import { defineStore } from "pinia";

// actions
import { CHANGE_WEATHER_LIST } from "./actions";

// getters
import getters from "./getters";
import type { IWeatherStore } from "./types";


// types
export const useWeatherStore = defineStore({
  id: "weatherState",
  state: (): IWeatherStore => {
    return {
      weather: undefined,
    }
  },

  actions: {
    [CHANGE_WEATHER_LIST](weather: WeatherType | undefined = undefined) {
      this.weather = weather;
    },
  },

  getters,
});

export const weatherStore = useWeatherStore();
export type WeatherTypeStore = typeof weatherStore;
