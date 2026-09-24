import { useMemo, useState } from 'react';
import { RiArrowDownSLine, RiArrowUpSLine, RiArrowLeftSLine, RiArrowRightSLine } from '@remixicon/react';
import type { TableColumn } from '@/types';
import * as AlignCheckbox from '@/components/alignui/checkbox';
import { Button } from './Button';
import { EmptyState } from './EmptyState';
import { Select } from './Fields';

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
      {selectable && selected.size > 0 && <div className="border-b border-stroke-soft-200 bg-primary-lighter px-4 py-2 text-xs font-semibold text-primary-base">{selected.size} item(ns) selecionado(s)</div>}
      <div className="overflow-x-auto scrollbar-thin">
        <table className="w-full border-collapse text-left text-xs">
          <thead className="bg-bg-weak-25 text-text-sub-600">
            <tr>
              {selectable && <th className="w-10 px-4 py-3"><AlignCheckbox.Root aria-label="Selecionar resultados visíveis" checked={allVisible} onCheckedChange={toggleAll} /></th>}
              {columns.map((column) => <th key={String(column.key)} style={{ minWidth: column.width }} className="whitespace-nowrap px-4 py-3 font-semibold">{column.sortable ? <button className="inline-flex items-center gap-1 hover:text-primary-base" onClick={() => toggleSort(String(column.key))}>{column.header}{sort?.key === column.key && (sort.direction === 'asc' ? <RiArrowUpSLine className="size-4" /> : <RiArrowDownSLine className="size-4" />)}</button> : column.header}</th>)}
            </tr>
          </thead>
          <tbody className="divide-y divide-stroke-soft-200">
            {visible.map((row) => {
              const key = String(row[rowKey]);
              return <tr key={key} onClick={() => onRowClick?.(row)} className={onRowClick ? 'cursor-pointer transition hover:bg-primary-lighter' : 'transition hover:bg-bg-weak-25'}>
                {selectable && <td className="px-4 py-3" onClick={(event) => event.stopPropagation()}><AlignCheckbox.Root aria-label={`Selecionar ${key}`} checked={selected.has(key)} onCheckedChange={() => setSelected((current) => { const next = new Set(current); if (next.has(key)) next.delete(key); else next.add(key); return next; })} /></td>}
                {columns.map((column) => <td key={String(column.key)} className="whitespace-nowrap px-4 py-3 text-text-sub-600">{column.render ? column.render(row) : String(cellValue(row, String(column.key)))}</td>)}
              </tr>;
            })}
          </tbody>
        </table>
      </div>
      <div className="flex flex-col items-center justify-between gap-3 border-t border-stroke-soft-200 px-4 py-3 sm:flex-row">
        <span className="text-[11px] text-text-sub-600">Mostrando {(safePage - 1) * pageSize + 1}–{Math.min(safePage * pageSize, sorted.length)} de {sorted.length}</span>
        <div className="flex items-center gap-2"><Select aria-label="Itens por página" value={pageSize} onChange={(e) => { setPageSize(Number(e.target.value)); setPage(1); }} className="h-8 min-h-8 w-auto pr-8 text-paragraph-xs"><option value={5}>5 / página</option><option value={8}>8 / página</option><option value={12}>12 / página</option></Select><Button size="icon" variant="ghost" disabled={safePage === 1} onClick={() => setPage((p) => Math.max(1, p - 1))} aria-label="Página anterior"><RiArrowLeftSLine className="size-5" /></Button><span className="min-w-16 text-center text-xs font-semibold tabular">{safePage} / {pages}</span><Button size="icon" variant="ghost" disabled={safePage === pages} onClick={() => setPage((p) => Math.min(pages, p + 1))} aria-label="Próxima página"><RiArrowRightSLine className="size-5" /></Button></div>
      </div>
    </div>
  );
}
