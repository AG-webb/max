import axios, { type InternalAxiosRequestConfig } from "axios";

export const api = axios.create({
  baseURL: `${import.meta.env.VITE_SERVER_URL}/api/`,
  headers: {
    "Content-Type": "application/json",
  },
});

const controllers = new Map<string, AbortController>();

api.interceptors.request.use(
  (config) => {
    const requestKey = `${config.method}:${config.url}`;

    controllers.get(requestKey)?.abort();

    const controller = new AbortController();

    controllers.set(requestKey, controller);
    config.signal = controller.signal;

    return config;
  },
  (error) => Promise.reject(error),
);

api.interceptors.response.use(
  (response) => {
    cleanUpRequest(response.config);
    return response;
  },
  (error) => {
    if (error.config) {
      cleanUpRequest(error.config);
    }

    return Promise.reject(error);
  },
);

function getRequestKey(config: InternalAxiosRequestConfig) {
  return `${config.method}:${config.url}`;
}

function cleanUpRequest(config: InternalAxiosRequestConfig) {
  const key = getRequestKey(config);
  const controller = controllers.get(key);

  if (controller?.signal === config.signal) {
    controllers.delete(key);
  }
}
