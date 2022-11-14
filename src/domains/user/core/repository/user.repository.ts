import type { UserType } from '../user.types';

export interface HandleRequest {
  getUser(email: string, password: string): Promise<UserType>;
}