import SEO from "@/components/SEO";

export default function About() {
  return (
    <main className="container py-12">
      <SEO title="About GreenAge" description="Engineering reliable, sustainable rotomoulding polymers backed by decades of plastics expertise." canonical="/about" />
      <h1 className="font-heading text-3xl mb-6">About GreenAge</h1>
      <div className="grid md:grid-cols-2 gap-8 items-center">
        <div>
          <p className="text-foreground/80 max-w-prose">
            Founded in 2012 as part of the 30-year Umiya Group, GreenAge Industries develops and manufactures high‑performance rotomoulding powders and compounds. We combine materials science, quality control, and responsible manufacturing to help customers deliver durable parts across water storage, furniture, automotive, agriculture, and more.
          </p>
          <ul className="mt-5 space-y-2 text-sm text-foreground/80 list-disc pl-5 max-w-prose">
            <li>Rotomoulding powder and compound specialization</li>
            <li>UV and antioxidant stabilized formulations for long service life</li>
            <li>Custom colors, powder sizes, and internal release options</li>
            <li>Trusted by industry leaders across India and abroad</li>
          </ul>
        </div>
        <img
          src="https://www.greenageind.com/images/infrastructure/IMG_7756_MASTER.jpg"
          alt="GreenAge manufacturing infrastructure"
          loading="lazy"
          className="w-full rounded-lg border bg-muted object-cover"
        />
      </div>
    </main>
  );
}
