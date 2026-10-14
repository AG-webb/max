import type { RootState } from "@/app/store";

export const qrCodeSelector = (state: RootState) => state.auth.qrCode;
export const actionResultSelector = (state: RootState) =>
  state.auth.actionResult;
export const stateInstanceSelector = (state: RootState) =>
  state.auth.stateInstance;
