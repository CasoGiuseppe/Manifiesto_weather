import { createApp } from "vue";
import pinia from "@/app/shared/stores/pinia";
import App from "@/app/ui/views/App.vue";
import router from "@/app/router";

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
import { UUIDService } from "@/app/shared/services/uuid/uuid.services";
import { LocatorService } from "@/app/shared/services/locator/locator.services";
import { LoaderService } from "@/app/shared/services/loader/loader.services";

// implementations adapters
import { UserResources } from "@/domains/user/infrastructure/UserResources.adapter";
import { WeatherResources } from "@/domains/weather/infrastructure/WeatherResources.adapter";

// app behaviours store
import { useAppBehavioursStore } from "@/app/shared/stores/app_behaviours";

const app = createApp(App);

app.use(pinia);
app.use(router);

const behavioursStore = useAppBehavioursStore();
const userResources = new UserResources(
  new HTTPService(),
  new NotificationService(),
  new LoaderService(behavioursStore)
);
const weatherResources = new WeatherResources(
  new HTTPService(),
  new UUIDService,
  new LocatorService(),
  new LoaderService(behavioursStore)
);


export const UseUserService = new UserServices(userResources);
export const UseWeatherService = new WeatherServices(weatherResources);


app.mount("#app");
app.provide<UserServices>("UseUserService", UseUserService);
