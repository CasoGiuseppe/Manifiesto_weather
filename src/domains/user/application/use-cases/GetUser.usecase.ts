import { MESSAGES, type IMessages } from "@/app/shared/types/messages";
import { ErrorsTypes, type IErrors } from "../../core/user.types";
import type { NotifyAdapter } from "../../infrastructure/NotificationAdapter/Notification.adapter";
import type { RequestAdapter } from "../../infrastructure/RequestAdapter/Request.adapter";
import { UserViewModel } from "../user.view";

interface IResponseType {
  name: string,
  surname: string,
}
export class GetUser {
  constructor(
    private readonly handleRequest: RequestAdapter,
    private readonly handleNotification: NotifyAdapter
  ) { }

  async execute(email: string, password: string): Promise<IResponseType | Error> {
    try {
      const result = await this.handleRequest.getUser(email, password)
      const key = result as string

      if (typeof result === 'string') {
        this.handleNotification.userNotify(MESSAGES[ErrorsTypes[key as keyof IErrors] as keyof IMessages])
        return new Error(MESSAGES[ErrorsTypes[key as keyof IErrors] as keyof IMessages])
      } // error handle;

      const view = UserViewModel.createUserViewModel(result)
      this.handleNotification.userNotify(MESSAGES['USERFOUND'])

      return view.baseData
    } catch (e) {
      throw new Error(e as string);
    }
  }
}