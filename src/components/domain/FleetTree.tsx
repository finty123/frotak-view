import { useState } from 'react';
import { RiArrowDownSLine, RiBuilding2Line, RiTruckLine, RiSearchLine } from '@remixicon/react';
import { vehicles } from '@/data/mock-data';
import { cn } from '@/lib/utils';
import { Input } from '@/components/ui/Fields';

export function FleetTree({ selected, onSelect, compact }: { selected?: string; onSelect?: (plate: string) => void; compact?: boolean }) {
  const [query, setQuery] = useState('');
  const filtered = vehicles.filter((vehicle) => vehicle.plate.toLowerCase().includes(query.toLowerCase()));
  return <div className={cn('flex h-full min-h-[380px] flex-col border-r border-stroke-soft-200 bg-bg-white-0', compact ? 'w-full' : 'w-[300px]')}><div className="border-b border-stroke-soft-200 p-3"><div className="relative"><RiSearchLine className="pointer-events-none absolute left-3 top-2.5 z-10 size-4 text-text-soft-400" /><Input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Placa ou dispositivo" className="h-9 pl-7 text-paragraph-xs" /></div></div><div className="min-h-0 flex-1 overflow-y-auto p-2 scrollbar-thin"><div className="flex items-center gap-2 px-2 py-2 text-xs font-semibold text-text-strong-950"><RiArrowDownSLine className="size-4" /><RiBuilding2Line className="size-4 text-primary-base" />Todas as frotas <span className="ml-auto text-[10px] text-text-soft-400">{filtered.length}</span></div><div className="ml-4 border-l border-stroke-soft-200 pl-2">{filtered.map((vehicle) => <button key={vehicle.id} onClick={() => onSelect?.(vehicle.plate)} className={cn('flex w-full items-center gap-2 rounded-lg px-2 py-2 text-left text-xs transition hover:bg-bg-weak-50', selected === vehicle.plate && 'bg-primary-lighter text-primary-darker')}><span className={cn('size-2 rounded-full', vehicle.status === 'Offline' ? 'bg-faded-base' : vehicle.status === 'Marcha lenta' ? 'bg-warning-base' : 'bg-success-base')} /><RiTruckLine className="size-4" /><span className="flex-1 font-semibold">{vehicle.plate}</span><span className="text-[9px] text-text-soft-400">{vehicle.lastSeen}</span></button>)}</div></div></div>;
}
