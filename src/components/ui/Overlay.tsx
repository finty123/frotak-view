import type { ReactNode } from 'react';
import * as AlignModal from '@/components/alignui/modal';
import * as AlignDrawer from '@/components/alignui/drawer';
import { cn } from '@/lib/utils';

type OverlayProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  title: string;
  description?: string;
  children: ReactNode;
  footer?: ReactNode;
};

export function Modal({ open, onOpenChange, title, description, children, footer, wide }: OverlayProps & { wide?: boolean }) {
  return (
    <AlignModal.Root open={open} onOpenChange={onOpenChange}>
      <AlignModal.Content className={cn('max-h-[90vh] overflow-hidden', wide && 'max-w-3xl')}>
        <AlignModal.Header title={title} description={description} />
        <AlignModal.Body className='max-h-[65vh] overflow-y-auto scrollbar-thin'>{children}</AlignModal.Body>
        {footer && <AlignModal.Footer className='justify-end bg-bg-weak-25'>{footer}</AlignModal.Footer>}
      </AlignModal.Content>
    </AlignModal.Root>
  );
}

export function Drawer({ open, onOpenChange, title, description, children, footer, width = 'max-w-xl' }: OverlayProps & { width?: string }) {
  return (
    <AlignDrawer.Root open={open} onOpenChange={onOpenChange}>
      <AlignDrawer.Content className={cn('overflow-hidden shadow-regular-md', width)}>
        <AlignDrawer.Header className='border-b'>
          <div className='min-w-0 flex-1'>
            <AlignDrawer.Title>{title}</AlignDrawer.Title>
            {description && <p className='mt-1 text-paragraph-xs text-text-sub-600'>{description}</p>}
          </div>
        </AlignDrawer.Header>
        <AlignDrawer.Body className='min-h-0 overflow-y-auto p-5 scrollbar-thin'>{children}</AlignDrawer.Body>
        {footer && <AlignDrawer.Footer className='justify-end border-t bg-bg-weak-25'>{footer}</AlignDrawer.Footer>}
      </AlignDrawer.Content>
    </AlignDrawer.Root>
  );
}
