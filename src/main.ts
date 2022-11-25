import { createApp } from "vue";
import pinia from "@/app/shared/stores/pinia";
import App from "@/app/ui/views/App.vue";
import router from "@/app/router";
import VueApexCharts from "vue3-apexcharts";

// mock server
import "@/server";

// style
import '@/assets/styles/layout.scss';

// app use cases
import { UserServices } from "@/domains/user/application/use-cases";
import { WeatherServices } from "@/domains/weather/application/use-cases";
import { ChartServices } from "@/domains/visualizers/charts/shared/application/use-case";
import { BarChartServices } from "@/domains/visualizers/charts/bar/application/use-case";

// app common services
import { HTTPService } from "@/app/shared/services/http/http.services";
import { NotificationService } from "@/app/shared/services/notification/notification.services";
import { LocatorService } from "@/app/shared/services/locator/locator.services";
import { LoaderService } from "@/app/shared/services/loader/loader.services";
import { PersistService } from "./app/shared/services/persistData/persist.data.services";


// implementations adapters
import { UserResources } from "@/domains/user/infrastructure/UserResources.adapter";
import { WeatherResources } from "@/domains/weather/infrastructure/WeatherResources.adapter";
import { ChartResources } from "@/domains/visualizers/charts/shared/infrastructure/ChartResources.adapter"
import { BarResources } from "@/domains/visualizers/charts/bar/infrastructure/BarResources.adapter";

// store
import { useAppBehavioursStore } from "@/app/shared/stores/app_behaviours";
import { userStore } from "@/domains/user/infrastructure/store/user"
import { weatherStore } from "@/domains/weather/infrastructure/store/weather"

const app = createApp(App);

app.use(pinia);
app.use(router);
app.use(VueApexCharts);

const behavioursStore = useAppBehavioursStore();
const userResources = new UserResources(
  new HTTPService(),
  new NotificationService(),
  new LoaderService(behavioursStore),
  new PersistService(userStore)
);

const weatherResources = new WeatherResources(
  new HTTPService(),
  new LocatorService(),
  new LoaderService(behavioursStore),
  new PersistService(weatherStore)
);
const chartResources = new ChartResources(weatherResources)

export const UseUserService = new UserServices(userResources);
export const UseWeatherService = new WeatherServices(weatherResources);
export const UseChartService = new ChartServices(weatherResources);
export const UseBarChartService = new BarChartServices(chartResources, new BarResources());

app.mount("#app");
app.provide<UserServices>("UseUserService", UseUserService);
app.provide<ChartServices>("UseChartService", UseChartService);
