import type { ComponentType } from 'react';
import { RiArrowRightUpLine } from '@remixicon/react';
import type { Tone } from '@/types';
import { cn } from '@/lib/utils';

const accents: Record<Tone, string> = {
  neutral: 'bg-bg-weak-50 text-text-sub-600', primary: 'bg-primary-lighter text-primary-base', success: 'bg-success-lighter text-success-base', warning: 'bg-warning-lighter text-warning-base', critical: 'bg-error-lighter text-error-base', info: 'bg-information-lighter text-information-base', route: 'bg-feature-lighter text-feature-base',
};

export function StatCard({ label, value, detail, icon: Icon, tone = 'primary', trend }: { label: string; value: string; detail: string; icon: ComponentType<{ className?: string }>; tone?: Tone; trend?: string }) {
  return (
    <div className="panel p-4">
      <div className="flex items-start justify-between gap-3">
        <div className={cn('grid size-10 place-items-center rounded-xl', accents[tone])}><Icon className="size-5" /></div>
        {trend && <span className="inline-flex items-center gap-1 rounded-full bg-success-lighter px-2 py-1 text-[10px] font-bold text-success-dark"><RiArrowRightUpLine className="size-3" />{trend}</span>}
      </div>
      <div className="mt-4 text-2xl font-semibold tracking-[-.03em] tabular text-text-strong-950">{value}</div>
      <div className="mt-1 text-xs font-semibold text-text-sub-600">{label}</div>
      <div className="mt-1 text-[11px] text-text-soft-400">{detail}</div>
    </div>
  );
}
