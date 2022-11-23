import type { IChartModel, IChartStore, } from "./types";
import { defineStore } from "pinia";

// actions
import { CHANGE_CURRENT_CHARTS } from "./actions";

// getters
import getters from "./getters";

// types
export const useChartStore = defineStore({
  id: "chartState",
  state: (): IChartStore => {
    return {
      current: {}
    }
  },

  actions: {
    [CHANGE_CURRENT_CHARTS](chartModel: IChartModel) {
      this.current = {
        ...this.current,
        ...chartModel
      };
    },
  },

  getters,
});

export const chartStore = useChartStore();
export type ChartTypeStore = typeof chartStore;
