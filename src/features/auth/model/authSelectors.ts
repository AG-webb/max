import type { RootState } from "@/app/store";

export const qrCodeSelector = (state: RootState) => state.auth.qrCode;
export const statusSelector = (state: RootState) => state.auth.status;
export const errorSelector = (state: RootState) => state.auth.error;
export const authenticatedSelector = (state: RootState) =>
  state.auth.authenticated;
