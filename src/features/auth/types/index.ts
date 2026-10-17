import type { DefaultStateType, StateInstance } from "@/types";

type QrSuccessType = "qrCode";
type QrErrorType = "error" | "already_registered";
type getQrCodeType = QrSuccessType | QrErrorType;
export interface getQrCodeResponse {
  type: getQrCodeType;
  message: string;
}

export type getQrCodeErrorResponse =
  | "timeout"
  | "not_ready"
  | "connection_closed";

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
