import type { UserResources } from "../../infrastructure/UserResources.adapter";
import type { NotifyAdapter } from "../../infrastructure/NotificationAdapter/Notification.adapter";
import { GetUser } from "./GetUser.usecase";

export class UserServices {
  private readonly getUser: GetUser;

  constructor(
    private readonly userResources: UserResources,
  ) {
    this.getUser = new GetUser(this.userResources);
  }

  async getUserByLogin(email: string, password: string) {
    return await this.getUser.execute(email, password);
  }
}