import { cn } from '@/lib/utils';

export function Tabs<T extends string>({ items, value, onChange, compact }: { items: { value: T; label: string; count?: number }[]; value: T; onChange: (value: T) => void; compact?: boolean }) {
  return (
    <div className={cn('inline-flex max-w-full items-center gap-1 overflow-x-auto rounded-xl border border-[#e3e6ec] bg-[#f7f8fa] p-1', compact && 'rounded-lg')} role="tablist">
      {items.map((item) => (
        <button
          key={item.value}
          role="tab"
          aria-selected={value === item.value}
          onClick={() => onChange(item.value)}
          className={cn('flex min-h-8 items-center gap-2 whitespace-nowrap rounded-lg px-3 text-xs font-semibold text-[#717784] transition hover:text-[#343945]', value === item.value && 'bg-white text-[#2547d0] shadow-sm')}
        >
          {item.label}
          {item.count !== undefined && <span className="rounded-full bg-[#eef0f4] px-1.5 py-0.5 text-[10px] tabular">{item.count}</span>}
        </button>
      ))}
    </div>
  );
}
