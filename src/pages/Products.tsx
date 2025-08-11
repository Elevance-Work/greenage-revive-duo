import SEO from "@/components/SEO";

export default function Products() {
  return (
    <main className="container py-12">
      <SEO title="Products – LLDPE Rotomoulding Powders" description="Explore Butene, Hexene and Ripple grades tailored to diverse applications." canonical="/products" />
      <h1 className="font-heading text-3xl mb-4">Products</h1>
      <section id="butene" className="py-6 border-b">
        <h2 className="text-xl font-medium">Butene</h2>
        <p className="text-sm text-foreground/80 max-w-prose mt-2">Versatile performance and processability for water tanks and general containers.</p>
      </section>
      <section id="hexene" className="py-6 border-b">
        <h2 className="text-xl font-medium">Hexene</h2>
        <p className="text-sm text-foreground/80 max-w-prose mt-2">Higher stiffness and ESCR for demanding parts and heavy-duty applications.</p>
      </section>
      <section id="ripple" className="py-6">
        <h2 className="text-xl font-medium">Ripple</h2>
        <p className="text-sm text-foreground/80 max-w-prose mt-2">Furniture-grade finish, UV stability and long-term outdoor durability.</p>
      </section>
    </main>
  );
}
