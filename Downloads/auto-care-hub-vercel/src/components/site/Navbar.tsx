import { useEffect, useState } from "react";
import { Menu, X, MessageCircle, Languages } from "lucide-react";
import { useI18n } from "@/lib/i18n";
import skLogo from "@/assets/sk-logo.png";

export function Navbar() {
  const { t, lang, toggle } = useI18n();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  const links = [
    { label: t("nav_home"), href: "#home" },
    { label: t("nav_services"), href: "#services" },
    { label: t("nav_about"), href: "#about" },
    { label: t("nav_reviews"), href: "#reviews" },
    { label: t("nav_contact"), href: "#contact" },
  ];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/80 backdrop-blur-lg border-b border-border/60"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-3">
        <a href="#home" className="flex items-center gap-2 group min-w-0">
          <img src={skLogo} alt="SK Motors logo" className="h-10 w-10 rounded-full object-cover shrink-0 ring-2 ring-primary/40" />
          <span className="text-base sm:text-lg font-display font-bold text-foreground truncate">SK MOTORS Service Madurai</span>
        </a>

        <nav className="hidden md:flex items-center gap-6 lg:gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="relative text-sm font-medium text-foreground/80 hover:text-primary transition-colors group"
            >
              {l.label}
              <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-primary transition-all group-hover:w-full" />
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <button
            onClick={toggle}
            aria-label="Toggle language"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-primary/40 text-primary text-xs font-bold hover:bg-primary hover:text-primary-foreground transition-all"
          >
            <Languages size={14} /> {lang === "en" ? "தமிழ்" : "EN"}
          </button>
          <a
            href="https://wa.me/917947121433"
            target="_blank"
            rel="noopener"
            className="hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary text-primary-foreground font-semibold text-sm hover:shadow-glow-sm transition-all hover:scale-[1.03]"
          >
            <MessageCircle size={16} /> {t("nav_whatsapp")}
          </a>
          <button
            className="md:hidden p-2 rounded-md text-foreground"
            onClick={() => setOpen(!open)}
            aria-label="Menu"
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      <div
        className={`md:hidden fixed inset-y-0 right-0 w-72 bg-surface border-l border-border transition-transform duration-300 ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="pt-20 px-6 flex flex-col gap-2">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="py-4 text-lg font-display font-semibold border-b border-border/50 hover:text-primary"
            >
              {l.label}
            </a>
          ))}
          <a
            href="https://wa.me/917947121433"
            className="mt-4 inline-flex items-center justify-center gap-2 px-4 py-3 rounded-full bg-primary text-primary-foreground font-semibold"
          >
            <MessageCircle size={18} /> {t("whatsapp_us")}
          </a>
        </div>
      </div>
    </header>
  );
}
