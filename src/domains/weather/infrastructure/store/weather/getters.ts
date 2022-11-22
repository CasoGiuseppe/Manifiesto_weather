export const GET_WEATHER_LIST: string = "getWeatherList";
export default {
  [GET_WEATHER_LIST]: (state: any): any | undefined => state.weather
};
