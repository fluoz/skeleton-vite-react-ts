// apiClient.ts
import { env } from "@/config/env";
import { useAuthStore } from "@/hooks/store-hooks/use-auth-store";
import axios from "axios";

const apiClient = axios.create({
  baseURL: env.VITE_API_URL,
  timeout: 10000,
});

// request interceptor
apiClient.interceptors.request.use(
  (config) => {
    const token = useAuthStore.getState().token;
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

// response interceptor
apiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      // logout user
      useAuthStore.getState().removeToken();
    }
    return Promise.reject(error);
  },
);

export default apiClient;
