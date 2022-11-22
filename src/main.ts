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

// app common services
import { HTTPService } from "@/app/shared/services/http/http.services";
import { NotificationService } from "@/app/shared/services/notification/notification.services";
import { LocatorService } from "@/app/shared/services/locator/locator.services";
import { LoaderService } from "@/app/shared/services/loader/loader.services";
import { PersistService } from "./app/shared/services/persistData/persist.data.services";

// implementations adapters
import { UserResources } from "@/domains/user/infrastructure/UserResources.adapter";
import { WeatherResources } from "@/domains/weather/infrastructure/WeatherResources.adapter";

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


export const UseUserService = new UserServices(userResources);
export const UseWeatherService = new WeatherServices(weatherResources);


app.mount("#app");
app.provide<UserServices>("UseUserService", UseUserService);
