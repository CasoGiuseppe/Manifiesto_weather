import type { IMessages } from "../../types/messages";
export class NotificationService {
  notify(message: string | IMessages): void {
    window.alert(message)
  }
}