import { forwardRef, type ButtonHTMLAttributes } from 'react';
import * as AlignButton from '@/components/alignui/button';
import { cn } from '@/lib/utils';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  asChild?: boolean;
  variant?: 'primary' | 'secondary' | 'ghost' | 'danger' | 'soft';
  size?: 'sm' | 'md' | 'lg' | 'icon';
  loading?: boolean;
};

const variantMap = {
  primary: { variant: 'primary', mode: 'filled' },
  secondary: { variant: 'neutral', mode: 'stroke' },
  ghost: { variant: 'neutral', mode: 'ghost' },
  danger: { variant: 'error', mode: 'filled' },
  soft: { variant: 'primary', mode: 'lighter' },
} as const;

const sizeMap = {
  sm: 'xsmall',
  md: 'small',
  lg: 'medium',
  icon: 'small',
} as const;

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(function Button(
  {
    className,
    variant = 'secondary',
    size = 'md',
    asChild,
    loading,
    disabled,
    children,
    ...props
  },
  ref,
) {
  const style = variantMap[variant];
  return (
    <AlignButton.Root
      ref={ref}
      asChild={asChild}
      variant={style.variant}
      mode={style.mode}
      size={sizeMap[size]}
      disabled={disabled || loading}
      aria-busy={loading || undefined}
      className={cn(
        'font-medium',
        size === 'icon' && 'size-9 min-h-9 gap-0 px-0',
        size === 'lg' && 'min-h-11',
        className,
      )}
      {...props}
    >
      {loading && <span className='size-4 animate-spin rounded-full border-2 border-current border-r-transparent' aria-hidden='true' />}
      {children}
    </AlignButton.Root>
  );
});
