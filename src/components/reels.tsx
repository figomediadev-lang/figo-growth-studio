import { useEffect, useRef, useState } from "react";
import { ArrowUpRight, Pause, Play } from "lucide-react";
import { reels, type Film } from "@/lib/content";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogTitle } from "@/components/ui/dialog";

export function LiveVideo({ film, className = "", paused = false }: { film: Film; className?: string; paused?: boolean }) {
  const ref = useRef<HTMLVideoElement>(null);
  const [failed, setFailed] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");
    let visible = false;
    const sync = () => {
      if (visible && !paused && !reduced.matches && !document.hidden) el.play().catch(() => {});
      else el.pause();
    };
    const observer = new IntersectionObserver(([entry]) => { visible = entry?.isIntersecting ?? false; sync(); }, { threshold: 0.15 });
    observer.observe(el);
    document.addEventListener("visibilitychange", sync);
    reduced.addEventListener("change", sync);
    return () => { observer.disconnect(); el.pause(); document.removeEventListener("visibilitychange", sync); reduced.removeEventListener("change", sync); };
  }, [paused]);
  return <video ref={ref} src={failed ? undefined : film.preview} onError={() => setFailed(true)} poster={film.poster} muted loop playsInline preload="none" className={className} aria-label={`${film.title} preview`} />;
}

export function FilmCard({ film, onOpen, paused = false }: { film: Film; onOpen: (film: Film) => void; paused?: boolean }) {
  const landscape = film.width > film.height;
  return (
    <article className={`film-card ${landscape ? "film-landscape" : "film-portrait"}`}>
      <div className={`group relative overflow-hidden bg-card ${landscape ? "aspect-video" : "aspect-[9/16]"}`}>
        <LiveVideo film={film} paused={paused} className="h-full w-full object-contain" />
        <span className="label-mono absolute top-4 left-4 bg-background/75 px-2 py-1">{landscape ? "16:9" : "9:16"}</span>
        <Button variant="ghost" className="absolute inset-0 h-full w-full rounded-none bg-transparent hover:bg-background/10" onClick={() => onOpen(film)} aria-label={`Watch ${film.title}`}>
          <span className="absolute right-4 bottom-4 flex size-12 items-center justify-center rounded-full border border-foreground/40 bg-background/50 text-foreground transition-transform group-hover:scale-110"><Play className="size-5" /></span>
        </Button>
      </div>
      <div className="mt-4 flex items-start justify-between gap-3">
        <div><p className="label-mono text-primary">{film.category}</p><h3 className="font-display mt-2 text-xl font-bold">{film.title}</h3></div>
        <span className="label-mono mt-1 shrink-0 text-muted-foreground">{film.duration}</span>
      </div>
    </article>
  );
}

export function FilmPlayer({ film, onClose }: { film: Film | null; onClose: () => void }) {
  return <Dialog open={Boolean(film)} onOpenChange={(open) => { if (!open) onClose(); }}>
    <DialogContent className="film-dialog max-w-5xl gap-2 border-none p-4 pt-12" aria-describedby={undefined}>
      <DialogTitle className="font-display">{film?.title}</DialogTitle>
      <DialogDescription>{film?.category}</DialogDescription>
      {film && <video key={film.id} src={film.src} poster={film.poster} controls autoPlay playsInline preload="metadata" className="mx-auto max-h-[72svh] w-full object-contain" />}
    </DialogContent>
  </Dialog>;
}

export function FilmGrid({ films }: { films: Film[] }) {
  const [selected, setSelected] = useState<Film | null>(null);
  const [paused, setPaused] = useState(false);
  return <>
    <div className="mb-6 flex items-center justify-between border-b pb-4">
      <span className="label-mono text-muted-foreground">{String(films.length).padStart(2, "0")} films</span>
      <Button variant="ghost" size="icon" onClick={() => setPaused(!paused)} aria-label={paused ? "Play previews" : "Pause previews"} title={paused ? "Play previews" : "Pause previews"}>{paused ? <Play /> : <Pause />}</Button>
    </div>
    <div className="film-grid">{films.map((film) => <FilmCard key={film.id} film={film} onOpen={setSelected} paused={paused || Boolean(selected)} />)}</div>
    <FilmPlayer film={selected} onClose={() => setSelected(null)} />
  </>;
}

export function ReelStrip() {
  const [selected, setSelected] = useState<Film | null>(null);
  return <>
    <div className="reel-strip">{reels.map((film) => <FilmCard key={film.id} film={film} onOpen={setSelected} paused={Boolean(selected)} />)}<span className="self-center text-primary"><ArrowUpRight className="size-12" /></span></div>
    <FilmPlayer film={selected} onClose={() => setSelected(null)} />
  </>;
}
