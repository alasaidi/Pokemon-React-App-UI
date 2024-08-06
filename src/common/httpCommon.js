import axios from "axios";
import { BASE_URL } from "./baseUrl";

const axiosService = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
    // "Access-Control-Allow-Origin": "*",
    // "Access-Control-Allow-Headers": "*",
    // "Access-Control-Allow-Methods": "GET,POST,PUT,DELETE",
  },
  withCredentials: true,
});

// Add a request interceptor
axiosService.interceptors.request.use(
  (config) => {
    // Get the token from localStorage or wherever you store it after login
    const token = localStorage.getItem("token");
    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default axiosService;
