import { Link } from "@tanstack/react-router";
import { useEffect, useState, type ReactNode } from "react";
import logo from "@/assets/figo-logo.png";
import { PHONE, PHONE_HREF, WHATSAPP } from "@/lib/content";

const nav = [
  { to: "/work", label: "Work" },
  { to: "/services", label: "Services" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteHeader() {
  const [time, setTime] = useState("");
  useEffect(() => {
    const f = () => setTime(new Date().toLocaleTimeString("en-GB", { timeZone: "Asia/Dubai", hour: "2-digit", minute: "2-digit" }));
    f(); const id = setInterval(f, 30000); return () => clearInterval(id);
  }, []);
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b bg-background/70 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 md:px-8">
        <Link to="/" aria-label="Figo Media home"><img src={logo} alt="Figo Media" className="h-8 w-auto" /></Link>
        <span className="label-mono hidden text-muted-foreground lg:block">Dubai · {time} GST</span>
        <nav className="flex items-center gap-1 md:gap-6">
          {nav.map((n) => (
            <Link key={n.to} to={n.to} className="hidden px-2 text-sm text-muted-foreground transition-colors hover:text-foreground sm:block"
              activeProps={{ className: "text-foreground" }}>{n.label}</Link>
          ))}
          <a href={WHATSAPP} target="_blank" rel="noreferrer"
            className="rounded-full bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground transition hover:shadow-glow">Let's talk</a>
        </nav>
      </div>
    </header>
  );
}

export function SectionLabel({ n, children }: { n: string; children: ReactNode }) {
  return (
    <p className="label-mono flex gap-3 text-muted-foreground">
      <span className="text-primary">({n})</span><span>({children})</span>
    </p>
  );
}

export function CTA() {
  return (
    <section className="relative overflow-hidden border-t">
      <div className="mx-auto max-w-7xl px-5 py-28 md:px-8 md:py-40">
        <SectionLabel n="→">Start a project</SectionLabel>
        <h2 className="font-display mt-6 max-w-5xl text-5xl font-extrabold leading-[0.95] md:text-8xl">
          Ready to <span className="font-serif text-primary">grow</span> faster than your market?
        </h2>
        <p className="mt-6 max-w-xl text-lg text-muted-foreground">Tell us about your brand. We'll come back with a tailored growth deck within 48 hours.</p>
        <div className="mt-10 flex flex-wrap gap-3">
          <a href={WHATSAPP} target="_blank" rel="noreferrer" className="rounded-full bg-primary px-7 py-4 font-semibold text-primary-foreground transition hover:shadow-glow">Book a Consultation →</a>
          <a href={PHONE_HREF} className="rounded-full border px-7 py-4 font-medium transition hover:bg-accent">{PHONE}</a>
        </div>
      </div>
      <div className="pointer-events-none absolute -right-40 -bottom-40 h-[520px] w-[520px] rounded-full bg-primary/20 blur-[140px]" />
    </section>
  );
}

export function SiteFooter() {
  return (
    <footer className="border-t">
      <div className="mx-auto max-w-7xl px-5 pt-16 pb-8 md:px-8">
        <p className="font-display text-[18vw] font-black leading-none tracking-tighter text-foreground/5 md:text-[13rem]">FIGO MEDIA</p>
        <div className="mt-8 flex flex-col justify-between gap-4 text-sm text-muted-foreground md:flex-row">
          <span>Performance & Social Growth Agency · Dubai, UAE</span>
          <span className="label-mono">We Create. We Perform. We Grow.</span>
          <span>© {new Date().getFullYear()} Figo Media</span>
        </div>
      </div>
    </footer>
  );
}

export function PageShell({ children }: { children: ReactNode }) {
  return (<><SiteHeader /><main id="main">{children}</main><CTA /><SiteFooter /></>);
}
