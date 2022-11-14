import type { User } from '../user';

export interface IHandleRequest {
  getUser(email: string, password: string): Promise<User>;
}