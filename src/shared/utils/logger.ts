// src/shared/utils/logger.ts

import { env } from '@/config/env';

export const logger = {
  log: (...args: unknown[]): void => {
    if (env.enableLogger) {
      console.log(...args);
    }
  },

  info: (...args: unknown[]): void => {
    if (env.enableLogger) {
      console.info(...args);
    }
  },

  warn: (...args: unknown[]): void => {
    if (env.enableLogger) {
      console.warn(...args);
    }
  },

  error: (...args: unknown[]): void => {
    if (env.enableLogger) {
      console.error(...args);
    }
  },
};