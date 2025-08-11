import { FormEvent, useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { toast } from "@/hooks/use-toast";
import { Link } from "react-router-dom";

export default function Footer() {
  const [loading, setLoading] = useState(false);

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      toast({
        title: "Thanks for reaching out!",
        description: "We’ll get back to you within 1–2 business days.",
      });
    }, 600);
  };

  return (
    <footer className="border-t mt-16">
      <div className="container py-12 grid gap-10 md:grid-cols-2 lg:grid-cols-3">
        <div>
          <h3 className="font-heading text-xl mb-3">GreenAge</h3>
          <p className="text-sm text-foreground/70 max-w-prose">
            Sustainable polymer solutions. LLDPE rotomoulding powders engineered for performance and consistency across applications.
          </p>
          <div className="flex items-center gap-4 mt-4">
            <a className="story-link" href="#" aria-label="LinkedIn">LinkedIn</a>
            <a className="story-link" href="#" aria-label="Twitter">Twitter</a>
            <a className="story-link" href="#" aria-label="YouTube">YouTube</a>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-6">
          <div className="space-y-2">
            <h4 className="font-medium">Company</h4>
            <ul className="text-sm space-y-1">
              <li><Link to="/about" className="hover:text-primary">About</Link></li>
              <li><Link to="/what-we-do" className="hover:text-primary">What We Do</Link></li>
              <li><Link to="/news" className="hover:text-primary">News</Link></li>
              <li><Link to="/gallery" className="hover:text-primary">Gallery</Link></li>
            </ul>
          </div>
          <div className="space-y-2">
            <h4 className="font-medium">Support</h4>
            <ul className="text-sm space-y-1">
              <li><Link to="/products" className="hover:text-primary">Products</Link></li>
              <li><Link to="/faq" className="hover:text-primary">FAQs</Link></li>
              <li><Link to="/contact" className="hover:text-primary">Contact</Link></li>
            </ul>
          </div>
        </div>

        <div>
          <h4 className="font-medium mb-3">Contact us</h4>
          <form onSubmit={onSubmit} className="space-y-3">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <Input name="name" placeholder="Your name" required />
              <Input name="email" type="email" placeholder="Email address" required />
            </div>
            <Textarea name="message" placeholder="Your message" rows={4} required />
            <Button type="submit" variant="hero" disabled={loading}>
              {loading ? "Sending..." : "Send message"}
            </Button>
          </form>
        </div>
      </div>
      <div className="border-t">
        <div className="container py-4 text-xs text-foreground/60 flex flex-col sm:flex-row items-center justify-between gap-2">
          <span>© {new Date().getFullYear()} GreenAge Industrial</span>
          <span>Built with care • Eco-conscious by design</span>
        </div>
      </div>
    </footer>
  );
}
