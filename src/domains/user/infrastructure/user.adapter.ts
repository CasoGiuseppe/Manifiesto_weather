import { User } from "../core/user";

export class UserDTOAdapter {
  constructor(
    public readonly id: UniqueId,
    public readonly name: string,
    public readonly surname: string,
    public readonly email: string,
    public readonly password: string,
  ) { }

  createUserInstance(): User {
    return User.createUser({
      id: this.id,
      name: this.name,
      surname: this.surname,
      email: this.email,
      password: this.password
    })
  }
}