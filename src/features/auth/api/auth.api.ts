import api from "@/services/api/axios";
import type { AuthResponse, StateInstanceResponse } from "../types";

export const authApi = {
  getQrCode: () => api.get<AuthResponse>("qr"),
  getStateInstance: () => api.get<StateInstanceResponse>("state-instance"),
};
