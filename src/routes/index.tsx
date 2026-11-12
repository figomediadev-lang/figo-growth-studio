import { createFileRoute, Link } from "@tanstack/react-router";
import hero from "@/assets/hero-lens.jpg";
import { PageShell, SectionLabel } from "@/components/site";
import { ReelStrip } from "@/components/reels";
import { platforms, process, services, work, WHATSAPP } from "@/lib/content";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Figo Media — Performance & Social Growth Agency, Dubai" },
      { name: "description", content: "We Create. We Perform. We Grow. Performance marketing, social media and creative strategy for high-growth brands in the UAE." },
      { property: "og:title", content: "Figo Media — Performance & Social Growth Agency" },
      { property: "og:description", content: "Performance Marketing • Social Media • Creative Strategy. We Create. We Perform. We Grow." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Home,
});

const words = ["Create.", "Perform.", "Grow."];

function Home() {
  return (
    <PageShell>
      {/* Hero */}
      <section className="relative flex min-h-screen items-end overflow-hidden pt-16">
        <img src={hero} alt="Cinematic camera lens under neon light" className="absolute inset-0 h-full w-full object-cover opacity-50" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-background/20" />
        <div className="relative mx-auto w-full max-w-7xl px-5 pb-16 md:px-8 md:pb-24">
          <p className="label-mono animate-rise flex items-center gap-2 text-primary"><span className="h-1.5 w-1.5 rounded-full bg-primary" />The Performance & Social Growth Agency</p>
          <h1 className="font-display mt-6 text-[15vw] font-black leading-[0.85] md:text-[9.5rem]">
            {words.map((w, i) => (
              <span key={w} className="animate-rise block" style={{ animationDelay: `${0.15 + i * 0.15}s` }}>
                <span className="font-serif text-muted-foreground text-[0.6em] mr-3">We</span>
                <span className={i === 2 ? "text-gradient" : ""}>{w}</span>
              </span>
            ))}
          </h1>
          <div className="mt-10 flex flex-col justify-between gap-8 md:flex-row md:items-end">
            <ul className="label-mono space-y-2 text-muted-foreground">
              <li><span className="text-primary">01/</span> Performance Marketing</li>
              <li><span className="text-primary">02/</span> Social Media</li>
              <li><span className="text-primary">03/</span> Creative Strategy</li>
            </ul>
            <div className="flex gap-3">
              <Link to="/work" className="rounded-full bg-primary px-6 py-3 font-semibold text-primary-foreground transition hover:shadow-glow">View the Work</Link>
              <a href={WHATSAPP} target="_blank" rel="noreferrer" className="rounded-full border px-6 py-3 transition hover:bg-accent">Start a project</a>
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section className="mx-auto max-w-7xl px-5 py-28 md:px-8 md:py-36">
        <SectionLabel n="01">About</SectionLabel>
        <h2 className="font-display mt-8 max-w-6xl text-4xl font-bold leading-[1.05] md:text-7xl">
          A Dubai-based growth agency where <span className="font-serif text-primary">creative</span> meets <span className="font-serif text-primary">performance</span> — content that stops the scroll, media that pays it back.
        </h2>
        <div className="mt-20 grid gap-px overflow-hidden rounded-2xl border bg-border md:grid-cols-3">
          {[
            ["(Create)", "Every campaign starts with an idea worth watching. Branding, film, photography and social content built in-house."],
            ["(+Perform)", "Paid media across Meta, Google, TikTok and LinkedIn — tested, measured and optimized weekly for ROAS."],
            ["(=Grow)", "Audiences, revenue and market share compounding across social, e-commerce and aggregator platforms."],
          ].map(([t, d]) => (
            <div key={t} className="bg-background p-8 md:p-10">
              <p className="label-mono text-primary">{t}</p>
              <p className="mt-4 text-lg leading-relaxed text-muted-foreground">{d}</p>
            </div>
          ))}
        </div>
        <div className="mt-16 grid grid-cols-2 gap-8 md:grid-cols-4">
          {[["98%", "Client retention"], ["6", "Growth disciplines"], ["6+", "Platforms managed"], ["48h", "Proposal turnaround"]].map(([v, l]) => (
            <div key={l}><p className="font-display text-5xl font-black md:text-6xl">{v}</p><p className="label-mono mt-2 text-muted-foreground">{l}</p></div>
          ))}
        </div>
      </section>

      {/* Platforms marquee */}
      <section className="overflow-hidden border-y py-10">
        <p className="label-mono mb-8 text-center text-muted-foreground">Platforms we manage</p>
        <div className="animate-marquee flex w-max items-center gap-20">
          {[...platforms, ...platforms, ...platforms, ...platforms].map((p, i) => (
            <img key={i} src={p.img} alt={p.name} className="h-10 w-auto opacity-70 grayscale transition hover:opacity-100 hover:grayscale-0" />
          ))}
        </div>
      </section>

      {/* Services */}
      <section className="mx-auto max-w-7xl px-5 py-28 md:px-8 md:py-36">
        <div className="flex items-end justify-between gap-6">
          <div><SectionLabel n="02">Services</SectionLabel>
            <h2 className="font-display mt-6 text-5xl font-extrabold md:text-7xl">What we do.</h2></div>
          <Link to="/services" className="label-mono hidden text-primary hover:underline md:block">All services →</Link>
        </div>
        <ul className="mt-14 border-t">
          {services.map((s) => (
            <li key={s.n}>
              <Link to="/services" className="group grid items-baseline gap-4 border-b py-8 transition-colors hover:bg-card md:grid-cols-[80px_1fr_1fr] md:px-4">
                <span className="label-mono text-primary">{s.n}</span>
                <span className="font-display text-3xl font-bold transition-transform group-hover:translate-x-2 md:text-5xl">{s.title}</span>
                <span className="text-muted-foreground">{s.short}</span>
              </Link>
            </li>
          ))}
        </ul>
      </section>

      {/* Reels */}
      <section className="py-24">
        <div className="mx-auto mb-12 max-w-7xl px-5 md:px-8">
          <SectionLabel n="03">In motion</SectionLabel>
          <h2 className="font-display mt-6 text-5xl font-extrabold md:text-7xl">The <span className="font-serif text-primary">showreel.</span></h2>
          <p className="mt-4 text-muted-foreground">Hover to preview. Tap to play with sound.</p>
        </div>
        <ReelStrip />
      </section>

      {/* Selected work */}
      <section className="mx-auto max-w-7xl px-5 py-28 md:px-8">
        <div className="flex items-end justify-between">
          <div><SectionLabel n="04">Selected work</SectionLabel>
            <h2 className="font-display mt-6 text-5xl font-extrabold md:text-7xl">Work that converts.</h2></div>
          <Link to="/work" className="label-mono hidden text-primary hover:underline md:block">View all →</Link>
        </div>
        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {work.slice(0, 4).map((w, i) => (
            <Link key={w.title} to="/work" className={`group block ${i % 2 ? "md:mt-24" : ""}`}>
              <div className="overflow-hidden rounded-2xl border"><img src={w.img} alt={w.title} loading="lazy" className="aspect-[4/3] w-full object-cover transition duration-700 group-hover:scale-105" /></div>
              <div className="mt-4 flex justify-between"><span className="font-display text-2xl font-bold">{w.title}</span><span className="label-mono text-muted-foreground">{w.cat}</span></div>
            </Link>
          ))}
        </div>
      </section>

      {/* Process */}
      <section className="border-t bg-card/40">
        <div className="mx-auto max-w-7xl px-5 py-28 md:px-8">
          <SectionLabel n="05">Process</SectionLabel>
          <h2 className="font-display mt-6 max-w-4xl text-4xl font-extrabold md:text-6xl">Strategy, story and shipping — in lockstep.</h2>
          <ol className="mt-16 grid gap-10 md:grid-cols-5">
            {process.map((p) => (
              <li key={p.n} className="border-t pt-6"><p className="label-mono text-primary">{p.n}</p>
                <h3 className="font-display mt-3 text-2xl font-bold">{p.t}</h3><p className="mt-2 text-sm text-muted-foreground">{p.d}</p></li>
            ))}
          </ol>
        </div>
      </section>
    </PageShell>
  );
}
