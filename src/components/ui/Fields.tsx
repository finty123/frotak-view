import {
  forwardRef,
  type InputHTMLAttributes,
  type ReactNode,
  type SelectHTMLAttributes,
  type TextareaHTMLAttributes,
} from 'react';
import { RiArrowDownSLine } from '@remixicon/react';
import * as AlignInput from '@/components/alignui/input';
import * as AlignTextarea from '@/components/alignui/textarea';
import { cn } from '@/lib/utils';

export function Field({
  label,
  hint,
  error,
  children,
  className,
}: {
  label: string;
  hint?: string;
  error?: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <label className={cn('flex min-w-0 flex-col gap-1.5', className)}>
      <span className='text-label-sm text-text-sub-600'>{label}</span>
      {children}
      {(error || hint) && (
        <span className={cn('text-paragraph-xs', error ? 'text-error-base' : 'text-text-soft-400')}>
          {error || hint}
        </span>
      )}
    </label>
  );
}

export const Input = forwardRef<HTMLInputElement, Omit<InputHTMLAttributes<HTMLInputElement>, 'size'> & { hasError?: boolean }>(
  function Input({ className, hasError, ...props }, ref) {
    return (
      <AlignInput.Root hasError={hasError}>
        <AlignInput.Wrapper asChild>
          <div>
            <AlignInput.Input ref={ref} hasError={hasError} className={className} {...props} />
          </div>
        </AlignInput.Wrapper>
      </AlignInput.Root>
    );
  },
);

export const Select = forwardRef<HTMLSelectElement, SelectHTMLAttributes<HTMLSelectElement>>(
  function Select({ className, children, ...props }, ref) {
    return (
      <div className='relative'>
        <select
          ref={ref}
          className={cn(
            'h-10 w-full appearance-none rounded-10 bg-bg-white-0 px-3 pr-9 text-paragraph-sm text-text-strong-950 shadow-regular-xs ring-1 ring-inset ring-stroke-soft-200 outline-none transition duration-200 hover:bg-bg-weak-50 focus:shadow-button-important-focus focus:ring-stroke-strong-950 disabled:bg-bg-weak-50 disabled:text-text-disabled-300',
            className,
          )}
          {...props}
        >
          {children}
        </select>
        <RiArrowDownSLine className='pointer-events-none absolute right-3 top-1/2 size-4 -translate-y-1/2 text-text-soft-400' aria-hidden='true' />
      </div>
    );
  },
);

export const Textarea = forwardRef<HTMLTextAreaElement, Omit<TextareaHTMLAttributes<HTMLTextAreaElement>, 'children'> & { hasError?: boolean }>(
  function Textarea({ className, hasError, ...props }, ref) {
    return <AlignTextarea.Root ref={ref} simple hasError={hasError} className={className} {...props} />;
  },
);
