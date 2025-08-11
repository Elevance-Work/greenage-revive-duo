import SEO from "@/components/SEO";

export default function About() {
  return (
    <main className="container py-12">
      <SEO title="About GreenAge" description="Our mission is to deliver reliable, sustainable polymer solutions for modern industries." canonical="/about" />
      <h1 className="font-heading text-3xl mb-4">About GreenAge</h1>
      <p className="text-foreground/80 max-w-prose">
        GreenAge is focused on engineering dependable LLDPE rotomoulding powders. Our teams combine materials science with responsible manufacturing to support customers across water storage, furniture, automotive, agriculture and more.
      </p>
    </main>
  );
}
