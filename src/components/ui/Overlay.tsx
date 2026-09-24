import * as Dialog from '@radix-ui/react-dialog';
import { RiCloseLine } from '@remixicon/react';
import type { ReactNode } from 'react';
import { cn } from '@/lib/utils';

export function Modal({ open, onOpenChange, title, description, children, footer, wide }: { open: boolean; onOpenChange: (open: boolean) => void; title: string; description?: string; children: ReactNode; footer?: ReactNode; wide?: boolean }) {
  return (
    <Dialog.Root open={open} onOpenChange={onOpenChange}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 z-50 bg-[#10131a]/45 backdrop-blur-[2px] data-[state=open]:animate-in" />
        <Dialog.Content className={cn('fixed left-1/2 top-1/2 z-50 max-h-[90vh] w-[calc(100%-32px)] max-w-lg -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-2xl border border-white/50 bg-white shadow-[0_30px_100px_rgba(10,15,25,.28)]', wide && 'max-w-3xl')}>
          <div className="flex items-start justify-between gap-4 border-b border-[#e8eaf0] px-5 py-4">
            <div><Dialog.Title className="text-base font-semibold text-[#20232a]">{title}</Dialog.Title>{description && <Dialog.Description className="mt-1 text-xs text-[#7a8190]">{description}</Dialog.Description>}</div>
            <Dialog.Close className="grid size-9 place-items-center rounded-lg text-[#717784] hover:bg-[#f1f3f6]" aria-label="Fechar"><RiCloseLine className="size-5" /></Dialog.Close>
          </div>
          <div className="max-h-[65vh] overflow-y-auto p-5 scrollbar-thin">{children}</div>
          {footer && <div className="flex justify-end gap-2 border-t border-[#e8eaf0] bg-[#fafbfc] px-5 py-4">{footer}</div>}
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}

export function Drawer({ open, onOpenChange, title, description, children, footer, width = 'max-w-xl' }: { open: boolean; onOpenChange: (open: boolean) => void; title: string; description?: string; children: ReactNode; footer?: ReactNode; width?: string }) {
  return (
    <Dialog.Root open={open} onOpenChange={onOpenChange}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 z-50 bg-[#10131a]/35 backdrop-blur-[1px]" />
        <Dialog.Content className={cn('fixed inset-y-0 right-0 z-50 flex w-[calc(100%-24px)] flex-col border-l border-[#e4e7ed] bg-white shadow-[0_0_80px_rgba(10,15,25,.18)]', width)}>
          <div className="flex items-start justify-between border-b border-[#e8eaf0] px-5 py-4"><div><Dialog.Title className="font-semibold">{title}</Dialog.Title>{description && <Dialog.Description className="mt-1 text-xs text-[#7a8190]">{description}</Dialog.Description>}</div><Dialog.Close className="grid size-9 place-items-center rounded-lg hover:bg-[#f1f3f6]" aria-label="Fechar"><RiCloseLine className="size-5" /></Dialog.Close></div>
          <div className="min-h-0 flex-1 overflow-y-auto p-5 scrollbar-thin">{children}</div>
          {footer && <div className="flex justify-end gap-2 border-t border-[#e8eaf0] bg-[#fafbfc] p-4">{footer}</div>}
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
