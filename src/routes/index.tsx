import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowDown, ArrowUpRight, Pause, Play, Plus } from "lucide-react";
import { PageShell, SectionLabel } from "@/components/site";
import { RecentWork, LiveVideo } from "@/components/reels";
import { Reveal, ScrollStatement } from "@/components/motion";
import { Button } from "@/components/ui/button";
import { agencyStatement, filmGroups, filmsInCategory, reels, services, work } from "@/lib/content";

export const Route = createFileRoute("/")({
  head: () => ({ meta: [
    { title: "Figo Media — Films, Creative & Performance, Dubai" },
    { name: "description", content: "We Create. We Perform. We Grow. Explore Figo Media's films, content, events, motorsport and real estate work." },
    { property: "og:title", content: "Figo Media — The Performance & Social Growth Agency" },
    { property: "og:description", content: "Original films. Social-first content. Creative built for growth. Dubai, UAE." },
    { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" },
  ] }), component: Home,
});

function Home() {
  const [paused, setPaused] = useState(false);
  const heroFilm = reels.find((film) => film.id === "motorsport");
  return <PageShell>
    <section className="cinema-hero">
      {heroFilm && <LiveVideo film={heroFilm} paused={paused} className="hero-film" />}
      <div className="hero-shade" />
      <div className="hero-topline label-mono"><span>Independent thinking.<br />Unmistakable work.</span><span className="text-right">Dubai, UAE<br />Create / Perform / Grow</span></div>
      <Plus className="hero-cross" strokeWidth={1} />
      <div className="hero-copy"><p className="label-mono">The Performance &<br />Social Growth Agency</p><p className="font-serif text-3xl md:text-4xl">We Create. We Perform. We Grow.</p></div>
      <div className="hero-wordmark"><h1>FIGO MEDIA<span className="text-primary">®</span></h1></div>
      <div className="hero-bottom"><Button asChild variant="link" className="h-auto p-0 text-foreground"><Link to="/work">Explore the films <ArrowUpRight /></Link></Button><span className="label-mono hidden sm:block">Performance Marketing · Social Media · Creative Strategy</span><Button variant="ghost" size="icon" onClick={() => setPaused(!paused)} aria-label={paused ? "Play opening film" : "Pause opening film"} title={paused ? "Play opening film" : "Pause opening film"}>{paused ? <Play /> : <Pause />}</Button></div>
    </section>
    <section className="section-wrap py-16 md:py-24">
      <div className="mb-12 flex justify-between"><SectionLabel n="01">Selected films</SectionLabel><ArrowDown className="size-5 text-primary" /></div>
      <RecentWork films={["hunterhood", "m2", "kitchen"].map((id) => reels.find((film) => film.id === id)!)} />
      <div className="mt-12 flex justify-end"><Button asChild variant="link" className="px-0"><Link to="/work">The complete collection ({reels.length}) <ArrowUpRight /></Link></Button></div>
      <div className="category-directory mt-16">{filmGroups.map((group, i) => <Link key={group.category} to="/work" search={{ category: group.category }} className="category-directory-link group"><span className="label-mono text-primary">({String(i + 1).padStart(2, "0")})</span><h3 className="font-display text-2xl font-bold">{group.category}</h3><span className="label-mono text-muted-foreground">{String(filmsInCategory(group.category).length).padStart(2, "0")}</span><ArrowUpRight className="size-5 text-primary" /></Link>)}</div>
    </section>
    <section className="section-wrap border-t py-20 md:py-32"><SectionLabel n="02">Figo Media</SectionLabel><div className="mt-12"><ScrollStatement text={agencyStatement} /></div><div className="mt-12 grid gap-8 md:grid-cols-[1fr_1fr]"><p className="label-mono text-primary">We Create.<br />We Perform.<br />We Grow.</p><p className="max-w-lg text-lg text-muted-foreground">Every campaign starts with an idea worth watching. Branding, film, photography and social content built in-house. Tested, measured and optimized for growth.</p></div></section>
    <div className="type-marquee border-y" aria-hidden="true"><div>CREATE. <span>PERFORM.</span> GROW. CREATE. <span>PERFORM.</span> GROW.&nbsp;</div></div>
    <section className="section-wrap py-20 md:py-28"><SectionLabel n="03">What we do</SectionLabel><div className="mt-12">{services.map((service, i) => <Reveal key={service.n}><Link to="/services" className="service-row group"><span className="label-mono text-primary">{service.n}</span><h3 className="font-display text-3xl font-bold md:text-5xl">{service.title}</h3><img src={work[i % work.length]?.img} alt={service.title} loading="lazy" className="service-image" /><ArrowUpRight className="size-6 text-primary transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" /></Link></Reveal>)}</div></section>
    <section className="section-wrap border-t py-16 md:py-24"><div className="flex flex-wrap items-end justify-between gap-6"><div><SectionLabel n="04">The rest of the story</SectionLabel><h2 className="font-display mt-6 text-4xl font-bold md:text-6xl">Beyond the <span className="font-serif text-primary">frame.</span></h2></div><Button asChild variant="link"><Link to="/work">Photography & brand work <ArrowUpRight /></Link></Button></div><div className="mt-12 grid gap-6 md:grid-cols-3">{work.filter((w) => ["Product Photography", "Model Photography", "Branding & Identity"].includes(w.title)).map((w) => <Link to="/work" key={w.title}><img src={w.img} alt={w.title} loading="lazy" className="aspect-[4/3] w-full object-cover" /><h3 className="font-display mt-4 text-xl font-bold">{w.title}</h3></Link>)}</div></section>
  </PageShell>;
}
