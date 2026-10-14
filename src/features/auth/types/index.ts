import type { DefaultStateType, StateInstance } from "@/types";

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

export interface LogoutResponse {
  isLogout: boolean;
}

export interface StateInstanceResponse {
  stateInstance: StateInstance;
}

export interface SendAuthorizationPasswordResponse {
  status: boolean;
  data: AuthorizationPasswordSuccessData | AuthorizationPasswordFailData;
}

export type AuthorizationPasswordSuccessData = {
  status: "success";
  reason: "";
};

export type AuthorizationPasswordFailData = {
  status: "fail";
  reason:
    | "already_registered"
    | "invalid_password"
    | "rate_limit_exceeded"
    | "authorization_not_started"
    | "timeout";
};

export interface AuthState extends DefaultStateType {
  qrCode: string | null;
  stateInstance: StateInstance | null;
}
