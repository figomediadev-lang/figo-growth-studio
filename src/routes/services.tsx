import { createFileRoute } from "@tanstack/react-router";
import { PageShell, SectionLabel } from "@/components/site";
import { services } from "@/lib/content";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Figo Media" },
      { name: "description", content: "Performance marketing, social media growth, creative production, branding, e-commerce and aggregator management." },
      { property: "og:title", content: "Services — Figo Media" },
      { property: "og:description", content: "Six growth disciplines under one roof: Performance, Social and Creative." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  return (
    <PageShell>
      <section className="mx-auto max-w-7xl px-5 pt-36 pb-10 md:px-8">
        <SectionLabel n="S">Services</SectionLabel>
        <h1 className="font-display mt-6 text-6xl font-black leading-[0.9] md:text-9xl">Capabilities, <span className="font-serif text-primary">end-to-end.</span></h1>
        <p className="mt-8 max-w-2xl text-lg text-muted-foreground">Performance Marketing • Social Media • Creative Strategy — plus the brand, commerce and platform ops that make growth stick.</p>
      </section>
      <section className="mx-auto max-w-7xl px-5 pb-20 md:px-8">
        {services.map((s) => (
          <article key={s.n} className="grid gap-8 border-t py-14 md:grid-cols-[1fr_1.4fr]">
            <div>
              <p className="label-mono text-primary">{s.n}</p>
              <h2 className="font-display mt-3 text-4xl font-extrabold md:text-5xl">{s.title}</h2>
              <p className="mt-4 text-muted-foreground">{s.short}</p>
              <div className="mt-6 flex flex-wrap gap-2">{s.tags.map((t) => <span key={t} className="label-mono rounded-full border px-3 py-1 text-muted-foreground">{t}</span>)}</div>
            </div>
            <div className="grid gap-px overflow-hidden rounded-2xl border bg-border sm:grid-cols-2">
              {[["What you get", s.get], ["Benefits", s.wins]].map(([h, items]) => (
                <div key={h as string} className="bg-card p-7">
                  <p className="label-mono text-primary">{h as string}</p>
                  <ul className="mt-4 space-y-3">{(items as string[]).map((i) => <li key={i} className="flex gap-3"><span className="text-primary">+</span>{i}</li>)}</ul>
                </div>
              ))}
            </div>
          </article>
        ))}
      </section>
    </PageShell>
  );
}
