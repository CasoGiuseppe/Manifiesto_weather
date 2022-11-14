import type { RequestAdapter } from "../../infrastructure/RequestAdapter/Request.adapter";
import { GetUser } from "./GetUser.usecase";

export class UserServices {
  private readonly getUser: GetUser;

  constructor(
    private readonly requestAdapter: RequestAdapter
  ) {
    this.getUser = new GetUser(this.requestAdapter);
  }

  async getUserByLogin(email: string, password: string) {
    return await this.getUser.execute(email, password);
  }
}