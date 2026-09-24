import type { ReactNode } from 'react';
import { useNavigate } from 'react-router-dom';
import { RiArrowLeftLine } from '@remixicon/react';
import { Button } from './Button';

export function PageHeader({ eyebrow, title, description, actions, back }: { eyebrow?: string; title: string; description?: string; actions?: ReactNode; back?: boolean }) {
  const navigate = useNavigate();
  return (
    <header className="mb-5 flex flex-col justify-between gap-4 lg:flex-row lg:items-center">
      <div className="flex min-w-0 items-start gap-3">
        {back && (
          <Button size="icon" variant="ghost" aria-label="Voltar" onClick={() => navigate(-1)}>
            <RiArrowLeftLine className="size-5" />
          </Button>
        )}
        <div className="min-w-0">
          {eyebrow && <div className="eyebrow mb-1">{eyebrow}</div>}
          <h1 className="truncate text-[22px] font-semibold tracking-[-.02em] text-[#17191f]">{title}</h1>
          {description && <p className="mt-1 max-w-3xl text-sm leading-5 text-[#717784]">{description}</p>}
        </div>
      </div>
      {actions && <div className="flex flex-wrap items-center gap-2">{actions}</div>}
    </header>
  );
}
