import type { User } from '../user';

export interface IUserRepository {
  getUserFromRepository(email: string, password: string): Promise<User | undefined>;
}