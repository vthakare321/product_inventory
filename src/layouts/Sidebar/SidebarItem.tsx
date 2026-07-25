// src/layouts/Sidebar/SidebarItem.tsx

import { NavLink } from 'react-router-dom';

import type { SidebarItem as SidebarItemType } from './Sidebar.types';

interface SidebarItemProps {
  item: SidebarItemType;
}

export function SidebarItem({
  item,
}: SidebarItemProps) {
  const Icon = item.icon;

  return (
    <NavLink
      to={item.path}
      className={({ isActive }) =>
        `
        flex
        items-center
        gap-3
        rounded-lg
        px-4
        py-3
        text-sm
        font-medium
        transition-colors

        ${
          isActive
            ? 'bg-blue-600 text-white'
            : 'text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-800'
        }
      `
      }
    >
      <Icon size={20} />

      <span>{item.label}</span>
    </NavLink>
  );
}

SidebarItem.displayName = 'SidebarItem';