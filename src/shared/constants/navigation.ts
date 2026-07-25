// src/shared/constants/navigation.ts

import {
  FiBox,
  FiHome,
  FiSettings,
} from 'react-icons/fi';

import { ROLES } from './roles';

export const NAVIGATION = [
  {
    id: 'dashboard',
    label: 'Dashboard',
    path: '/dashboard',
    icon: FiHome,
    roles: [ROLES.MANAGER, ROLES.VIEWER],
  },

  {
    id: 'products',
    label: 'Products',
    path: '/products',
    icon: FiBox,
    roles: [ROLES.MANAGER, ROLES.VIEWER],
  },

  {
    id: 'settings',
    label: 'Settings',
    path: '/settings',
    icon: FiSettings,
    roles: [ROLES.MANAGER, ROLES.VIEWER],
  },
] as const;