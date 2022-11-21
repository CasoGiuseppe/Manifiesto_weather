import { defineStore } from "pinia";

// actions
import { CHANGE_USER_STATE } from "./actions";

// getters
import getters from "./getters";
import type { IUserStore } from "./types";


// types
export const useUserStore = defineStore({
  id: "userState",
  state: (): IUserStore => {
    return {
      name: undefined,
      surname: undefined,
    }
  },

  actions: {
    [CHANGE_USER_STATE]({ name = undefined, surname = undefined }: IUserStore) {
      this.name = name;
      this.surname = surname
    },
  },

  getters,
});

export const userStore = useUserStore();
export type UserTypeStore = typeof userStore;
