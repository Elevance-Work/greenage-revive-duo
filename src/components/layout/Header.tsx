import { Link, NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import placeholderLogo from "/public/placeholder.svg";

const navItems = [
  { to: "/", label: "Home" },
  { to: "/home-b", label: "Home B" },
  { to: "/about", label: "About" },
  { to: "/products", label: "Products" },
  { to: "/what-we-do", label: "What We Do" },
  { to: "/gallery", label: "Gallery" },
  { to: "/news", label: "News" },
  { to: "/faq", label: "FAQs" },
  { to: "/contact", label: "Contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 4);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 border-b transition-colors ${
        scrolled ? "bg-background/80 backdrop-blur" : "bg-background/60 backdrop-blur"
      }`}
    >
      <nav className="container flex items-center justify-between py-3">
        <Link to="/" className="flex items-center gap-3 focus:outline-none">
          <img src={placeholderLogo} alt="GreenAge logo" className="h-8 w-8" />
          <span className="font-heading text-xl tracking-tight">
            GreenAge
          </span>
        </Link>

        <div className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                `text-sm transition-colors hover:text-primary ${
                  isActive ? "text-primary" : "text-foreground/80"
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
          <Button variant="hero" size="sm" className="ml-2">
            Get in touch
          </Button>
        </div>

        <Button
          variant="outline"
          size="icon"
          className="md:hidden"
          aria-label="Toggle menu"
          onClick={() => setOpen((o) => !o)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            className="h-5 w-5"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </Button>
      </nav>

      {open && (
        <div className="md:hidden border-t">
          <div className="container py-2 flex flex-col gap-1">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `py-2 text-sm ${isActive ? "text-primary" : "text-foreground/80"}`
                }
              >
                {item.label}
              </NavLink>
            ))}
            <Button asChild variant="hero" className="mt-2">
              <Link to="/contact" onClick={() => setOpen(false)}>Contact us</Link>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
