import SEO from "@/components/SEO";

export default function WhatWeDo() {
  return (
    <main className="container py-12">
      <SEO title="What We Do" description="From formulation to delivery, we ensure consistent quality and support at every step." canonical="/what-we-do" />
      <h1 className="font-heading text-3xl mb-4">What We Do</h1>
      <ul className="list-disc pl-6 space-y-2 text-foreground/80 max-w-prose">
        <li>Material formulation and compounding</li>
        <li>Quality control and batch traceability</li>
        <li>Application support and troubleshooting</li>
        <li>Timely logistics and on-time delivery</li>
      </ul>
    </main>
  );
}
