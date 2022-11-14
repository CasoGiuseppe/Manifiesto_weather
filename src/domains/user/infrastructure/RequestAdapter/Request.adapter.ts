import type { HTTPService } from "@/app/shared/services/http/http.services";
import type { UUIDService } from "@/app/shared/services/uuid/uuid.services";
import type { IHandleRequest } from "../../core/repository/user.repository";
import type { User } from "../../core/user";
import { UserDTOAdapter } from "../user.adapter";

export class RequestAdapter implements IHandleRequest {
  constructor(
    private readonly client: HTTPService,
    private readonly uuid: UUIDService
  ) { }

  async getUser(email: string, password: string): Promise<User> {
    const { id, name, surname, email: userEmail, password: userPWD } = await this.client.get<UserDTOAdapter>(`${import.meta.env.VITE_APP_API_ENDPOINT}`)
    const instance = new UserDTOAdapter(id, name, surname, userEmail, userPWD)
    return instance.createUserInstance()
  }
}