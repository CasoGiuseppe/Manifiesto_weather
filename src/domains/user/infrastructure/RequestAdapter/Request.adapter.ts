import { BASE_API_USER_URL } from "@/app/shared/helpers/constants";
import type { HTTPService } from "@/app/shared/services/http/http.services";
import type { UUIDService } from "@/app/shared/services/uuid/uuid.services";
import type { IHandleRequest } from "../../core/repository/user.repository";
import type { User } from "../../core/user";
import { UserDTOAdapter } from "../user.adapter";

export class RequestAdapter implements IHandleRequest {
  constructor(
    private readonly client: HTTPService,
  ) { }

  async getUser(email: string, password: string): Promise<User | string> {
    try {
      const response = await this.client.get<UserDTOAdapter | any>(BASE_API_USER_URL, { email, password });
      if (response.errors) {
        return response.errors
      }

      const { id, name, surname, email: userEmail, password: userPWD } = response // correct API response
      const instance = new UserDTOAdapter(id, name, surname, userEmail, userPWD)
      return instance.createUserInstance()
    } catch (e) {
      throw new Error(e as string)
    }
  }
}