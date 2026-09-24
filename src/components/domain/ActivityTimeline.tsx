import { RiCheckboxCircleLine, RiUser3Line, RiShareForwardLine, RiEyeLine } from '@remixicon/react';

const items = [
  { icon: RiCheckboxCircleLine, title: 'Evidência processada', detail: 'Todos os canais disponíveis', time: '08:36:31', color: '#1f9d62' },
  { icon: RiEyeLine, title: 'Alerta revisado', detail: 'Central Operacional', time: '08:42:09', color: '#335cff' },
  { icon: RiUser3Line, title: 'Atribuído a Samuel Cruz', detail: 'Prazo: hoje, 12:00', time: '08:43:16', color: '#6d3dd3' },
  { icon: RiShareForwardLine, title: 'Comentário adicionado', detail: 'Orientação enviada ao gestor', time: '09:06:11', color: '#d9850b' },
];

export function ActivityTimeline() {
  return <div className="space-y-0">{items.map((item, index) => { const Icon = item.icon; return <div key={item.title} className="relative flex gap-3 pb-5 last:pb-0">{index < items.length - 1 && <span className="absolute left-[15px] top-8 h-[calc(100%-20px)] w-px bg-[#e1e4ea]" />}<span className="relative z-10 grid size-8 shrink-0 place-items-center rounded-full bg-white ring-1 ring-[#e1e4ea]"><Icon className="size-4" style={{ color: item.color }} /></span><div className="min-w-0 flex-1 pt-0.5"><div className="text-xs font-semibold text-[#343945]">{item.title}</div><div className="mt-0.5 text-[11px] text-[#8b92a0]">{item.detail}</div></div><time className="pt-0.5 text-[10px] tabular text-[#9aa1ad]">{item.time}</time></div>; })}</div>;
}
