import { RiFilter3Line, RiRefreshLine, RiArrowUpSLine, RiArrowDownSLine } from '@remixicon/react';
import { useState, type ReactNode } from 'react';
import { Button } from './Button';

export function FilterBar({ children, onApply, onReset, resultCount, collapsible = true }: { children: ReactNode; onApply?: () => void; onReset?: () => void; resultCount?: number; collapsible?: boolean }) {
  const [expanded, setExpanded] = useState(true);
  return (
    <div className="panel mb-4 overflow-hidden">
      <div className="flex items-center justify-between border-b border-[#e8eaf0] px-4 py-3">
        <div className="flex items-center gap-2 text-xs font-semibold text-[#515866]"><RiFilter3Line className="size-4 text-[#335cff]" /> Filtros {resultCount !== undefined && <span className="rounded-full bg-[#eef2ff] px-2 py-0.5 text-[10px] text-[#335cff]">{resultCount} resultados</span>}</div>
        {collapsible && <Button size="icon" variant="ghost" onClick={() => setExpanded((value) => !value)} aria-label={expanded ? 'Recolher filtros' : 'Expandir filtros'}>{expanded ? <RiArrowUpSLine className="size-5" /> : <RiArrowDownSLine className="size-5" />}</Button>}
      </div>
      {expanded && <div className="flex flex-col gap-3 p-4 xl:flex-row xl:items-end"><div className="grid min-w-0 flex-1 grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">{children}</div><div className="flex shrink-0 gap-2"><Button variant="ghost" onClick={onReset}><RiRefreshLine className="size-4" /> Redefinir</Button><Button variant="primary" onClick={onApply}><RiFilter3Line className="size-4" /> Filtrar</Button></div></div>}
    </div>
  );
}
