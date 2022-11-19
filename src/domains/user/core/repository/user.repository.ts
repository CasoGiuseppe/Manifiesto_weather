import type { User } from '../user';

export interface IUserRepository {
  getUser(email: string, password: string): Promise<User | undefined>;
}