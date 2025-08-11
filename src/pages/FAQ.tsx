import SEO from "@/components/SEO";

export default function FAQ() {
  return (
    <main className="container py-12">
      <SEO title="FAQs" description="Answers to common questions about our materials and services." canonical="/faq" />
      <h1 className="font-heading text-3xl mb-4">Frequently Asked Questions</h1>
      <div className="space-y-4">
        <div>
          <h2 className="font-medium">Do you provide technical datasheets?</h2>
          <p className="text-sm text-foreground/80">Yes. Contact us and we’ll share the appropriate TDS for your application.</p>
        </div>
        <div>
          <h2 className="font-medium">Can you help with grade selection?</h2>
          <p className="text-sm text-foreground/80">Our team can recommend grades based on performance needs and process parameters.</p>
        </div>
      </div>
    </main>
  );
}
