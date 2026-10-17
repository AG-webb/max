import api from "@/services/api/axios";
import type {
  getQrCodeResponse,
  LogoutResponse,
  SendAuthorizationPasswordResponse,
  StateInstanceResponse
} from "../types";

export const authApi = {
  getQrCode: () => api.get<getQrCodeResponse>("qr"),
  logout: () => api.get<LogoutResponse>("logout"),
  getStateInstance: () => api.get<StateInstanceResponse>("state-instance"),
  sendAuthorizationPassword: (password: string) =>
    api<SendAuthorizationPasswordResponse>({
      url: "authorization-password",
      method: "post",
      data: { password },
    }),
};
