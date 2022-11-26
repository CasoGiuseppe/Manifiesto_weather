import type { IChartModel, IChartStore, } from "./types";
import { defineStore } from "pinia";

// actions
import { CHANGE_CURRENT_CHARTS, REMOVE_CHARTS } from "./actions";

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
      this.current = JSON.parse(JSON.stringify({ ...this.current, ...chartModel }));
    },

    [REMOVE_CHARTS]() {
      this.current = {};
    },
  },

  getters,
});

export const chartStore = useChartStore();
export type ChartTypeStore = typeof chartStore;
