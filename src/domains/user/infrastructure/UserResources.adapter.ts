// services type to use
import type { HTTPService } from "@/app/shared/services/http/http.services";
import type { NotificationService } from "@/app/shared/services/notification/notification.services";
import type { IUserRepository } from "../core/repository/user.repository";
import type { LoaderService } from "@/app/shared/services/loader/loader.services";
import type { PersistService } from "@/app/shared/services/persistData/persist.data.services";

// domain
import type { User } from "../core/user";

// DTO object
import { UserDTOAdapter } from "./user.adapter";

// constant + types +  values
import { BASE_API_USER_URL } from "@/app/shared/helpers/constants";
import { MESSAGES, type IMessages } from "@/app/shared/types/messages";
import { ErrorsTypes, type IErrors } from "@/app/shared/types/errors";
import { CHANGE_USER_STATE } from "./store/user/actions";

export class UserResources implements IUserRepository {
  constructor(
    private readonly client: HTTPService,
    private readonly notifyService: NotificationService,
    private readonly loaderService: LoaderService,
    private readonly persistService: PersistService
  ) { }

  async getUserFromRepository(email: string, password: string): Promise<User | undefined> {
    try {
      this.loaderService.changeLoaderState({ value: true })
      const response = await this.client.get<UserDTOAdapter | any>(BASE_API_USER_URL, { email, password });

      // error handle
      if (response.errors) {
        const error = response.errors as string
        this.notifyService.notify(MESSAGES[ErrorsTypes[error as keyof IErrors] as keyof IMessages])
        this.persistService.save({ action: CHANGE_USER_STATE, params: {} })
        return
      }

      const { id, name, surname, email: userEmail, password: userPWD } = response // correct API response
      const user = new UserDTOAdapter(id, name, surname, userEmail, userPWD)

      return user.createUserInstance()
    } catch (e) {
      throw new Error(e as string)
    } finally {
      this.loaderService.changeLoaderState({ value: false })
    }
  }

  saveUserData(name: string | undefined, surname: string | undefined): void {
    this.persistService.save({ action: CHANGE_USER_STATE, params: { name, surname } })
  }
}