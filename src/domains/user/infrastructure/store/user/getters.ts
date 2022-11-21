export const GET_USER_LOGGED: string = "getUserLogged";
export default {
  [GET_USER_LOGGED]: (state: any): any => {
    return [state.name, state.surname].every((value: string) => value !== undefined)
  },
};
