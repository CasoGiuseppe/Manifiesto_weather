import type { UserType } from './user.types'

export class User {
  constructor(
    private readonly id: UniqueId,
    private readonly name: string,
    private readonly surname: string,
    private readonly email: string,
    private readonly password: string
  ) { }

  static createUser(props: UserType) {
    const { id, name, surname, email, password } = props
    return new User(id, name, surname, email, password)
  }

  get user(): UserType {
    return {
      id: this.id,
      name: this.name,
      surname: this.surname,
      email: this.email,
      password: this.password
    }
  }
}