import { useEffect, useState } from 'react';
import { RiPlayFill, RiPauseFill, RiVolumeUpLine, RiSpeedLine, RiFullscreenLine, RiCameraLine, RiSettings3Line, RiSkipBackMiniFill, RiSkipForwardMiniFill } from '@remixicon/react';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { cn } from '@/lib/utils';
import { Slider } from '@/components/ui/SelectionControls';

export function VideoPanel({ title = 'Câmera frontal • CH1', timestamp = '23/09/2026 08:36:25', compact, playing: controlledPlaying, onPlayingChange }: { title?: string; timestamp?: string; compact?: boolean; playing?: boolean; onPlayingChange?: (playing: boolean) => void }) {
  const [internalPlaying, setInternalPlaying] = useState(false);
  const [progress, setProgress] = useState(38);
  const playing = controlledPlaying ?? internalPlaying;
  const setPlaying = onPlayingChange ?? setInternalPlaying;
  useEffect(() => { if (!playing) return; const timer = window.setInterval(() => setProgress((value) => value >= 100 ? 0 : value + .4), 200); return () => window.clearInterval(timer); }, [playing]);
  return (
    <div className={cn('video-surface flex min-h-[420px] flex-col justify-between rounded-xl border border-bg-surface-800 shadow-sm', compact && 'min-h-[230px]')}>
      <div className="relative z-10 flex items-start justify-between p-4"><div><Badge tone="critical">REC</Badge><div className="mt-2 text-xs font-semibold">{title}</div></div><div className="rounded-lg bg-static-black/35 px-2.5 py-1.5 font-mono text-[10px] backdrop-blur">{timestamp}</div></div>
      <div className="relative z-10 mx-auto grid size-16 place-items-center rounded-full border border-static-white/30 bg-static-black/25 backdrop-blur transition hover:scale-105"><button onClick={() => setPlaying(!playing)} aria-label={playing ? 'Pausar vídeo' : 'Reproduzir vídeo'}>{playing ? <RiPauseFill className="size-7" /> : <RiPlayFill className="ml-1 size-7" />}</button></div>
      <div className="relative z-10 bg-gradient-to-t from-static-black/85 to-transparent px-4 pb-4 pt-12">
        <Slider ariaLabel="Posição do vídeo" min={0} max={100} value={progress} onValueChange={setProgress} />
        <div className="mt-2 flex items-center gap-1"><Button size="icon" variant="ghost" className="text-static-white hover:bg-bg-white-0/10 hover:text-static-white" aria-label="Voltar 10 segundos"><RiSkipBackMiniFill className="size-5" /></Button><Button size="icon" variant="ghost" className="text-static-white hover:bg-bg-white-0/10 hover:text-static-white" onClick={() => setPlaying(!playing)} aria-label={playing ? 'Pausar' : 'Reproduzir'}>{playing ? <RiPauseFill className="size-5" /> : <RiPlayFill className="size-5" />}</Button><Button size="icon" variant="ghost" className="text-static-white hover:bg-bg-white-0/10 hover:text-static-white" aria-label="Avançar 10 segundos"><RiSkipForwardMiniFill className="size-5" /></Button><span className="ml-2 text-[10px] tabular text-static-white/80">00:38 / 01:42</span><div className="ml-auto flex"><Button size="icon" variant="ghost" className="text-static-white hover:bg-bg-white-0/10 hover:text-static-white" aria-label="Volume"><RiVolumeUpLine className="size-4" /></Button><Button size="icon" variant="ghost" className="text-static-white hover:bg-bg-white-0/10 hover:text-static-white" aria-label="Velocidade"><RiSpeedLine className="size-4" /></Button><Button size="icon" variant="ghost" className="text-static-white hover:bg-bg-white-0/10 hover:text-static-white" aria-label="Capturar quadro"><RiCameraLine className="size-4" /></Button><Button size="icon" variant="ghost" className="text-static-white hover:bg-bg-white-0/10 hover:text-static-white" aria-label="Configurações"><RiSettings3Line className="size-4" /></Button><Button size="icon" variant="ghost" className="text-static-white hover:bg-bg-white-0/10 hover:text-static-white" aria-label="Tela cheia"><RiFullscreenLine className="size-4" /></Button></div></div>
      </div>
    </div>
  );
}

export function VideoMosaic() {
  return <div className="grid grid-cols-1 gap-3 lg:grid-cols-2"><VideoPanel compact title="Frontal • ADAS" /><VideoPanel compact title="Cabine • DSM" /><VideoPanel compact title="Lateral direita • CH3" /><VideoPanel compact title="Carga • CH4" /></div>;
}
