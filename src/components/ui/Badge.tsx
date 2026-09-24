import type { HTMLAttributes } from 'react';
import * as AlignBadge from '@/components/alignui/badge';
import type { Tone } from '@/types';
import { cn } from '@/lib/utils';

const colors: Record<Tone, 'gray' | 'blue' | 'green' | 'orange' | 'red' | 'sky' | 'purple'> = {
  neutral: 'gray',
  primary: 'blue',
  success: 'green',
  warning: 'orange',
  critical: 'red',
  info: 'sky',
  route: 'purple',
};

export function Badge({
  tone = 'neutral',
  className,
  children,
  ...props
}: HTMLAttributes<HTMLDivElement> & { tone?: Tone }) {
  return (
    <AlignBadge.Root
      {...props}
      size='medium'
      variant='lighter'
      color={colors[tone]}
      className={cn('normal-case', className)}
    >
      <AlignBadge.Dot />
      {children}
    </AlignBadge.Root>
  );
}
