import SEO from "@/components/SEO";
import RevealOnScroll from "@/components/RevealOnScroll";
import { Button } from "@/components/ui/button";

import { Link } from "react-router-dom";

export default function HomeA() {
  return (
    <>
      <SEO
        title="GreenAge – Sustainable Rotomoulding Polymers"
        description="LLDPE rotomoulding powders engineered for performance, consistency, and sustainability. Explore Butene, Hexene and Ripple grades."
        canonical="/"
      />
      <main>
        <section className="relative min-h-[70vh] grid place-items-center overflow-hidden">
          <div className="absolute inset-0 z-0 pointer-events-none">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[177.78vh] h-[100vh] min-w-full min-h-full">
              <iframe
                src="https://www.youtube.com/embed/Xp3nr5F1w-c?autoplay=1&mute=1&controls=0&loop=1&playlist=Xp3nr5F1w-c&modestbranding=1&playsinline=1&rel=0"
                title="GreenAge hero background video"
                allow="autoplay; encrypted-media; picture-in-picture"
                referrerPolicy="strict-origin-when-cross-origin"
                loading="lazy"
                className="w-full h-full"
              />
            </div>
          </div>
          <div className="absolute inset-0 z-[1] bg-gradient-to-r from-background/80 to-background/40" />
          <div className="container relative z-[2] grid md:grid-cols-2 items-center gap-8 py-20">
            <div className="animate-enter">
              <p className="text-sm uppercase tracking-widest text-foreground/70 mb-2">Sustainable polymer solutions</p>
              <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl leading-tight">
                Reliable LLDPE rotomoulding powders for modern manufacturing
              </h1>
              <p className="mt-4 text-foreground/80 max-w-prose">
                From water storage to furniture, our materials deliver strength, UV stability and consistent performance — with a lower environmental footprint.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <Button asChild variant="hero" size="lg" className="hover-scale">
                  <Link to="/products">Explore Products</Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link to="/contact">Request a quote</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        <RevealOnScroll className="container py-16">
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: "Quality you can count on",
                desc: "Tight process controls and batch-to-batch consistency keep your production on schedule.",
              },
              {
                title: "Applications across industries",
                desc: "Grades optimized for tanks, bins, furniture, automotive and more.",
              },
              {
                title: "Built for sustainability",
                desc: "Formulations that balance durability, recyclability and resource efficiency.",
              },
            ].map((c) => (
              <div key={c.title} className="rounded-lg border bg-card p-6 hover-scale">
                <h3 className="font-medium text-lg">{c.title}</h3>
                <p className="mt-2 text-sm text-foreground/70">{c.desc}</p>
              </div>
            ))}
          </div>
        </RevealOnScroll>

        <RevealOnScroll className="bg-muted/40">
          <div className="container py-16">
            <div className="flex items-end justify-between gap-4 mb-6">
              <h2 className="font-heading text-3xl">Products</h2>
              <Link to="/products" className="story-link text-sm">View all</Link>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { name: "Butene", to: "/products#butene", blurb: "Versatile performance for water tanks and containers." },
                { name: "Hexene", to: "/products#hexene", blurb: "Higher stiffness and crack resistance for demanding parts." },
                { name: "Ripple", to: "/products#ripple", blurb: "Furniture-grade finish and long-term weatherability." },
              ].map((p) => (
                <Link key={p.name} to={p.to} className="rounded-lg border bg-card p-6 hover-scale">
                  <h3 className="font-medium text-lg">{p.name}</h3>
                  <p className="mt-2 text-sm text-foreground/70">{p.blurb}</p>
                </Link>
              ))}
            </div>
          </div>
        </RevealOnScroll>

        <RevealOnScroll>
          <div className="container py-16">
            <div className="grid md:grid-cols-4 gap-6">
              {[
                "Water storage",
                "Waste management",
                "Furniture",
                "Automotive",
                "Agriculture",
                "Material handling",
                "Construction",
                "Custom applications",
              ].map((i) => (
                <div key={i} className="rounded-lg border bg-card p-5 text-center text-sm text-foreground/80">
                  {i}
                </div>
              ))}
            </div>
          </div>
        </RevealOnScroll>
      </main>
    </>
  );
}
