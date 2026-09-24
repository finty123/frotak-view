import { forwardRef, type ButtonHTMLAttributes } from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

const buttonVariants = cva(
  'inline-flex min-h-9 items-center justify-center gap-2 whitespace-nowrap rounded-lg px-3.5 text-sm font-semibold transition duration-150 focus-visible:outline-none disabled:pointer-events-none disabled:opacity-45',
  {
    variants: {
      variant: {
        primary: 'bg-[#335cff] text-white shadow-sm hover:bg-[#2547d0] active:translate-y-px',
        secondary: 'border border-[#dfe3ea] bg-white text-[#343945] shadow-[0_1px_2px_rgba(16,24,40,.04)] hover:bg-[#f7f8fa]',
        ghost: 'text-[#515866] hover:bg-[#f0f2f6] hover:text-[#17191f]',
        danger: 'bg-[#dc3f4f] text-white hover:bg-[#bd2d3c]',
        soft: 'bg-[#edf2ff] text-[#2547d0] hover:bg-[#dfe8ff]',
      },
      size: {
        sm: 'min-h-8 px-3 text-xs',
        md: 'min-h-9 px-3.5 text-sm',
        lg: 'min-h-11 px-4 text-sm',
        icon: 'size-9 min-h-9 px-0',
      },
    },
    defaultVariants: { variant: 'secondary', size: 'md' },
  },
);

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & VariantProps<typeof buttonVariants> & { asChild?: boolean };

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(function Button(
  { className, variant, size, asChild, ...props },
  ref,
) {
  const Component = asChild ? Slot : 'button';
  return <Component ref={ref} className={cn(buttonVariants({ variant, size }), className)} {...props} />;
});
