import type { INotify } from "../../core/repository/user.repository";
import type { NotificationService } from "@/app/shared/services/notification/notification.services";

export class NotifyAdapter implements INotify {
  constructor(private readonly notification: NotificationService) { }

  userNotify(message: string): void {
    this.notification.notify(message)
  }
}