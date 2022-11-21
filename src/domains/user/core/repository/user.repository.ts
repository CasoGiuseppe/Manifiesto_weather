import type { User } from '../user';

export interface IUserRepository {
  getUserFromRepository(email: string, password: string): Promise<User | undefined>;
  saveUserData(name: string | undefined, surname: string | undefined): void
}