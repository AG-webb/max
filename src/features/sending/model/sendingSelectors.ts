import type { RootState } from "@/app/store";

export const actionResultSelector = (state: RootState) =>
  state.service.actionResult;
