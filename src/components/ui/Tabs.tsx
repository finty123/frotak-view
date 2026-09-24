import * as SegmentedControl from '@/components/alignui/segmented-control';
import * as AlignBadge from '@/components/alignui/badge';
import { cn } from '@/lib/utils';

export function Tabs<T extends string>({
  items,
  value,
  onChange,
  compact,
}: {
  items: { value: T; label: string; count?: number }[];
  value: T;
  onChange: (value: T) => void;
  compact?: boolean;
}) {
  return (
    <SegmentedControl.Root value={value} onValueChange={(next) => onChange(next as T)}>
      <SegmentedControl.List className={cn('min-w-max', compact ? 'h-8' : 'h-9')}>
        {items.map((item) => (
          <SegmentedControl.Trigger
            key={item.value}
            value={item.value}
            className={cn('px-3', compact ? 'h-6 text-label-xs' : 'h-7')}
          >
            {item.label}
            {item.count !== undefined && (
              <AlignBadge.Root size='small' variant='lighter' color={value === item.value ? 'blue' : 'gray'} square>
                {item.count}
              </AlignBadge.Root>
            )}
          </SegmentedControl.Trigger>
        ))}
      </SegmentedControl.List>
    </SegmentedControl.Root>
  );
}
