import type { IMessages } from "../../types/messages";
export class NotificationService {
  constructor() { }

  notify(message: string | IMessages): void {
    window.alert(message)
  }
}