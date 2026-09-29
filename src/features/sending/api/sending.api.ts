import api from "@/services/api/axios";
import type { sendMessageData, sendMessageResponse } from "../types";

export const sendingApi = {
  sendMessage: (data: sendMessageData) =>
    api<sendMessageResponse>({
      url: "send-message",
      method: "post",
      data,
    }),
};
