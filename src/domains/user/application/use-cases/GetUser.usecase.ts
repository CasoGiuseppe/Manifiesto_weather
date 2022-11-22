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

  async execute(email: string, password: string): Promise<IResponseType | undefined | boolean> {
    try {
      const APIresult = await this.userResource.getUserFromRepository(email, password)
      if (!APIresult) return

      const userModelView = UserViewModel.createUserViewModel(APIresult)
      const { name, surname } = userModelView.baseData
      this.userResource.saveUserData(name, surname)

      return userModelView.isLogged
    } catch (e) {
      throw new Error(e as string);
    }
  }
}