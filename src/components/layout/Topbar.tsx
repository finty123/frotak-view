import { useMemo, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import { RiApps2Line, RiSearchLine, RiGlobalLine, RiDownloadCloud2Line, RiNotification3Line, RiMenuLine, RiArrowRightSLine, RiUser3Line, RiShieldUserLine, RiLogoutBoxRLine, RiCheckLine, RiFileDownloadLine } from '@remixicon/react';
import { Modal, Drawer } from '@/components/ui/Overlay';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';

const searchableRoutes = [
  ['/ftv/ft/dashboard', 'Dashboard operacional'], ['/ftv/ft/realtime-monitoring', 'Monitoramento de veículos'], ['/ftv/ft/new-alarm-list', 'Lista de alertas'], ['/ftv/ft/security-center/analyse', 'Análises de segurança'], ['/ftv/ft/vehicle-manage', 'Gestão de veículos'], ['/ftv/ft/driver-manage/driver', 'Motoristas'], ['/ftm/user-manage', 'Usuários e privilégios'], ['/ftm/ft/evidence-list', 'Vídeo da evidência'],
] as const;

export function Topbar({ onMobileMenu }: { onMobileMenu: () => void }) {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const [searchOpen, setSearchOpen] = useState(false);
  const [search, setSearch] = useState('');
  const [drawer, setDrawer] = useState<'notifications' | 'downloads' | 'user' | null>(null);
  const manager = pathname.startsWith('/ftm');
  const results = useMemo(() => searchableRoutes.filter(([, label]) => label.toLowerCase().includes(search.toLowerCase())), [search]);
  return (
    <>
      <header className="sticky top-0 z-30 flex h-16 items-center border-b border-[#e6e8ed] bg-white/95 px-4 backdrop-blur-lg md:px-6">
        <button className="mr-2 grid size-10 place-items-center rounded-lg text-[#5b6270] hover:bg-[#f2f4f7] lg:hidden" onClick={onMobileMenu} aria-label="Abrir menu"><RiMenuLine className="size-5" /></button>
        <DropdownMenu.Root>
          <DropdownMenu.Trigger asChild><button className="flex min-h-10 items-center gap-2 rounded-lg px-2.5 text-sm font-semibold text-[#343945] hover:bg-[#f4f6f8]"><RiApps2Line className="size-5 text-[#335cff]" /><span className="hidden sm:inline">{manager ? 'FT Manager' : 'FT Vision'}</span><RiArrowRightSLine className="size-4 rotate-90 text-[#8b92a0]" /></button></DropdownMenu.Trigger>
          <DropdownMenu.Portal><DropdownMenu.Content align="start" sideOffset={8} className="z-50 w-64 rounded-xl border border-[#e3e6ec] bg-white p-2 shadow-[0_20px_60px_rgba(16,24,40,.18)]"><div className="px-2 py-2 text-[10px] font-bold uppercase tracking-wider text-[#8b92a0]">Ambientes FrotaK</div><DropdownMenu.Item onSelect={() => navigate('/ftv/ft/dashboard')} className="flex cursor-pointer items-center gap-3 rounded-lg p-3 outline-none hover:bg-[#f3f6ff]"><span className="grid size-9 place-items-center rounded-lg bg-[#edf2ff] text-[#335cff]"><RiApps2Line className="size-5" /></span><div className="flex-1"><div className="text-sm font-semibold">FT Vision</div><div className="text-[11px] text-[#858c99]">Operação e videotelemetria</div></div>{!manager && <RiCheckLine className="size-4 text-[#1f9d62]" />}</DropdownMenu.Item><DropdownMenu.Item onSelect={() => navigate('/ftm/ft/alarm-notification')} className="flex cursor-pointer items-center gap-3 rounded-lg p-3 outline-none hover:bg-[#f7f3ff]"><span className="grid size-9 place-items-center rounded-lg bg-[#f2edff] text-[#6d3dd3]"><RiShieldUserLine className="size-5" /></span><div className="flex-1"><div className="text-sm font-semibold">FT Manager</div><div className="text-[11px] text-[#858c99]">Administração e tarefas</div></div>{manager && <RiCheckLine className="size-4 text-[#1f9d62]" />}</DropdownMenu.Item></DropdownMenu.Content></DropdownMenu.Portal>
        </DropdownMenu.Root>
        <div className="ml-auto flex items-center gap-1">
          <button onClick={() => setSearchOpen(true)} className="grid size-10 place-items-center rounded-lg text-[#626a78] hover:bg-[#f2f4f7] hover:text-[#335cff]" aria-label="Busca global"><RiSearchLine className="size-5" /></button>
          <DropdownMenu.Root><DropdownMenu.Trigger asChild><button className="hidden min-h-10 items-center gap-1 rounded-lg px-2.5 text-xs font-semibold text-[#626a78] hover:bg-[#f2f4f7] sm:flex"><RiGlobalLine className="size-5" /> PT</button></DropdownMenu.Trigger><DropdownMenu.Portal><DropdownMenu.Content align="end" sideOffset={8} className="z-50 w-48 rounded-xl border border-[#e3e6ec] bg-white p-2 text-sm shadow-lg"><DropdownMenu.Item className="cursor-pointer rounded-lg px-3 py-2 outline-none hover:bg-[#f4f6f8]">English</DropdownMenu.Item><DropdownMenu.Item className="cursor-pointer rounded-lg px-3 py-2 outline-none hover:bg-[#f4f6f8]">Español</DropdownMenu.Item><DropdownMenu.Item className="flex cursor-pointer items-center justify-between rounded-lg bg-[#f3f6ff] px-3 py-2 font-semibold text-[#335cff] outline-none">Português (Brasil)<RiCheckLine className="size-4" /></DropdownMenu.Item></DropdownMenu.Content></DropdownMenu.Portal></DropdownMenu.Root>
          <button onClick={() => setDrawer('downloads')} className="hidden size-10 place-items-center rounded-lg text-[#626a78] hover:bg-[#f2f4f7] hover:text-[#335cff] sm:grid" aria-label="Downloads"><RiDownloadCloud2Line className="size-5" /></button>
          <button onClick={() => setDrawer('notifications')} className="relative grid size-10 place-items-center rounded-lg text-[#626a78] hover:bg-[#f2f4f7] hover:text-[#335cff]" aria-label="Notificações"><RiNotification3Line className="size-5" /><span className="absolute right-2 top-2 size-2 rounded-full border-2 border-white bg-[#dc3f4f]" /></button>
          <button onClick={() => setDrawer('user')} className="ml-1 grid size-9 place-items-center rounded-full bg-[#171b25] text-xs font-bold text-white shadow-sm" aria-label="Dados do usuário">SC</button>
        </div>
      </header>
      <Modal open={searchOpen} onOpenChange={setSearchOpen} title="Busca global" description="Encontre qualquer área do FrotaK View." wide>
        <div className="relative"><RiSearchLine className="absolute left-3 top-3 size-5 text-[#8b92a0]" /><input autoFocus value={search} onChange={(event) => setSearch(event.target.value)} placeholder="Buscar telas, veículos, relatórios..." className="min-h-12 w-full rounded-xl border border-[#dfe3ea] pl-11 pr-4 text-sm outline-none focus:border-[#9bb2ff] focus:ring-4 focus:ring-[#335cff]/10" /></div>
        <div className="mt-4 space-y-1">{results.map(([to, label]) => <button key={to} onClick={() => { navigate(to); setSearchOpen(false); setSearch(''); }} className="flex w-full items-center justify-between rounded-xl px-3 py-3 text-left text-sm font-medium hover:bg-[#f3f6ff] hover:text-[#335cff]">{label}<RiArrowRightSLine className="size-5" /></button>)}</div>
      </Modal>
      <Drawer open={drawer !== null} onOpenChange={(open) => !open && setDrawer(null)} title={drawer === 'notifications' ? 'Notificações' : drawer === 'downloads' ? 'Centro de downloads' : 'Dados do usuário'} description="Central do usuário">
        {drawer === 'notifications' && <div className="space-y-3">{['Alerta crítico atribuído a você', 'Download de evidência concluído', 'Veículo voltou a transmitir', 'Resumo mensal está disponível'].map((item, index) => <div key={item} className="rounded-xl border border-[#e7e9ee] p-4"><div className="flex items-start justify-between gap-2"><div className="text-sm font-semibold">{item}</div>{index < 2 && <Badge tone="primary">Novo</Badge>}</div><p className="mt-1 text-xs leading-5 text-[#7a8190]">Operação Sudeste • há {index + 1}h</p></div>)}</div>}
        {drawer === 'downloads' && <div className="space-y-3">{['evidencias-23-set.zip', 'relatorio-seguranca.pdf', 'veiculos-online.xlsx'].map((item, index) => <div key={item} className="flex items-center gap-3 rounded-xl border border-[#e7e9ee] p-4"><div className="grid size-10 place-items-center rounded-xl bg-[#edf2ff] text-[#335cff]"><RiFileDownloadLine className="size-5" /></div><div className="min-w-0 flex-1"><div className="truncate text-sm font-semibold">{item}</div><div className="mt-1 text-[11px] text-[#7a8190]">Concluído • {8 + index * 4},2 MB</div></div><Button size="sm">Baixar</Button></div>)}</div>}
        {drawer === 'user' && <div><div className="flex items-center gap-4 rounded-2xl bg-[#f5f7fa] p-4"><div className="grid size-14 place-items-center rounded-full bg-[#171b25] text-lg font-bold text-white">SC</div><div><div className="font-semibold">Samuel Cruz</div><div className="text-xs text-[#7a8190]">Administrador geral</div></div></div><div className="mt-5 space-y-2"><button className="flex w-full items-center gap-3 rounded-xl p-3 text-sm font-medium hover:bg-[#f4f6f8]"><RiUser3Line className="size-5 text-[#717784]" />Dados e preferências</button><button className="flex w-full items-center gap-3 rounded-xl p-3 text-sm font-medium hover:bg-[#f4f6f8]"><RiShieldUserLine className="size-5 text-[#717784]" />Segurança da conta</button><button className="flex w-full items-center gap-3 rounded-xl p-3 text-sm font-medium text-[#dc3f4f] hover:bg-[#fff0f2]"><RiLogoutBoxRLine className="size-5" />Sair do sistema</button></div></div>}
      </Drawer>
    </>
  );
}
