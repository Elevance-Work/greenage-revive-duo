import SEO from "@/components/SEO";
import RevealOnScroll from "@/components/RevealOnScroll";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Quote } from "lucide-react";
import { Link } from "react-router-dom";
export default function HomeA() {
  return <>
      <SEO title="GreenAge – Sustainable Rotomoulding Polymers" description="LLDPE rotomoulding powders engineered for performance, consistency, and sustainability. Explore Butene, Hexene and Ripple grades." canonical="/" />
      <main>
        <section className="relative min-h-[70vh] w-screen -mx-[50vw] left-1/2 overflow-hidden">
          <div className="absolute inset-0 z-0 pointer-events-none">
            <iframe 
              src="https://www.youtube.com/embed/Xp3nr5F1w-c?autoplay=1&mute=1&controls=0&loop=1&playlist=Xp3nr5F1w-c&modestbranding=1&playsinline=1&rel=0&showinfo=0&iv_load_policy=3&disablekb=1&fs=0&cc_load_policy=0&hl=en&color=white&theme=light" 
              title="GreenAge hero background video" 
              allow="autoplay; encrypted-media" 
              referrerPolicy="strict-origin-when-cross-origin" 
              loading="lazy" 
              className="w-full h-full scale-150 origin-center"
              style={{ 
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%) scale(1.5)',
                minWidth: '177.78vh',
                minHeight: '100vh',
                width: '177.78vh',
                height: '100vh'
              }}
            />
          </div>
        </section>

        <RevealOnScroll className="container py-16">
          <div className="grid md:grid-cols-3 gap-6">
            {[{
            title: "Quality you can count on",
            desc: "Tight process controls and batch-to-batch consistency keep your production on schedule."
          }, {
            title: "Applications across industries",
            desc: "Grades optimized for tanks, bins, furniture, automotive and more."
          }, {
            title: "Built for sustainability",
            desc: "Formulations that balance durability, recyclability and resource efficiency."
          }].map(c => <div key={c.title} className="rounded-lg border bg-card p-6 hover-scale">
                <h3 className="font-medium text-lg">{c.title}</h3>
                <p className="mt-2 text-sm text-foreground/70">{c.desc}</p>
              </div>)}
          </div>
        </RevealOnScroll>

        <RevealOnScroll className="bg-muted/40">
          <div className="container py-16">
            <div className="flex items-end justify-between gap-4 mb-6">
              <h2 className="font-heading text-3xl">Products</h2>
              <Link to="/products" className="story-link text-sm">View all</Link>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {[{
              name: "Butene",
              to: "/products#butene",
              blurb: "Versatile performance for water tanks and containers."
            }, {
              name: "Hexene",
              to: "/products#hexene",
              blurb: "Higher stiffness and crack resistance for demanding parts."
            }, {
              name: "Ripple",
              to: "/products#ripple",
              blurb: "Furniture-grade finish and long-term weatherability."
            }].map(p => <Link key={p.name} to={p.to} className="rounded-lg border bg-card p-6 hover-scale">
                  <h3 className="font-medium text-lg">{p.name}</h3>
                  <p className="mt-2 text-sm text-foreground/70">{p.blurb}</p>
                </Link>)}
            </div>
          </div>
        </RevealOnScroll>

        <RevealOnScroll>
          <section className="py-16 bg-primary/5">
            <div className="container space-y-6">
              <div className="grid md:grid-cols-12 gap-6 rounded-lg border bg-card p-6 hover-scale justify-items-start text-left">
                <div className="md:col-span-7 self-center">
                  <h2 className="font-heading text-2xl">View Our First Industry Magazine</h2>
                  <p className="mt-2 text-foreground/70">Expanding Horizons out now.</p>
                  <div className="mt-4 flex flex-wrap gap-3">
                    <Button asChild size="lg" variant="hero">
                      <Link to="/news">View magazine</Link>
                    </Button>
                    <Button asChild size="lg" variant="outline">
                      <Link to="/products">View brochure</Link>
                    </Button>
                  </div>
                </div>
                <div className="md:col-span-5">
                  <img
                    src="https://images.unsplash.com/photo-1491841651911-c44c30c34548?q=80&w=1200&auto=format&fit=crop"
                    alt="Industry magazine cover with vivid colors"
                    loading="lazy"
                    className="w-full rounded-md border object-cover"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-12 gap-6 rounded-lg border bg-card p-6 hover-scale">
                <div className="md:col-span-5 order-last md:order-first">
                  <img
                    src="https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?q=80&w=1200&auto=format&fit=crop"
                    alt="Product brochures in a clean layout"
                    loading="lazy"
                    className="w-full rounded-md border object-cover"
                  />
                </div>
                <div className="md:col-span-7 self-center">
                  <h2 className="font-heading text-2xl">View our NEW Product Brochure</h2>
                  <p className="mt-2 text-foreground/70">Our new product brochure is available to view now!</p>
                  <div className="mt-4">
                    <Button asChild size="lg" variant="outline">
                      <Link to="/products">View brochure</Link>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </RevealOnScroll>

        <RevealOnScroll>
          <div className="container py-16">
            <div className="grid md:grid-cols-4 gap-6">
              {["Water storage", "Waste management", "Furniture", "Automotive", "Agriculture", "Material handling", "Construction", "Custom applications"].map(i => <div key={i} className="rounded-lg border bg-card p-5 text-center text-sm text-foreground/80">
                  {i}
                </div>)}
            </div>
          </div>
        </RevealOnScroll>

        <RevealOnScroll>
          <section aria-label="Testimonials" className="py-16 bg-muted/40">
            <div className="container">
              <h2 className="font-heading text-3xl mb-8">What our customers say</h2>
              <div className="grid md:grid-cols-3 gap-6">
                {[
                  {
                    quote: "We rely on GreenAge for consistent quality. Their support team is fast and helpful.",
                    name: "Anika Sharma",
                    role: "Plant Manager, AquaWorks",
                    img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=400&auto=format&fit=crop"
                  },
                  {
                    quote: "Great mechanical performance and UV stability—perfect for outdoor parts.",
                    name: "Karthik Rao", 
                    role: "Procurement Lead, Rototech",
                    img: "https://images.unsplash.com/photo-1502685104226-ee32379fefbe?q=80&w=400&auto=format&fit=crop"
                  },
                  {
                    quote: "Ripple finish elevated our furniture line. Customers love the look and feel.",
                    name: "Priya Nair",
                    role: "Design Manager, SitWell", 
                    img: "https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&w=400&auto=format&fit=crop"
                  }
                ].map(t => (
                  <Card key={t.name} className="hover-scale">
                    <CardContent className="p-6">
                      <Quote className="text-primary mb-4" size={24} />
                      <p className="text-foreground/80 mb-4">{t.quote}</p>
                      <div className="flex items-center gap-3">
                        <Avatar className="h-12 w-12">
                          <AvatarImage src={t.img} alt={`${t.name} portrait`} loading="lazy" />
                          <AvatarFallback>{t.name[0]}</AvatarFallback>
                        </Avatar>
                        <div>
                          <div className="font-medium">{t.name}</div>
                          <div className="text-sm text-foreground/60">{t.role}</div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>
        </RevealOnScroll>
      </main>
    </>;
}