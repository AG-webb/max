import api from "@/services/api/axios";
import type {
  AuthResponse,
  LogoutResponse,
  SendAuthorizationPasswordResponse,
  StateInstanceResponse,
} from "../types";

export const authApi = {
  getQrCode: () => api.get<AuthResponse>("qr"),
  logout: () => api.get<LogoutResponse>("logout"),
  getStateInstance: () => api.get<StateInstanceResponse>("state-instance"),
  sendAuthorizationPassword: (password: string) =>
    api<SendAuthorizationPasswordResponse>({
      url: "authorization-password",
      method: "post",
      data: { password },
    }),
};
