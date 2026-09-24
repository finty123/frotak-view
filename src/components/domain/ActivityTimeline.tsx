import { RiCheckboxCircleLine, RiUser3Line, RiShareForwardLine, RiEyeLine } from '@remixicon/react';

const items = [
  { icon: RiCheckboxCircleLine, title: 'Evidência processada', detail: 'Todos os canais disponíveis', time: '08:36:31', color: 'text-success-base' },
  { icon: RiEyeLine, title: 'Alerta revisado', detail: 'Central Operacional', time: '08:42:09', color: 'text-primary-base' },
  { icon: RiUser3Line, title: 'Atribuído a Samuel Cruz', detail: 'Prazo: hoje, 12:00', time: '08:43:16', color: 'text-feature-base' },
  { icon: RiShareForwardLine, title: 'Comentário adicionado', detail: 'Orientação enviada ao gestor', time: '09:06:11', color: 'text-warning-base' },
];

export function ActivityTimeline() {
  return <div className="space-y-0">{items.map((item, index) => { const Icon = item.icon; return <div key={item.title} className="relative flex gap-3 pb-5 last:pb-0">{index < items.length - 1 && <span className="absolute left-[15px] top-8 h-[calc(100%-20px)] w-px bg-bg-soft-200" />}<span className="relative z-10 grid size-8 shrink-0 place-items-center rounded-full bg-bg-white-0 ring-1 ring-stroke-soft-200"><Icon className={`size-4 ${item.color}`} /></span><div className="min-w-0 flex-1 pt-0.5"><div className="text-xs font-semibold text-text-strong-950">{item.title}</div><div className="mt-0.5 text-[11px] text-text-soft-400">{item.detail}</div></div><time className="pt-0.5 text-[10px] tabular text-text-soft-400">{item.time}</time></div>; })}</div>;
}
