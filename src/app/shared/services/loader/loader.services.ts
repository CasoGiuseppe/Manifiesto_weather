import type { AppBehavioursStore } from "../../stores/app_behaviours";
import { CHANGE_LOADER_STATE } from "../../stores/app_behaviours/actions";
import type { ILoaderType } from "../../stores/types";

export class LoaderService {
  constructor(private readonly store: AppBehavioursStore) { }

  changeLoaderState({ value }: ILoaderType): void {
    this.store[CHANGE_LOADER_STATE]({ value });
  }
}