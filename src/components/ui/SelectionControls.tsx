import type { ComponentPropsWithoutRef, ReactNode } from 'react';
import * as AlignCheckbox from '@/components/alignui/checkbox';
import * as AlignRadio from '@/components/alignui/radio';
import * as AlignSlider from '@/components/alignui/slider';
import * as AlignSwitch from '@/components/alignui/switch';
import { cn } from '@/lib/utils';

export function Checkbox({ label, className, checked, defaultChecked, onCheckedChange, disabled }: { label?: ReactNode; className?: string; checked?: boolean; defaultChecked?: boolean; onCheckedChange?: (checked: boolean) => void; disabled?: boolean }) {
  return <label className={cn('flex cursor-pointer items-center gap-2 text-paragraph-xs text-text-sub-600', disabled && 'cursor-not-allowed text-text-disabled-300', className)}><AlignCheckbox.Root checked={checked} defaultChecked={defaultChecked} disabled={disabled} onCheckedChange={(value) => onCheckedChange?.(value === true)} />{label}</label>;
}

export function RadioGroup({ value, defaultValue, onValueChange, children, className }: ComponentPropsWithoutRef<typeof AlignRadio.Group>) {
  return <AlignRadio.Group value={value} defaultValue={defaultValue} onValueChange={onValueChange} className={className}>{children}</AlignRadio.Group>;
}

export function RadioItem({ value, label, className }: { value: string; label: ReactNode; className?: string }) {
  return <label className={cn('flex cursor-pointer items-center gap-3 text-paragraph-xs text-text-sub-600', className)}><AlignRadio.Item value={value} />{label}</label>;
}

export function Slider({ value, defaultValue, min = 0, max = 100, step = 1, onValueChange, className, ariaLabel }: { value?: number; defaultValue?: number; min?: number; max?: number; step?: number; onValueChange?: (value: number) => void; className?: string; ariaLabel?: string }) {
  return <AlignSlider.Root value={value === undefined ? undefined : [value]} defaultValue={defaultValue === undefined ? undefined : [defaultValue]} min={min} max={max} step={step} onValueChange={(next) => onValueChange?.(next[0] ?? min)} className={className} aria-label={ariaLabel}><AlignSlider.Thumb /></AlignSlider.Root>;
}

export function Switch({ label, className, checked, defaultChecked, onCheckedChange, disabled }: { label?: ReactNode; className?: string; checked?: boolean; defaultChecked?: boolean; onCheckedChange?: (checked: boolean) => void; disabled?: boolean }) {
  const controlled = onCheckedChange !== undefined;
  return <label className={cn('flex cursor-pointer items-center justify-between gap-3 text-paragraph-xs text-text-sub-600', disabled && 'cursor-not-allowed text-text-disabled-300', className)}>{label}<AlignSwitch.Root checked={controlled ? checked : undefined} defaultChecked={controlled ? defaultChecked : (defaultChecked ?? checked)} disabled={disabled} onCheckedChange={onCheckedChange} /></label>;
}
