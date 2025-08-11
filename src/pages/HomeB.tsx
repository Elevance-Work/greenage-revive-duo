import SEO from "@/components/SEO";
import RevealOnScroll from "@/components/RevealOnScroll";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Quote } from "lucide-react";
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
        <RevealOnScroll>
          <section aria-label="Testimonials" className="py-16 bg-primary/5">
            <div className="container">
              <div className="flex items-center justify-between mb-6">
                <h2 className="font-heading text-3xl">What our customers say</h2>
              </div>
              <Carousel opts={{ align: "start" }}>
                <CarouselContent>
                  {[
                    {
                      quote:
                        "We rely on GreenAge for consistent quality. Their support team is fast and helpful.",
                      name: "Anika Sharma",
                      role: "Plant Manager, AquaWorks",
                      img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=400&auto=format&fit=crop",
                    },
                    {
                      quote:
                        "Great mechanical performance and UV stability—perfect for outdoor parts.",
                      name: "Karthik Rao",
                      role: "Procurement Lead, Rototech",
                      img: "https://images.unsplash.com/photo-1502685104226-ee32379fefbe?q=80&w=400&auto=format&fit=crop",
                    },
                    {
                      quote:
                        "Ripple finish elevated our furniture line. Customers love the look and feel.",
                      name: "Priya Nair",
                      role: "Design Manager, SitWell",
                      img: "https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&w=400&auto=format&fit=crop",
                    },
                    {
                      quote:
                        "Reliable supply and tight batch consistency keep our yields high.",
                      name: "Arun Verma",
                      role: "Operations, TankPro",
                      img: "https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&w=400&auto=format&fit=crop",
                    },
                  ].map((t) => (
                    <CarouselItem key={t.name} className="md:basis-1/2 lg:basis-1/3">
                      <Card className="h-full">
                        <CardContent className="p-6 flex flex-col justify-between h-full">
                          <div>
                            <Quote className="text-primary mb-3" size={20} />
                            <p className="text-foreground/80">{t.quote}</p>
                          </div>
                          <div className="mt-4 flex items-center gap-3">
                            <Avatar className="h-10 w-10">
                              <AvatarImage src={t.img} alt={`${t.name} portrait`} loading="lazy" />
                              <AvatarFallback>{t.name[0]}</AvatarFallback>
                            </Avatar>
                            <div>
                              <div className="text-sm font-medium">{t.name}</div>
                              <div className="text-xs text-foreground/60">{t.role}</div>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
              </Carousel>
            </div>
          </section>
        </RevealOnScroll>

       </main>
     </>
   );
 }
