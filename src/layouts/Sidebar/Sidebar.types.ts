// src/layouts/Sidebar/Sidebar.types.ts

import type { IconType } from 'react-icons';

import type { Role } from '@/shared/constants';

export interface SidebarItem {
  id: string;
  label: string;
  path: string;
  icon: IconType;
  roles: readonly Role[];
}