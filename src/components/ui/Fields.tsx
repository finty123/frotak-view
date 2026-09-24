import { forwardRef, type InputHTMLAttributes, type ReactNode, type SelectHTMLAttributes } from 'react';
import { cn } from '@/lib/utils';

export function Field({ label, hint, children, className }: { label: string; hint?: string; children: ReactNode; className?: string }) {
  return (
    <label className={cn('flex min-w-0 flex-col gap-1.5', className)}>
      <span className="text-xs font-semibold text-[#515866]">{label}</span>
      {children}
      {hint && <span className="text-[11px] text-[#8b92a0]">{hint}</span>}
    </label>
  );
}

export const Input = forwardRef<HTMLInputElement, InputHTMLAttributes<HTMLInputElement>>(function Input({ className, ...props }, ref) {
  return <input ref={ref} className={cn('min-h-10 w-full rounded-lg border border-[#dfe3ea] bg-white px-3 text-sm text-[#343945] shadow-[0_1px_2px_rgba(16,24,40,.03)] outline-none transition placeholder:text-[#a3aab6] focus:border-[#9bb2ff] focus:ring-4 focus:ring-[#335cff]/10 disabled:bg-[#f5f6f8]', className)} {...props} />;
});

export const Select = forwardRef<HTMLSelectElement, SelectHTMLAttributes<HTMLSelectElement>>(function Select({ className, children, ...props }, ref) {
  return <select ref={ref} className={cn('min-h-10 w-full rounded-lg border border-[#dfe3ea] bg-white px-3 text-sm text-[#343945] outline-none transition focus:border-[#9bb2ff] focus:ring-4 focus:ring-[#335cff]/10', className)} {...props}>{children}</select>;
});
