import SEO from "@/components/SEO";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useState, FormEvent } from "react";
import { toast } from "@/hooks/use-toast";

export default function Contact() {
  const [loading, setLoading] = useState(false);

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      toast({ title: "Message sent", description: "We’ll be in touch shortly." });
    }, 600);
  };

  return (
    <main className="container py-12">
      <SEO title="Contact" description="Get in touch with the GreenAge team for quotes, samples or technical support." canonical="/contact" />
      <h1 className="font-heading text-3xl mb-4">Contact</h1>
      <form onSubmit={onSubmit} className="max-w-xl space-y-3">
        <Input placeholder="Name" required />
        <Input type="email" placeholder="Email" required />
        <Input placeholder="Company" />
        <Textarea placeholder="How can we help?" rows={5} required />
        <Button type="submit" variant="hero" disabled={loading}>
          {loading ? "Sending..." : "Send"}
        </Button>
      </form>
    </main>
  );
}
