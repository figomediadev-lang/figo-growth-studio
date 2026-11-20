import { createFileRoute } from "@tanstack/react-router";
import { PageShell, SectionLabel } from "@/components/site";
import { Check, Plus } from "lucide-react";
import { packages, services } from "@/lib/content";

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
      <section className="section-wrap border-t py-20 md:py-28" aria-labelledby="packages-title">
        <SectionLabel n="P">Monthly plans</SectionLabel>
        <h2 id="packages-title" className="font-display mt-6 text-5xl font-black leading-[0.9] md:text-8xl">Social media <span className="font-serif text-primary">packages.</span></h2>
        <p className="label-mono mt-6 text-muted-foreground">Monthly · Prices in AED</p>
        <div className="mt-14 grid items-end gap-6 lg:grid-cols-3">
          {packages.map((pkg, i) => (
            <article key={pkg.name} className={`flex flex-col rounded-2xl border bg-card p-8 ${i === 2 ? "border-primary shadow-glow lg:pb-12" : i === 1 ? "lg:pb-10" : ""}`}>
              <div className="border-b pb-6">
                <div className="flex items-center justify-between"><h3 className="font-display text-2xl font-bold">{pkg.name}</h3><span className="label-mono text-primary">0{i + 1}</span></div>
                <p className="font-display mt-4 text-6xl font-black tracking-tight">{pkg.price}<span className="label-mono ml-2 align-top text-muted-foreground">AED / mo</span></p>
                <p className="mt-3 text-primary">{pkg.note}</p>
              </div>
              <ul className="mt-6 space-y-3">{pkg.items.map((item) => <li key={item} className="flex gap-3"><Check className="mt-0.5 size-4 shrink-0 text-primary" />{item}</li>)}</ul>
            </article>
          ))}
        </div>
        <p className="font-display mt-10 flex items-center gap-3 text-xl font-bold"><Plus className="size-5 text-primary" />Customized packages available</p>
      </section>
    </PageShell>
  );
}
