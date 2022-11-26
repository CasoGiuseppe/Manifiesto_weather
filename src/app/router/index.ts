import { createRouter, createWebHistory } from "vue-router";
import { UseWeatherService, UseBarChartService } from "@/main";
import { userStore } from "@/domains/user/infrastructure/store/user"
import { weatherStore } from "@/domains/weather/infrastructure/store/weather";
import { CHANGE_CURRENT_DAY } from "@/domains/weather/infrastructure/store/weather/actions";
import { chartStore } from "@/domains/visualizers/charts/shared/infrastructure/store/chart";
import { CHANGE_CURRENT_CHARTS } from "@/domains/visualizers/charts/shared/infrastructure/store/chart/actions";
import { BAR_TYPE } from "../ui/views/dashboard/types";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "start",
      meta: { login: true, type: 'start' },
      components: {
        default: () => import("@/app/ui/views/dashboard/Dashboard.vue"),
        panel: () => import("@/app/ui/views/panel/Panel.vue"),
      },
    },
    {
      path: "/sign",
      name: "sign",
      meta: { login: true, type: 'sign-in' },
      components: {
        default: () => import("@/app/ui/views/dashboard/Dashboard.vue"),
        panel: () => import("@/app/ui/views/panel/Panel.vue"),
      },
    },
    {
      path: "/dashboard/:id?",
      name: "dashboard",
      meta: { login: true, type: 'dashboard' },
      components: {
        default: () => import("@/app/ui/views/dashboard/Dashboard.vue"),
        panel: () => import("@/app/ui/views/panel/Panel.vue"),
      },

      beforeEnter: async (to, from) => {
        const isUserLogged = userStore.getUserLogged
        if (!isUserLogged) return '/'
      },
    },
    {
      path: "/library",
      name: "library",
      meta: { login: false, type: 'library' },
      components: {
        default: () => import("@/app/ui/views/library/Library.vue"),
      },
    },
  ],
});

router.beforeEach(async (to, from) => {
  // launch weather use case if route is dashboard
  const isDashboard = to.meta.type === 'dashboard'
  const isUserLogged = userStore.getUserLogged
  if (isDashboard && isUserLogged) {
    const routerID = to.params.id as string

    // get current day info and charts
    const { prev, next, current } = await UseWeatherService.getWeatherForecastData(routerID)
    // const { temperature, humidity, wind, cloud, minMax } = await UseChartService?.getChartParamsData(routerID)

    console.log('bar', await UseBarChartService.getBarChartOptions(routerID))
    // persist data on local store
    //chartStore[CHANGE_CURRENT_CHARTS]?.(minMax)
    //chartStore[CHANGE_CURRENT_CHARTS]?.(humidity)
    //chartStore[CHANGE_CURRENT_CHARTS]?.(wind)
    //chartStore[CHANGE_CURRENT_CHARTS]?.(cloud)
    chartStore[CHANGE_CURRENT_CHARTS]?.({
      Temperature: await UseBarChartService.getBarChartOptions(routerID)
    })
    weatherStore[CHANGE_CURRENT_DAY]?.({ prev, next, current })
  }
})

export default router;
