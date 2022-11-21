import type { ICosmeticStore } from "../stores/types";

export const MIN_PWD_REQUIRED: number = 8
export const BASE_API_USER_URL = `${import.meta.env.VITE_APP_API_NAMESPACE}${import.meta.env.VITE_APP_API_ENDPOINT}`
export const BASE_API_WEATHER_URL = `${import.meta.env.VITE_APP_WEATHER_API_ENDPOINT}`;
export const BASE_LAT_DEFAULT = import.meta.env.VITE_APP_LAT_DEFAULT;
export const BASE_LONG_DEFAULT = import.meta.env.VITE_APP_LONG_DEFAULT;
export const BASE_APP_BEHAVIOURS_STORE: ICosmeticStore = {
  hasLoader: {
    value: false,
  },
};