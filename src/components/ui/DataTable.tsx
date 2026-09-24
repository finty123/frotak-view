import { useMemo, useState } from 'react';
import { RiArrowDownSLine, RiArrowUpSLine, RiArrowLeftSLine, RiArrowRightSLine } from '@remixicon/react';
import type { TableColumn } from '@/types';
import { Button } from './Button';
import { EmptyState } from './EmptyState';

function cellValue<T extends Record<string, any>>(row: T, key: string) {
  return row[key] ?? '';
}

export function DataTable<T extends Record<string, any>>({ data, columns, rowKey, selectable, initialPageSize = 8, emptyTitle, onRowClick }: { data: T[]; columns: TableColumn<T>[]; rowKey: keyof T; selectable?: boolean; initialPageSize?: number; emptyTitle?: string; onRowClick?: (row: T) => void }) {
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(initialPageSize);
  const [sort, setSort] = useState<{ key: string; direction: 'asc' | 'desc' } | null>(null);
  const [selected, setSelected] = useState<Set<string>>(new Set());
  const sorted = useMemo(() => {
    if (!sort) return data;
    return [...data].sort((a, b) => String(cellValue(a, sort.key)).localeCompare(String(cellValue(b, sort.key)), 'pt-BR', { numeric: true }) * (sort.direction === 'asc' ? 1 : -1));
  }, [data, sort]);
  const pages = Math.max(1, Math.ceil(sorted.length / pageSize));
  const safePage = Math.min(page, pages);
  const visible = sorted.slice((safePage - 1) * pageSize, safePage * pageSize);
  const visibleKeys = visible.map((row) => String(row[rowKey]));
  const allVisible = visibleKeys.length > 0 && visibleKeys.every((key) => selected.has(key));

  function toggleSort(key: string) {
    setSort((current) => current?.key === key ? { key, direction: current.direction === 'asc' ? 'desc' : 'asc' } : { key, direction: 'asc' });
  }

  function toggleAll() {
    setSelected((current) => {
      const next = new Set(current);
      visibleKeys.forEach((key) => allVisible ? next.delete(key) : next.add(key));
      return next;
    });
  }

  if (!data.length) return <EmptyState title={emptyTitle} />;

  return (
    <div>
      {selectable && selected.size > 0 && <div className="border-b border-[#e8eaf0] bg-[#f3f6ff] px-4 py-2 text-xs font-semibold text-[#335cff]">{selected.size} item(ns) selecionado(s)</div>}
      <div className="overflow-x-auto scrollbar-thin">
        <table className="w-full border-collapse text-left text-xs">
          <thead className="bg-[#f8f9fb] text-[#6d7482]">
            <tr>
              {selectable && <th className="w-10 px-4 py-3"><input type="checkbox" aria-label="Selecionar resultados visíveis" checked={allVisible} onChange={toggleAll} className="size-4 accent-[#335cff]" /></th>}
              {columns.map((column) => <th key={String(column.key)} style={{ minWidth: column.width }} className="whitespace-nowrap px-4 py-3 font-semibold">{column.sortable ? <button className="inline-flex items-center gap-1 hover:text-[#335cff]" onClick={() => toggleSort(String(column.key))}>{column.header}{sort?.key === column.key && (sort.direction === 'asc' ? <RiArrowUpSLine className="size-4" /> : <RiArrowDownSLine className="size-4" />)}</button> : column.header}</th>)}
            </tr>
          </thead>
          <tbody className="divide-y divide-[#eceef2]">
            {visible.map((row) => {
              const key = String(row[rowKey]);
              return <tr key={key} onClick={() => onRowClick?.(row)} className={onRowClick ? 'cursor-pointer transition hover:bg-[#f8faff]' : 'transition hover:bg-[#fafbfc]'}>
                {selectable && <td className="px-4 py-3" onClick={(event) => event.stopPropagation()}><input type="checkbox" aria-label={`Selecionar ${key}`} checked={selected.has(key)} onChange={() => setSelected((current) => { const next = new Set(current); if (next.has(key)) next.delete(key); else next.add(key); return next; })} className="size-4 accent-[#335cff]" /></td>}
                {columns.map((column) => <td key={String(column.key)} className="whitespace-nowrap px-4 py-3 text-[#515866]">{column.render ? column.render(row) : String(cellValue(row, String(column.key)))}</td>)}
              </tr>;
            })}
          </tbody>
        </table>
      </div>
      <div className="flex flex-col items-center justify-between gap-3 border-t border-[#e8eaf0] px-4 py-3 sm:flex-row">
        <span className="text-[11px] text-[#818895]">Mostrando {(safePage - 1) * pageSize + 1}–{Math.min(safePage * pageSize, sorted.length)} de {sorted.length}</span>
        <div className="flex items-center gap-2"><select aria-label="Itens por página" value={pageSize} onChange={(e) => { setPageSize(Number(e.target.value)); setPage(1); }} className="h-8 rounded-lg border border-[#dfe3ea] bg-white px-2 text-[11px]"><option value={5}>5 / página</option><option value={8}>8 / página</option><option value={12}>12 / página</option></select><Button size="icon" variant="ghost" disabled={safePage === 1} onClick={() => setPage((p) => Math.max(1, p - 1))} aria-label="Página anterior"><RiArrowLeftSLine className="size-5" /></Button><span className="min-w-16 text-center text-xs font-semibold tabular">{safePage} / {pages}</span><Button size="icon" variant="ghost" disabled={safePage === pages} onClick={() => setPage((p) => Math.min(pages, p + 1))} aria-label="Próxima página"><RiArrowRightSLine className="size-5" /></Button></div>
      </div>
    </div>
  );
}
