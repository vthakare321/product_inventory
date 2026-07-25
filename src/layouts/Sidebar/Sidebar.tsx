// src/layouts/Sidebar/Sidebar.tsx

import { NAVIGATION, ROLES } from '@/shared/constants';

import { SidebarItem } from './SidebarItem';

export function Sidebar() {
  /**
   * Temporary
   * Later this will come from authStore.
   */
  const role = ROLES.MANAGER;

  const menuItems = NAVIGATION.filter((item) =>
    item.roles.includes(role),
  );

  return (
    <aside
      className="
        flex
        h-screen
        w-64
        flex-col
        border-r
        border-gray-200
        bg-white
        p-5
        dark:border-gray-700
        dark:bg-gray-900
      "
    >
      <h1 className="mb-8 text-2xl font-bold">
        Product Inventory
      </h1>

      <nav className="flex flex-1 flex-col gap-2">
        {menuItems.map((item) => (
          <SidebarItem
            key={item.id}
            item={item}
          />
        ))}
      </nav>
    </aside>
  );
}

Sidebar.displayName = 'Sidebar';