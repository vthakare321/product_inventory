// src/shared/constants/roles.ts

export const ROLES = {
  MANAGER: 'manager',
  VIEWER: 'viewer',
} as const;

export type Role = (typeof ROLES)[keyof typeof ROLES];