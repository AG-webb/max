import api from "@/services/api/axios";
import type { AuthResponse, StateInstanceResponse } from "../types";

export const authApi = {
  getQrCode: () =>
    api.get<AuthResponse>(`qr/${import.meta.env.VITE_API_TOKEN_INSTANCE}`),
  getStateInstance: () =>
    api.get<StateInstanceResponse>(`getStateInstance/${import.meta.env.VITE_API_TOKEN_INSTANCE}`),
};
