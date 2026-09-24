import { useMemo, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { RiArrowLeftSLine, RiArrowRightSLine, RiArrowDownSLine, RiCloseLine, RiQuestionLine, RiSettings3Line } from '@remixicon/react';
import type { NavItem } from '@/types';
import { cn } from '@/lib/utils';
import { managerNavigation, visionNavigation } from './navigation';

function isItemActive(item: NavItem, pathname: string): boolean {
  return item.to === pathname || Boolean(item.children?.some((child) => isItemActive(child, pathname)));
}

function NavigationGroup({ item, collapsed, pathname }: { item: NavItem; collapsed: boolean; pathname: string }) {
  const initiallyOpen = useMemo(() => isItemActive(item, pathname), [item, pathname]);
  const [open, setOpen] = useState(initiallyOpen);
  const expanded = open || initiallyOpen;
  const Icon = item.icon;
  if (item.to) {
    return <NavLink to={item.to} title={collapsed ? item.label : undefined} className={({ isActive }) => cn('group flex min-h-10 items-center gap-3 rounded-lg px-3 text-[13px] font-medium text-[#aeb5c1] transition hover:bg-white/6 hover:text-white', isActive && 'bg-[#335cff] text-white shadow-[0_6px_20px_rgba(51,92,255,.25)]', collapsed && 'justify-center px-0')}><Icon className="size-[18px] shrink-0" />{!collapsed && <><span className="min-w-0 flex-1 truncate">{item.label}</span>{item.badge && <span className="rounded-full bg-white/15 px-2 py-0.5 text-[10px]">{item.badge}</span>}</>}</NavLink>;
  }
  return <div><button title={collapsed ? item.label : undefined} onClick={() => setOpen((value) => !value)} className={cn('flex min-h-10 w-full items-center gap-3 rounded-lg px-3 text-[13px] font-medium text-[#aeb5c1] transition hover:bg-white/6 hover:text-white', initiallyOpen && 'text-white', collapsed && 'justify-center px-0')}><Icon className="size-[18px] shrink-0" />{!collapsed && <><span className="min-w-0 flex-1 truncate text-left">{item.label}</span><RiArrowDownSLine className={cn('size-4 transition', expanded && 'rotate-180')} /></>}</button>{!collapsed && expanded && <div className="ml-[21px] mt-1 space-y-1 border-l border-white/10 pl-3">{item.children?.map((child) => <NavigationGroup key={child.label} item={child} collapsed={false} pathname={pathname} />)}</div>}</div>;
}

export function Sidebar({ collapsed, onCollapsedChange, mobileOpen, onMobileOpenChange }: { collapsed: boolean; onCollapsedChange: (value: boolean) => void; mobileOpen: boolean; onMobileOpenChange: (value: boolean) => void }) {
  const { pathname } = useLocation();
  const manager = pathname.startsWith('/ftm');
  const navigation = manager ? managerNavigation : visionNavigation;
  return (
    <>
      {mobileOpen && <button className="fixed inset-0 z-40 bg-[#10131a]/45 backdrop-blur-[1px] lg:hidden" aria-label="Fechar navegação" onClick={() => onMobileOpenChange(false)} />}
      <aside className={cn('fixed inset-y-0 left-0 z-50 flex flex-col bg-[#11151d] text-white transition-[width,transform] duration-200 lg:sticky lg:top-0 lg:z-30 lg:h-screen', collapsed ? 'w-[72px]' : 'w-[268px]', mobileOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0')}>
        <div className={cn('flex h-16 items-center gap-3 border-b border-white/8 px-4', collapsed && 'justify-center px-2')}>
          <div className="grid size-9 shrink-0 place-items-center rounded-xl bg-[#335cff] shadow-[0_8px_24px_rgba(51,92,255,.28)]"><span className="text-sm font-black tracking-tight">FK</span></div>
          {!collapsed && <div className="min-w-0"><div className="text-[15px] font-semibold tracking-[-.02em]">FrotaK View</div><div className="text-[10px] font-medium text-[#818a9a]">VIDEO TELEMETRY</div></div>}
          <button className="ml-auto grid size-8 place-items-center rounded-lg text-[#8f98a8] hover:bg-white/8 hover:text-white lg:hidden" onClick={() => onMobileOpenChange(false)} aria-label="Fechar menu"><RiCloseLine className="size-5" /></button>
        </div>
        <div className={cn('mx-3 mt-3 rounded-xl border border-white/8 bg-white/[.035] p-3', collapsed && 'mx-2 p-2')}>
          <div className={cn('flex items-center gap-2', collapsed && 'justify-center')}><span className={cn('size-2 rounded-full', manager ? 'bg-[#a879ff]' : 'bg-[#4cd39a]')} />{!collapsed && <div><div className="text-xs font-semibold">{manager ? 'FT Manager' : 'FT Vision'}</div><div className="text-[10px] text-[#7f8999]">{manager ? 'Administração' : 'Operação ao vivo'}</div></div>}</div>
        </div>
        <nav className="mt-3 min-h-0 flex-1 space-y-1 overflow-y-auto px-3 pb-4 scrollbar-thin" aria-label="Navegação principal">{navigation.map((item) => <NavigationGroup key={item.label} item={item} collapsed={collapsed} pathname={pathname} />)}</nav>
        <div className="space-y-1 border-t border-white/8 p-3"><button className={cn('flex min-h-10 w-full items-center gap-3 rounded-lg px-3 text-[13px] text-[#aeb5c1] hover:bg-white/6 hover:text-white', collapsed && 'justify-center px-0')}><RiQuestionLine className="size-[18px]" />{!collapsed && 'Central de ajuda'}</button><button className={cn('flex min-h-10 w-full items-center gap-3 rounded-lg px-3 text-[13px] text-[#aeb5c1] hover:bg-white/6 hover:text-white', collapsed && 'justify-center px-0')}><RiSettings3Line className="size-[18px]" />{!collapsed && 'Preferências'}</button></div>
        <button onClick={() => onCollapsedChange(!collapsed)} className="absolute -right-3 top-[76px] hidden size-7 place-items-center rounded-full border border-[#dfe3ea] bg-white text-[#626a78] shadow-sm hover:text-[#335cff] lg:grid" aria-label={collapsed ? 'Expandir menu' : 'Recolher menu'}>{collapsed ? <RiArrowRightSLine className="size-4" /> : <RiArrowLeftSLine className="size-4" />}</button>
      </aside>
    </>
  );
}
