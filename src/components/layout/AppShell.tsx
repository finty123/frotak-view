import { useState } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { Sidebar } from './Sidebar';
import { Topbar } from './Topbar';

export function AppShell() {
  const [collapsed, setCollapsed] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { pathname } = useLocation();
  return (
    <div className="app-grid">
      <Sidebar collapsed={collapsed} onCollapsedChange={setCollapsed} mobileOpen={mobileOpen} onMobileOpenChange={setMobileOpen} />
      <div className="min-w-0">
        <Topbar onMobileMenu={() => setMobileOpen(true)} />
        <main key={pathname} className="page-enter min-h-[calc(100vh-64px)] bg-bg-weak-50 p-4 md:p-6 xl:p-7">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
