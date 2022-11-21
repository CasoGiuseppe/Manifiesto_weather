import { BASE_API_USER_URL } from "@/app/shared/helpers/constants";
import type { HTTPService } from "@/app/shared/services/http/http.services";
import type { NotificationService } from "@/app/shared/services/notification/notification.services";
import type { UUIDService } from "@/app/shared/services/uuid/uuid.services";
import type { IUserRepository } from "../core/repository/user.repository";
import type { User } from "../core/user";
import { UserDTOAdapter } from "./user.adapter";
import { MESSAGES, type IMessages } from "@/app/shared/types/messages";
import { ErrorsTypes, type IErrors } from "@/app/shared/types/errors";
import type { LoaderService } from "@/app/shared/services/loader/loader.services";

export class UserResources implements IUserRepository {
  constructor(
    private readonly client: HTTPService,
    private readonly notifyService: NotificationService,
    private readonly loaderService: LoaderService
  ) { }

  async getUserFromRepository(email: string, password: string): Promise<User | undefined> {
    try {
      this.loaderService.changeLoaderState({ value: true })
      const response = await this.client.get<UserDTOAdapter | any>(BASE_API_USER_URL, { email, password });

      // error handle
      if (response.errors) {
        const error = response.errors as string
        this.notifyService.notify(MESSAGES[ErrorsTypes[error as keyof IErrors] as keyof IMessages])
        return
      }

      const { id, name, surname, email: userEmail, password: userPWD } = response // correct API response
      const user = new UserDTOAdapter(id, name, surname, userEmail, userPWD)

      this.notifyService.notify(MESSAGES['USERFOUND'])
      return user.createUserInstance()
    } catch (e) {
      throw new Error(e as string)
    } finally {
      this.loaderService.changeLoaderState({ value: false })
    }
  }
}