import type { RootState } from "@/app/store/store";

export const actionResultSelector = (state: RootState) =>
  state.service.actionResult;
