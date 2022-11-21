import { defineStore } from "pinia";
import { BASE_APP_BEHAVIOURS_STORE } from "@/app/shared/helpers/constants";

// actions
import { CHANGE_LOADER_STATE } from "./actions";

// getters
import getters from "./getters";
import type { ILoaderType } from "../types";


// types
export const useAppBehavioursStore = defineStore({
  id: "appBehaviours",
  state: () => BASE_APP_BEHAVIOURS_STORE,

  actions: {
    [CHANGE_LOADER_STATE]({ value = false }: ILoaderType) {
      this.hasLoader.value = value;
    },
  },

  getters,
});

const definedStore = useAppBehavioursStore();
export type AppBehavioursStore = typeof definedStore;
