import { ERROR_MESSAGES } from "@/shared/constants";
import axios from "axios";

export interface ApiErrorResponse {
  error?: {
    code: string;
    message: string;
  };
}

export const getApiErrorMessage = (error: unknown): string => {
  if (!axios.isAxiosError<ApiErrorResponse>(error)) {
    return ERROR_MESSAGES.GENERIC_ERROR;
  }

  if (error.code === "ERR_CANCELED") {
    return ERROR_MESSAGES.CANCELED;
  }

  if (error.code === "ECONNABORTED" || error.code === "ETIMEDOUT") {
    return ERROR_MESSAGES.TIMEOUT_ERROR;
  }

  if (!error.response) {
    return error.code === "ERR_NETWORK"
      ? ERROR_MESSAGES.NETWORK_ERROR
      : ERROR_MESSAGES.GENERIC_ERROR;
  }

  const { status, data } = error.response;

  if (typeof data?.error?.message === "string" && data.error.message.trim()) {
    return data.error.message;
  }

  return (
    ERROR_MESSAGES[status as keyof typeof ERROR_MESSAGES] ??
    ERROR_MESSAGES.GENERIC_ERROR
  );
};
