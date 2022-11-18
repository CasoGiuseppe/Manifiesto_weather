import { UserServices } from "@/domains/user/application/use-cases";
import { WeatherServices } from "@/domains/weather/application/use-cases";

import { HTTPService } from "@/app/shared/services/http/http.services";
import { NotificationService } from "@/app/shared/services/notification/notification.services";
import { UUIDService } from "@/app/shared/services/uuid/uuid.services";

import { RequestAdapter as userRequest } from "@/domains/user/infrastructure/RequestAdapter/Request.adapter";
import { NotifyAdapter } from "@/domains/user/infrastructure/NotificationAdapter/Notification.adapter";

import { RequestAdapter as weatherRequest } from "@/domains/weather/infrastructure/RequestAdapter/Request.adapter";

const userRequestAdapter = new userRequest(new HTTPService());
const weatherRequestAdapter = new weatherRequest(new HTTPService(), new UUIDService);

const notifyAdapter = new NotifyAdapter(new NotificationService())

export const UseUserService = new UserServices(userRequestAdapter, notifyAdapter);
export const UseWeatherService = new WeatherServices(weatherRequestAdapter);