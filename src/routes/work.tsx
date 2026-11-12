import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { PageShell, SectionLabel } from "@/components/site";
import { ReelStrip } from "@/components/reels";
import { work } from "@/lib/content";

export const Route = createFileRoute("/work")({
  head: () => ({
    meta: [
      { title: "Work — Figo Media" },
      { name: "description", content: "Campaigns, films, branding and e-commerce work by Figo Media, the performance & social growth agency." },
      { property: "og:title", content: "Work — Figo Media" },
      { property: "og:description", content: "Selected campaigns, films and brand work that converts." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: WorkPage,
});

const cats = ["All", "Performance", "Production", "Branding"];

function WorkPage() {
  const [cat, setCat] = useState("All");
  const list = cat === "All" ? work : work.filter((w) => w.cat === cat);
  return (
    <PageShell>
      <section className="mx-auto max-w-7xl px-5 pt-36 pb-16 md:px-8">
        <SectionLabel n="W">Portfolio</SectionLabel>
        <h1 className="font-display mt-6 text-6xl font-black leading-[0.9] md:text-9xl">Work that <span className="font-serif text-primary">converts.</span></h1>
        <div className="mt-12 flex flex-wrap gap-2">
          {cats.map((c) => (
            <button key={c} onClick={() => setCat(c)}
              className={`rounded-full border px-5 py-2 text-sm transition ${c === cat ? "bg-primary text-primary-foreground" : "hover:bg-accent"}`}>{c}</button>
          ))}
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {list.map((w) => (
            <figure key={w.title} className="group">
              <div className="overflow-hidden rounded-2xl border"><img src={w.img} alt={w.title} loading="lazy" className="aspect-[4/5] w-full object-cover transition duration-700 group-hover:scale-105" /></div>
              <figcaption className="mt-3 flex justify-between"><span className="font-display text-xl font-bold">{w.title}</span><span className="label-mono text-muted-foreground">{w.cat}</span></figcaption>
            </figure>
          ))}
        </div>
      </section>
      <section className="py-20">
        <div className="mx-auto mb-10 max-w-7xl px-5 md:px-8"><SectionLabel n="R">Showreel</SectionLabel></div>
        <ReelStrip />
      </section>
    </PageShell>
  );
}
