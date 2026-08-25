import { useEffect, useState } from "react";
import { Compass, Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const links = [
  { href: "#home", label: "หน้าแรก" },
  { href: "#about", label: "เกี่ยวกับ" },
  { href: "#interests", label: "ความสนใจ" },
  { href: "#gallery", label: "ผลงาน" },
  { href: "#writing", label: "งานเขียน" },
  { href: "#contact", label: "ติดต่อ" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled ? "card-glass shadow-lg" : "bg-transparent",
      )}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
        <a href="#home" className="flex items-center gap-2">
          <Compass className="spin-slow size-7 text-gold-400" strokeWidth={1.6} />
          <span className="font-display text-lg font-extrabold tracking-tight">
            วิว<span className="text-gold-gradient">.</span>
          </span>
        </a>

        <ul className="hidden items-center gap-7 md:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="font-label text-sm font-medium text-muted-foreground transition-colors hover:text-gold-300"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <button
          type="button"
          aria-label={open ? "ปิดเมนู" : "เปิดเมนู"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="rounded-lg border border-border p-2 md:hidden"
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </nav>

      {open && (
        <ul className="card-glass mx-4 mb-4 grid gap-1 rounded-2xl p-3 md:hidden">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                onClick={() => setOpen(false)}
                className="block rounded-xl px-4 py-3 font-label text-sm text-foreground/90 transition-colors hover:bg-secondary"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}
