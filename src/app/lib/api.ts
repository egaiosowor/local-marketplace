import axios, { AxiosInstance } from "axios";
import { env } from "../config/env";

const api: AxiosInstance = axios.create({
  baseURL: env.API_URL,
  timeout: 30000,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

export default api;
