import type { RequestAdapter } from "../../infrastructure/RequestAdapter/Request.adapter";
import type { NotifyAdapter } from "../../infrastructure/NotificationAdapter/Notification.adapter";
import { GetUser } from "./GetUser.usecase";

export class UserServices {
  private readonly getUser: GetUser;

  constructor(
    private readonly requestAdapter: RequestAdapter,
    private readonly notifiAdapter: NotifyAdapter
  ) {
    this.getUser = new GetUser(this.requestAdapter, this.notifiAdapter);
  }

  async getUserByLogin(email: string, password: string) {
    return await this.getUser.execute(email, password);
  }
}