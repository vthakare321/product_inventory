// src/layouts/Header/Header.tsx

import { FiBell, FiMoon, FiSun } from 'react-icons/fi';

import type { HeaderProps } from './Header.types';

export function Header({
  title = 'Dashboard',
}: HeaderProps) {
  
  const theme = 'light';
  const userName = 'John Doe';

  return (
    <header className="flex h-16 items-center justify-between border-b border-gray-200 bg-white px-6 dark:border-gray-700 dark:bg-gray-900">
      <div>
        <h1 className="text-xl font-semibold text-gray-900 dark:text-white">
          {title}
        </h1>
      </div>

      <div className="flex items-center gap-4">
        <button
          type="button"
          className="rounded-lg p-2 transition-colors hover:bg-gray-100 dark:hover:bg-gray-800"
          aria-label="Toggle theme"
        >
          {theme === 'light' ? (
            <FiMoon size={20} />
          ) : (
            <FiSun size={20} />
          )}
        </button>

        <button
          type="button"
          className="relative rounded-lg p-2 transition-colors hover:bg-gray-100 dark:hover:bg-gray-800"
          aria-label="Notifications"
        >
          <FiBell size={20} />

          <span className="absolute right-1 top-1 h-2 w-2 rounded-full bg-red-500" />
        </button>

        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-600 font-semibold text-white">
            {userName.charAt(0)}
          </div>

          <div className="hidden md:block">
            <p className="text-sm font-medium text-gray-900 dark:text-white">
              {userName}
            </p>

            <p className="text-xs text-gray-500">
              Manager
            </p>
          </div>
        </div>
      </div>
    </header>
  );
}

Header.displayName = 'Header';