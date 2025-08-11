import SEO from "@/components/SEO";
import RevealOnScroll from "@/components/RevealOnScroll";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import heroB from "@/assets/hero-b.jpg";
import { Link } from "react-router-dom";

export default function HomeB() {
  return (
    <>
      <SEO
        title="GreenAge – Advanced Eco-Industrial Materials"
        description="High-performance LLDPE powders for rotational moulding. Discover our portfolios engineered for durability and sustainability."
        canonical="/home-b"
      />
      <main>
        <section
          className="relative min-h-[70vh] grid"
          style={{ backgroundImage: `url(${heroB})`, backgroundSize: "cover", backgroundPosition: "center" }}
        >
          <div className="backdrop-blur-[2px] bg-background/40">
            <div className="container py-20 grid lg:grid-cols-12 gap-8">
              <div className="lg:col-span-7 self-center animate-enter">
                <h1 className="font-heading text-4xl sm:text-5xl leading-tight">
                  Materials for a cleaner manufacturing future
                </h1>
                <p className="mt-4 text-foreground/80 max-w-prose">
                  We blend science and sustainability to deliver dependable rotomoulding polymers across demanding applications.
                </p>
                <div className="mt-6 flex flex-wrap gap-3">
                  <Button asChild variant="hero" size="lg" className="hover-scale">
                    <Link to="/contact">Talk to an expert</Link>
                  </Button>
                  <Button asChild variant="outline" size="lg">
                    <Link to="/about">About GreenAge</Link>
                  </Button>
                </div>
              </div>
              <div className="lg:col-span-5">
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { k: "+15", l: "Years"
                    },
                    { k: "25+", l: "Countries" },
                    { k: "ISO", l: "Certified" },
                    { k: "24/7", l: "Support" },
                  ].map((s) => (
                    <div key={s.l} className="rounded-lg border bg-card p-6 text-center hover-scale">
                      <div className="text-3xl font-semibold">{s.k}</div>
                      <div className="text-xs mt-1 text-foreground/60">{s.l}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <RevealOnScroll>
          <div className="container py-16">
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { t: "Butene", d: "Balanced performance for tanks and containers.", to: "/products#butene" },
                { t: "Hexene", d: "Enhanced stiffness and crack resistance.", to: "/products#hexene" },
                { t: "Ripple", d: "Furniture-ready finish and UV stability.", to: "/products#ripple" },
              ].map((p) => (
                <Link key={p.t} to={p.to} className="rounded-lg border bg-card p-6 hover-scale">
                  <h3 className="font-medium text-lg">{p.t}</h3>
                  <p className="mt-2 text-sm text-foreground/70">{p.d}</p>
                </Link>
              ))}
            </div>
          </div>
        </RevealOnScroll>
        <RevealOnScroll>
          <section className="py-16 bg-muted/30">
            <div className="container">
              <div className="grid md:grid-cols-2 gap-6">
                <Card className="overflow-hidden hover-scale">
                  <CardHeader>
                    <CardTitle className="text-2xl">View our NEW Product Brochure</CardTitle>
                    <CardDescription>Our product brochure is available to view now.</CardDescription>
                  </CardHeader>
                  <CardContent className="grid md:grid-cols-2 gap-4 items-center">
                    <img
                      src="https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?q=80&w=1200&auto=format&fit=crop"
                      alt="Colorful brochure stack"
                      loading="lazy"
                      className="w-full rounded-md border object-cover"
                    />
                    <div className="space-y-3">
                      <Button asChild size="lg">
                        <Link to="/products">View brochure</Link>
                      </Button>
                      <p className="text-sm text-foreground/70">PDF and online catalogue.</p>
                    </div>
                  </CardContent>
                </Card>
                <Card className="overflow-hidden hover-scale">
                  <CardHeader>
                    <CardTitle className="text-2xl">View Our First Industry Magazine</CardTitle>
                    <CardDescription>Expanding Horizons out now.</CardDescription>
                  </CardHeader>
                  <CardContent className="grid md:grid-cols-2 gap-4 items-center">
                    <img
                      src="https://images.unsplash.com/photo-1513475382585-d06e58bcb0ea?q=80&w=1200&auto=format&fit=crop"
                      alt="Open magazine with colorful splash"
                      loading="lazy"
                      className="w-full rounded-md border object-cover"
                    />
                    <div className="space-y-3">
                      <Button asChild variant="outline" size="lg">
                        <Link to="/news">View magazine</Link>
                      </Button>
                      <p className="text-sm text-foreground/70">Latest insights in rotational moulding.</p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>
        </RevealOnScroll>

      </main>
    </>
  );
}
