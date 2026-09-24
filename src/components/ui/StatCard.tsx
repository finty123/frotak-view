import type { ComponentType } from 'react';
import { RiArrowRightUpLine } from '@remixicon/react';
import type { Tone } from '@/types';
import { cn } from '@/lib/utils';

const accents: Record<Tone, string> = {
  neutral: 'bg-[#eef0f4] text-[#5b6270]', primary: 'bg-[#edf2ff] text-[#335cff]', success: 'bg-[#eaf8f1] text-[#1f9d62]', warning: 'bg-[#fff6e4] text-[#d9850b]', critical: 'bg-[#fff0f2] text-[#dc3f4f]', info: 'bg-[#edf7ff] text-[#1686d9]', route: 'bg-[#f2edff] text-[#6d3dd3]',
};

export function StatCard({ label, value, detail, icon: Icon, tone = 'primary', trend }: { label: string; value: string; detail: string; icon: ComponentType<{ className?: string }>; tone?: Tone; trend?: string }) {
  return (
    <div className="panel p-4">
      <div className="flex items-start justify-between gap-3">
        <div className={cn('grid size-10 place-items-center rounded-xl', accents[tone])}><Icon className="size-5" /></div>
        {trend && <span className="inline-flex items-center gap-1 rounded-full bg-[#eaf8f1] px-2 py-1 text-[10px] font-bold text-[#177b4c]"><RiArrowRightUpLine className="size-3" />{trend}</span>}
      </div>
      <div className="mt-4 text-2xl font-semibold tracking-[-.03em] tabular text-[#17191f]">{value}</div>
      <div className="mt-1 text-xs font-semibold text-[#515866]">{label}</div>
      <div className="mt-1 text-[11px] text-[#8b92a0]">{detail}</div>
    </div>
  );
}
