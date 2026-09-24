import type { ComponentType, ReactNode } from 'react';

export type Tone = 'neutral' | 'primary' | 'success' | 'warning' | 'critical' | 'info' | 'route';

export type RouteDefinition = {
  path: string;
  title: string;
  group: string;
  product: 'vision' | 'manager';
  element: ComponentType;
};

export type NavItem = {
  label: string;
  to?: string;
  icon: ComponentType<{ className?: string }>;
  children?: NavItem[];
  badge?: string;
};

export type TableColumn<T> = {
  key: keyof T | string;
  header: string;
  width?: string;
  sortable?: boolean;
  render?: (row: T) => ReactNode;
};
