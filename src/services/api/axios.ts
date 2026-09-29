import axios, { AxiosError } from "axios";

const api = axios.create({
  baseURL: `${import.meta.env.VITE_SERVER_URL}/api/`,
  headers: {
    "Content-Type": "application/json",
  },
});

api.interceptors.response.use(
  (response) => response,
  (error: AxiosError) => {
    if (!error.response) {
      console.error("Network Error");
      return Promise.reject(error);
    }

    switch (error.response.status) {
      case 403:
        console.error("Access denied");
        break;

      case 404:
        console.error("Resource not found");
        break;

      case 422:
        console.error("Validation error");
        break;

      case 500:
        console.error("Server Error");
        break;
    }

    return Promise.reject(error);
  },
);

export default api;
