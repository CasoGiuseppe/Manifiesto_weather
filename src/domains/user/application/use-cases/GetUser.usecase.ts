import { MESSAGES, type IMessages } from "@/app/shared/types/messages";
import { ErrorsTypes, type IErrors } from "@/app/shared/types/errors";
import type { NotifyAdapter } from "../../infrastructure/NotificationAdapter/Notification.adapter";
import type { UserResources } from "../../infrastructure/UserResources.adapter";
import { UserViewModel } from "../user.view";

export interface IResponseType {
  name: string,
  surname: string,
}
export class GetUser {
  constructor(
    private readonly userResource: UserResources,
  ) { }

  async execute(email: string, password: string): Promise<IResponseType | undefined> {
    try {
      const result = await this.userResource.getUser(email, password)
      if (!result) return
      return UserViewModel.createUserViewModel(result).baseData
    } catch (e) {
      throw new Error(e as string);
    }
  }
}