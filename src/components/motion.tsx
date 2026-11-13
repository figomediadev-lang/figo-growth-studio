import { useEffect, useRef, type ReactNode } from "react";

export function Reveal({ children, className = "" }: { children: ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry?.isIntersecting) { el.classList.add("is-visible"); observer.disconnect(); }
    }, { threshold: 0.12 });
    el.classList.add("will-reveal");
    observer.observe(el);
    return () => observer.disconnect();
  }, []);
  return <div ref={ref} className={className}>{children}</div>;
}

export function ScrollStatement({ text }: { text: string }) {
  const ref = useRef<HTMLParagraphElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    let frame = 0;
    const update = () => {
      const bounds = el.getBoundingClientRect();
      const progress = Math.max(0, Math.min(1, (window.innerHeight * 0.9 - bounds.top) / (window.innerHeight * 0.65)));
      const words = el.querySelectorAll("span");
      words.forEach((word, i) => word.classList.toggle("word-lit", i / words.length <= progress));
      frame = 0;
    };
    const scroll = () => { if (!frame) frame = requestAnimationFrame(update); };
    window.addEventListener("scroll", scroll, { passive: true });
    window.addEventListener("resize", scroll);
    update();
    return () => { window.removeEventListener("scroll", scroll); window.removeEventListener("resize", scroll); cancelAnimationFrame(frame); };
  }, []);
  return <p ref={ref} className="scroll-statement font-display">{text.split(" ").map((word, i) => <span key={i}>{word} </span>)}</p>;
}