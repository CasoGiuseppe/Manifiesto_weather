import { UserServices } from "@/domains/user/application/use-cases";
import { HTTPService } from "@/app/shared/services/http/http.services";
import { NotificationService } from "@/app/shared/services/notification/notification.services";

import { RequestAdapter } from "@/domains/user/infrastructure/RequestAdapter/Request.adapter";
import { NotifyAdapter } from "@/domains/user/infrastructure/NotificationAdapter/Notification.adapter";

const clientService = new HTTPService();
const notificationService = new NotificationService();

const requestAdapter = new RequestAdapter(clientService);
const notifyAdapter = new NotifyAdapter(notificationService)

export const userService = new UserServices(requestAdapter, notifyAdapter);