import type { IMessages } from "@/app/shared/types/messages";

export type UserType = {
  id: UniqueId;
  name: string,
  surname: string,
  email: string,
  password: string
}

export interface IErrors {
  '400': string
}

export const ErrorsTypes: IErrors = {
  '400': 'NOTFOUND'
}