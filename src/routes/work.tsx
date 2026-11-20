import { createFileRoute } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { PageShell, SectionLabel } from "@/components/site";
import { FilmGrid } from "@/components/reels";
import { Button } from "@/components/ui/button";
import { filmCategories, filmsInCategory, work, type FilmCategory } from "@/lib/content";

export const Route = createFileRoute("/work")({
  validateSearch: (search: Record<string, unknown>): { category?: FilmCategory } => {
    const category = filmCategories.find((item) => item === search["category"]);
    return category ? { category } : {};
  },
  head: () => ({ meta: [
    { title: "The Film Collection — Figo Media" },
    { name: "description", content: "Watch Figo Media's automotive, event, brand story, social content and real estate films in their original proportions." },
    { property: "og:title", content: "The Film Collection — Figo Media" },
    { property: "og:description", content: "Explore automotive, event, brand story, social content and real estate films." },
    { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" },
  ] }), component: WorkPage,
});

function WorkPage() {
  const category = Route.useSearch().category ?? "All films";
  const navigate = Route.useNavigate();
  return <PageShell>
    <section className="section-wrap pb-10 pt-32 md:pt-40"><div className="flex justify-between"><SectionLabel n="W">The collection</SectionLabel><ArrowUpRight className="size-7 text-primary" /></div><h1 className="font-display mt-8 text-5xl font-black leading-none md:text-8xl">Made to be<br /><span className="font-serif text-primary">watched.</span></h1><p className="mt-8 max-w-xl text-muted-foreground">Automotive. Events. Brand stories. Social content. From the desert to the city — this is Figo in motion.</p></section>
    <section className="section-wrap pb-20"><div className="film-filters" role="group" aria-label="Film categories">{filmCategories.map((cat) => <Button variant="ghost" key={cat} onClick={() => navigate({ search: { category: cat }, resetScroll: false })} aria-pressed={category === cat} className={`category-button ${category === cat ? "category-active" : ""}`}>{cat}<span className="label-mono">{String(filmsInCategory(cat).length).padStart(2, "0")}</span></Button>)}</div><div className="mt-8"><FilmGrid films={filmsInCategory(category)} grouped={category === "All films"} /></div></section>
    <section className="section-wrap border-t py-20"><SectionLabel n="P">Photography & brand work</SectionLabel><h2 className="font-display mt-8 text-4xl font-bold md:text-6xl">Still makes an <span className="font-serif text-primary">impact.</span></h2><div className="mt-12 grid gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">{work.map((w) => <figure key={w.title}><img src={w.img} alt={w.title} loading="lazy" className="aspect-[4/3] w-full object-cover" /><figcaption className="mt-4"><p className="label-mono text-primary">{w.cat}</p><h3 className="font-display mt-2 text-xl font-bold">{w.title}</h3></figcaption></figure>)}</div></section>
  </PageShell>;
}
