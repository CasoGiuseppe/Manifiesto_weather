export const GET_LOADER_STATE: string = "getLoaderState";
export default {
  [GET_LOADER_STATE]: (state: any): any => state.hasLoader.state,
};
