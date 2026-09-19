import type { RootState } from "@/app/store/store";

export const qrCodeSelector = (state: RootState) => state.auth.qrCode;
export const actionResultSelector = (state: RootState) => state.auth.actionResult;
export const authenticatedSelector = (state: RootState) =>
  state.auth.authenticated;
