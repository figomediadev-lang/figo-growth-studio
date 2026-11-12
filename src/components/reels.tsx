import { useRef, useState } from "react";
import { reels } from "@/lib/content";

function Reel({ r }: { r: (typeof reels)[number] }) {
  const v = useRef<HTMLVideoElement>(null);
  const [sound, setSound] = useState(false);
  return (
    <div className="group relative aspect-[9/16] w-64 shrink-0 overflow-hidden rounded-xl border bg-card md:w-72"
      onMouseEnter={() => v.current?.play().catch(() => {})}
      onMouseLeave={() => { v.current?.pause(); }}
      onClick={() => { const el = v.current; if (!el) return; el.muted = sound; setSound(!sound); el.play().catch(() => {}); }}>
      <video ref={v} src={r.src} poster={r.poster} muted loop playsInline preload="none" className="h-full w-full object-cover transition duration-700 group-hover:scale-105" />
      <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent" />
      <div className="absolute bottom-0 p-4">
        <p className="label-mono text-primary">{r.tag}</p>
        <p className="font-display text-lg font-bold">{r.title}</p>
      </div>
      <span className="label-mono absolute top-3 right-3 rounded-full bg-background/70 px-2 py-1">{sound ? "Sound on" : "Tap for sound"}</span>
    </div>
  );
}

export function ReelStrip() {
  return (
    <div className="flex gap-4 overflow-x-auto px-5 pb-4 md:px-8 [scrollbar-width:none]">
      {reels.map((r, i) => <Reel key={i} r={r} />)}
    </div>
  );
}
