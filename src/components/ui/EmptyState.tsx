import { RiInbox2Line } from '@remixicon/react';
import type { ReactNode } from 'react';

export function EmptyState({ title = 'Nenhum resultado encontrado', description = 'Ajuste os filtros ou aguarde a chegada de novos dados.', action }: { title?: string; description?: string; action?: ReactNode }) {
  return (
    <div className="flex min-h-64 flex-col items-center justify-center px-6 py-12 text-center">
      <div className="mb-4 grid size-12 place-items-center rounded-2xl bg-bg-weak-50 text-text-sub-600"><RiInbox2Line className="size-6" /></div>
      <h3 className="text-sm font-semibold text-text-strong-950">{title}</h3>
      <p className="mt-1 max-w-sm text-xs leading-5 text-text-soft-400">{description}</p>
      {action && <div className="mt-4">{action}</div>}
    </div>
  );
}
