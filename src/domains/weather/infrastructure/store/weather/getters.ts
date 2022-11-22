import type { IWeatherStore } from "./types";

export const GET_WEATHER_LIST: string = "getWeatherList";
export default {
  [GET_WEATHER_LIST]: (state: any): IWeatherStore | undefined => state.weather
};
