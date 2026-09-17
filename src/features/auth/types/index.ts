import type { StateInstance, StatusType } from "@/types";

export type authQrType = "qrCode";
export type AuthErrorType = "error" | "already_registered";
export type AuthType = authQrType | AuthErrorType;
export type AuthErrorMessageType =
  | "timeout"
  | "not_ready"
  | "connection_closed";

export interface AuthResponse {
  type: AuthType;
  message: string;
}

export interface StateInstanceResponse {
  stateInstance: StateInstance;
}

export interface AuthState {
  qrCode: string | null;
  authenticated: StateInstance | null;
  error: AuthErrorMessageType | null;
  status: StatusType;
}
