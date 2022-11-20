import { UserServices } from "@/domains/user/application/use-cases";
import { WeatherServices } from "@/domains/weather/application/use-cases";

import { HTTPService } from "@/app/shared/services/http/http.services";
import { NotificationService } from "@/app/shared/services/notification/notification.services";
import { UUIDService } from "@/app/shared/services/uuid/uuid.services";

import { UserResources } from "@/domains/user/infrastructure/UserResources.adapter";
import { NotifyAdapter } from "@/domains/user/infrastructure/NotificationAdapter/Notification.adapter";

import { WeatherResources } from "@/domains/weather/infrastructure/WeatherResources.adapter";

const userResources = new UserResources(new HTTPService(), new NotificationService());
const weatherResources = new WeatherResources(new HTTPService(), new UUIDService);


export const UseUserService = new UserServices(userResources);
export const UseWeatherService = new WeatherServices(weatherResources);