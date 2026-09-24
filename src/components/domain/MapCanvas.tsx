import { useState } from 'react';
import { RiAddLine, RiSubtractLine, RiFullscreenLine, RiMap2Line, RiFocus3Line, RiStackLine, RiNavigationFill, RiAlertLine } from '@remixicon/react';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { cn } from '@/lib/utils';
import { vehicles } from '@/data/mock-data';

export function MapCanvas({ route, compact, selectedPlate = 'RQX6A36', onVehicleSelect }: { route?: boolean; compact?: boolean; selectedPlate?: string; onVehicleSelect?: (plate: string) => void }) {
  const [zoom, setZoom] = useState(12);
  const markers = vehicles.slice(0, compact ? 4 : 8);
  return (
    <div className={cn('map-surface rounded-xl border border-stroke-soft-200', compact ? 'min-h-[300px]' : 'min-h-[480px]')} aria-label="Mapa operacional simulado">
      <div className="map-grid-overlay" />
      {route && <div className="route-path" />}
      <div className="absolute left-4 top-4 z-10 flex items-center gap-2 rounded-lg border border-static-white/80 bg-bg-white-0/90 px-3 py-2 text-[11px] font-semibold text-text-sub-600 shadow-sm backdrop-blur"><span className="size-2 rounded-full bg-success-base" /> Dados atualizados agora</div>
      {markers.map((vehicle, index) => {
        const active = vehicle.plate === selectedPlate;
        const positions = [[26, 63], [48, 46], [67, 68], [76, 34], [38, 76], [59, 21], [18, 35], [84, 76]];
        const [left, top] = positions[index];
        return <button key={vehicle.id} onClick={() => onVehicleSelect?.(vehicle.plate)} style={{ left: `${left}%`, top: `${top}%` }} className={cn('absolute z-10 -translate-x-1/2 -translate-y-1/2 transition hover:z-20 hover:scale-105', active && 'z-20 scale-110')} aria-label={`${vehicle.plate}, ${vehicle.status}`}><span className={cn('grid size-9 place-items-center rounded-full border-4 border-static-white text-static-white shadow-regular-md', vehicle.status === 'Offline' ? 'bg-faded-base' : active ? 'bg-primary-base' : 'bg-success-base')}><RiNavigationFill className="size-4 rotate-45" /></span>{(!compact || active) && <span className={cn('mt-1 block rounded-md bg-bg-strong-950/90 px-2 py-1 text-[9px] font-bold text-static-white shadow-sm', active && 'bg-primary-base')}>{vehicle.plate}</span>}</button>;
      })}
      {route && <div className="absolute left-[59%] top-[56%] z-20 flex items-center gap-1 rounded-full bg-error-lighter px-2 py-1 text-[10px] font-bold text-error-dark shadow-sm"><RiAlertLine className="size-3" /> Evento</div>}
      <div className="absolute bottom-4 right-4 z-20 flex flex-col gap-2"><Button size="icon" aria-label="Tela cheia"><RiFullscreenLine className="size-4" /></Button><Button size="icon" aria-label="Aproximar" onClick={() => setZoom((value) => Math.min(18, value + 1))}><RiAddLine className="size-4" /></Button><div className="rounded-lg border border-stroke-soft-200 bg-bg-white-0 py-1 text-center text-[9px] font-bold text-text-sub-600 shadow-sm">{zoom}</div><Button size="icon" aria-label="Afastar" onClick={() => setZoom((value) => Math.max(4, value - 1))}><RiSubtractLine className="size-4" /></Button><Button size="icon" aria-label="Centralizar"><RiFocus3Line className="size-4" /></Button><Button size="icon" aria-label="Camadas"><RiStackLine className="size-4" /></Button></div>
      <div className="absolute bottom-4 left-4 z-10 hidden items-center gap-2 rounded-lg border border-static-white/80 bg-bg-white-0/90 px-3 py-2 shadow-sm backdrop-blur sm:flex"><RiMap2Line className="size-4 text-feature-base" /><span className="text-[10px] font-semibold text-text-sub-600">Mapa claro</span><Badge tone="route">Rota ativa</Badge></div>
    </div>
  );
}
