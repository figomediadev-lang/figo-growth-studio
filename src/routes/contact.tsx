import { createFileRoute } from "@tanstack/react-router";
import { PageShell, SectionLabel } from "@/components/site";
import { PHONE, PHONE_HREF, WHATSAPP } from "@/lib/content";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Figo Media" },
      { name: "description", content: "Book a consultation with Figo Media in Dubai. Get a tailored growth deck within 48 hours." },
      { property: "og:title", content: "Contact — Figo Media" },
      { property: "og:description", content: "Tell us about your brand — we reply with a tailored deck in 48 hours." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <PageShell>
      <section className="mx-auto max-w-7xl px-5 pt-36 pb-10 md:px-8">
        <SectionLabel n="C">Contact</SectionLabel>
        <h1 className="font-display mt-6 text-6xl font-black leading-[0.9] md:text-9xl">Let's build your <span className="font-serif text-primary">growth.</span></h1>
        <div className="mt-16 grid gap-6 md:grid-cols-2">
          <a href={WHATSAPP} target="_blank" rel="noreferrer" className="group rounded-2xl border bg-card p-10 transition hover:shadow-glow">
            <p className="label-mono text-primary">WhatsApp</p>
            <p className="font-display mt-4 text-3xl font-bold">Book a consultation →</p>
          </a>
          <a href={PHONE_HREF} className="rounded-2xl border bg-card p-10 transition hover:shadow-glow">
            <p className="label-mono text-primary">Call</p>
            <p className="font-display mt-4 text-3xl font-bold">{PHONE}</p>
          </a>
        </div>
        <p className="label-mono mt-10 text-muted-foreground">Based in Dubai, UAE · Working with brands across the GCC</p>
      </section>
    </PageShell>
  );
}
