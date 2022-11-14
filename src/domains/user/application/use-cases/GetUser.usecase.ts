import type { RequestAdapter } from "../../infrastructure/RequestAdapter/Request.adapter";
import { UserViewModel } from "../user.view";

interface IResponseType {
  name: string,
  surname: string,
}
export class GetUser {
  constructor(
    private readonly handleRequest: RequestAdapter
  ) { }

  async execute(email: string, password: string): Promise<IResponseType> {
    try {
      const view = UserViewModel.createUserViewModel(await this.handleRequest.getUser(email, password))
      return view.baseData
    } catch (e) {
      throw new Error(e as string);
    }
  }
}