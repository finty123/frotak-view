import type { HTMLAttributes } from 'react';
import type { Tone } from '@/types';
import { cn } from '@/lib/utils';

const tones: Record<Tone, string> = {
  neutral: 'border-[#e1e4ea] bg-[#f5f7fa] text-[#525866]',
  primary: 'border-[#d5e2ff] bg-[#edf2ff] text-[#2547d0]',
  success: 'border-[#caeadb] bg-[#eaf8f1] text-[#177b4c]',
  warning: 'border-[#f5dfb4] bg-[#fff6e4] text-[#a66305]',
  critical: 'border-[#f6cdd2] bg-[#fff0f2] text-[#b92e3d]',
  info: 'border-[#cbe8fb] bg-[#edf7ff] text-[#116fac]',
  route: 'border-[#dfd2fb] bg-[#f2edff] text-[#6130bd]',
};

export function Badge({ tone = 'neutral', className, children, ...props }: HTMLAttributes<HTMLSpanElement> & { tone?: Tone }) {
  return (
    <span className={cn('inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-[11px] font-bold leading-none', tones[tone], className)} {...props}>
      <span className="size-1.5 rounded-full bg-current opacity-75" aria-hidden="true" />
      {children}
    </span>
  );
}
