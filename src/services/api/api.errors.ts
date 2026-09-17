import axios from "axios";

export interface ApiError {
  message: string;
  errors?: Record<string, string[]>;
}

export function getApiError(error: unknown): ApiError {
  if (axios.isAxiosError<ApiError>(error)) {
    return (
      error.response?.data ?? {
        message: "Something went wrong",
      }
    );
  }

  return {
    message: "Something went wrong",
  };
}
