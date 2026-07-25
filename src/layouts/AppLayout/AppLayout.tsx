// src/layouts/AppLayout/AppLayout.tsx

import { Outlet } from 'react-router-dom';

import { Header } from '../Header';
import { Sidebar } from '../Sidebar';

import type { AppLayoutProps } from './AppLayout.types';

export function AppLayout({ children }: AppLayoutProps) {
  return (
    <div className="flex min-h-screen bg-gray-100 dark:bg-gray-950">
      <Sidebar />

      <div className="flex min-h-screen flex-1 flex-col">
        <Header />

        <main className="flex-1 p-6">
          {children ?? <Outlet />}
        </main>
      </div>
    </div>
  );
}

AppLayout.displayName = 'AppLayout';