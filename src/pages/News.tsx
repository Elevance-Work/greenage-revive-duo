import SEO from "@/components/SEO";

export default function News() {
  return (
    <main className="container py-12">
      <SEO title="News" description="Updates from GreenAge and the rotomoulding industry." canonical="/news" />
      <h1 className="font-heading text-3xl mb-4">News</h1>
      <p className="text-foreground/80">No posts yet. Check back soon.</p>
    </main>
  );
}
