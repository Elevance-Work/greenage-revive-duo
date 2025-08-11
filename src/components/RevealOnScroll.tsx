import { useEffect, useRef, useState, PropsWithChildren } from "react";

export default function RevealOnScroll({ children, className = "" }: PropsWithChildren<{ className?: string }>) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setVisible(true);
        });
      },
      { threshold: 0.12 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <div ref={ref} className={`${className} ${visible ? "animate-enter" : "opacity-0"}`}>
      {children}
    </div>
  );
}
