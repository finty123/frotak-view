import type { HTMLAttributes, ReactNode } from 'react';
import { cn } from '@/lib/utils';

export function Card({ className, ...props }: HTMLAttributes<HTMLDivElement>) {
  return <section className={cn('panel', className)} {...props} />;
}

export function CardHeader({ title, description, action, className }: { title: string; description?: string; action?: ReactNode; className?: string }) {
  return (
    <div className={cn('panel-header', className)}>
      <div className="min-w-0">
        <h2 className="truncate text-[15px] font-semibold text-text-strong-950">{title}</h2>
        {description && <p className="mt-1 text-xs text-text-sub-600">{description}</p>}
      </div>
      {action}
    </div>
  );
}

export function CardBody({ className, ...props }: HTMLAttributes<HTMLDivElement>) {
  return <div className={cn('panel-body', className)} {...props} />;
}
