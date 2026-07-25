import { env } from "../config/env";

export const API_CONFIG = {
  baseURL: env.apiBaseUrl,
  timeout: env.apiTimeout,
} as const;