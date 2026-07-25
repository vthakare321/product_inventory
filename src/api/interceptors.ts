import type {
  AxiosError,
  AxiosResponse,
  InternalAxiosRequestConfig,
} from 'axios';

import { apiClient } from './client';
import { logger } from '@/shared/utils';

apiClient.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    logger.info(
      `[API Request] ${config.method?.toUpperCase()} ${config.url}`,
    );

    return config;
  },
  (error: AxiosError) => Promise.reject(error),
);

apiClient.interceptors.response.use(
  (response: AxiosResponse) => {
    logger.info(
      `[API Response] ${response.status} ${response.config.url}`,
    );

    return response;
  },
  (error: AxiosError) => {
    logger.error('[API Error]', error);

    return Promise.reject(error);
  },
);