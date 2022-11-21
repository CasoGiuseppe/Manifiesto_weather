import { createRouter, createWebHistory } from "vue-router";
import { UseWeatherService } from "@/main";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "start",
      meta: { login: true },
      components: {
        default: () => import("@/app/ui/views/dashboard/Dashboard.vue"),
        panel: () => import("@/app/ui/views/panel/Panel.vue"),
      },
    },
    {
      path: "/sign",
      name: "sign",
      meta: { login: true },
      components: {
        default: () => import("@/app/ui/views/dashboard/Dashboard.vue"),
        panel: () => import("@/app/ui/views/panel/Panel.vue"),
      },
    },
    {
      path: "/dashboard",
      name: "dashboard",
      meta: { login: true },
      components: {
        default: () => import("@/app/ui/views/dashboard/Dashboard.vue"),
        panel: () => import("@/app/ui/views/panel/Panel.vue"),
      },

      beforeEnter: async (to, from) => {
        await UseWeatherService.getWeatherForecastData()
      }
    },
    {
      path: "/library",
      name: "library",
      meta: { login: false },
      components: {
        default: () => import("@/app/ui/views/library/Library.vue"),
      },
    },
  ],
});

export default router;
