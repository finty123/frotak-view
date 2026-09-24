import { useMemo, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { RiArrowLeftSLine, RiArrowRightSLine, RiArrowDownSLine, RiCloseLine, RiQuestionLine, RiSettings3Line, RiVideoOnLine } from '@remixicon/react';
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
    return (
      <NavLink to={item.to} title={collapsed ? item.label : undefined} className={({ isActive }) => cn('group flex min-h-10 items-center gap-3 rounded-10 px-3 text-label-sm text-text-sub-600 transition duration-200 hover:bg-bg-weak-50 hover:text-text-strong-950', isActive && 'bg-primary-lighter text-primary-base shadow-regular-xs ring-1 ring-inset ring-primary-alpha-10', collapsed && 'justify-center px-0')}>
        <Icon className='size-[18px] shrink-0' />
        {!collapsed && <><span className='min-w-0 flex-1 truncate'>{item.label}</span>{item.badge && <span className='rounded-full bg-primary-base px-2 py-0.5 text-subheading-2xs text-static-white'>{item.badge}</span>}</>}
      </NavLink>
    );
  }
  return (
    <div>
      <button title={collapsed ? item.label : undefined} onClick={() => setOpen((value) => !value)} className={cn('flex min-h-10 w-full items-center gap-3 rounded-10 px-3 text-label-sm text-text-sub-600 transition duration-200 hover:bg-bg-weak-50 hover:text-text-strong-950', initiallyOpen && 'text-primary-base', collapsed && 'justify-center px-0')}>
        <Icon className='size-[18px] shrink-0' />
        {!collapsed && <><span className='min-w-0 flex-1 truncate text-left'>{item.label}</span><RiArrowDownSLine className={cn('size-4 transition', expanded && 'rotate-180')} /></>}
      </button>
      {!collapsed && expanded && <div className='ml-[21px] mt-1 space-y-1 border-l border-stroke-soft-200 pl-3'>{item.children?.map((child) => <NavigationGroup key={child.label} item={child} collapsed={false} pathname={pathname} />)}</div>}
    </div>
  );
}

export function Sidebar({ collapsed, onCollapsedChange, mobileOpen, onMobileOpenChange }: { collapsed: boolean; onCollapsedChange: (value: boolean) => void; mobileOpen: boolean; onMobileOpenChange: (value: boolean) => void }) {
  const { pathname } = useLocation();
  const manager = pathname.startsWith('/ftm');
  const navigation = manager ? managerNavigation : visionNavigation;
  return (
    <>
      {mobileOpen && <button className='fixed inset-0 z-40 bg-overlay backdrop-blur-[1px] lg:hidden' aria-label='Fechar navegação' onClick={() => onMobileOpenChange(false)} />}
      <aside className={cn('fixed inset-y-0 left-0 z-50 flex flex-col border-r border-stroke-soft-200 bg-bg-white-0 transition-[width,transform] duration-200 lg:sticky lg:top-0 lg:z-30 lg:h-screen', collapsed ? 'w-[72px]' : 'w-[268px]', mobileOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0')}>
        <div className={cn('flex h-16 items-center gap-3 border-b border-stroke-soft-200 px-4', collapsed && 'justify-center px-2')}>
          <div className='grid size-9 shrink-0 place-items-center rounded-10 bg-primary-base text-static-white shadow-button-primary-focus'><RiVideoOnLine className='size-5' /></div>
          {!collapsed && <div className='min-w-0'><div className='text-label-md text-text-strong-950'>FrotaK View</div><div className='text-subheading-2xs text-text-soft-400'>VIDEO TELEMETRY</div></div>}
          <button className='ml-auto grid size-8 place-items-center rounded-lg text-text-soft-400 hover:bg-bg-weak-50 hover:text-text-strong-950 lg:hidden' onClick={() => onMobileOpenChange(false)} aria-label='Fechar menu'><RiCloseLine className='size-5' /></button>
        </div>
        <div className={cn('mx-3 mt-3 rounded-12 border border-stroke-soft-200 bg-bg-weak-25 p-3', collapsed && 'mx-2 p-2')}>
          <div className={cn('flex items-center gap-2', collapsed && 'justify-center')}><span className={cn('size-2 rounded-full', manager ? 'bg-feature-base' : 'bg-success-base')} />{!collapsed && <div><div className='text-label-xs text-text-strong-950'>{manager ? 'FT Manager' : 'FT Vision'}</div><div className='text-paragraph-xs text-text-soft-400'>{manager ? 'Administração' : 'Operação ao vivo'}</div></div>}</div>
        </div>
        <nav className='mt-3 min-h-0 flex-1 space-y-1 overflow-y-auto px-3 pb-4 scrollbar-thin' aria-label='Navegação principal'>{navigation.map((item) => <NavigationGroup key={item.label} item={item} collapsed={collapsed} pathname={pathname} />)}</nav>
        <div className='space-y-1 border-t border-stroke-soft-200 p-3'><button className={cn('flex min-h-10 w-full items-center gap-3 rounded-10 px-3 text-label-sm text-text-sub-600 hover:bg-bg-weak-50 hover:text-text-strong-950', collapsed && 'justify-center px-0')}><RiQuestionLine className='size-[18px]' />{!collapsed && 'Central de ajuda'}</button><button className={cn('flex min-h-10 w-full items-center gap-3 rounded-10 px-3 text-label-sm text-text-sub-600 hover:bg-bg-weak-50 hover:text-text-strong-950', collapsed && 'justify-center px-0')}><RiSettings3Line className='size-[18px]' />{!collapsed && 'Preferências'}</button></div>
        <button onClick={() => onCollapsedChange(!collapsed)} className='absolute -right-3 top-[76px] hidden size-7 place-items-center rounded-full border border-stroke-soft-200 bg-bg-white-0 text-text-sub-600 shadow-regular-xs hover:text-primary-base lg:grid' aria-label={collapsed ? 'Expandir menu' : 'Recolher menu'}>{collapsed ? <RiArrowRightSLine className='size-4' /> : <RiArrowLeftSLine className='size-4' />}</button>
      </aside>
    </>
  );
}
