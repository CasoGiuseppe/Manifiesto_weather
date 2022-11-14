import type { User } from "../core/user";

export class UserViewModel {
  private constructor(
    public readonly id: UniqueId,
    public readonly name: string,
    public readonly surname: string,
    public readonly email: string,
    public readonly password: string
  ) { }

  static createUserViewModel(user: User) {
    const { id, name, surname, email, password } = user.userEntity;
    return new UserViewModel(id, name, surname, email, password);
  }


  get baseData() {
    return {
      name: this.name,
      surname: this.surname
    }
  }
}
