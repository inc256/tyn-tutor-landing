import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/ui/theme-toggle";

const links = [
  { label: "Home", href: "/" },
  { label: "Product", href: "/product" },
  { label: "Pricing", href: "/pricing" },
  { label: "Downloads", href: "/downloads" },
  { label: "Contact", href: "/contact" },
];

interface NavbarProps {
  onDownloadClick: () => void;
}

const Navbar = ({ onDownloadClick }: NavbarProps) => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-40 transition-all duration-300 ${
        scrolled
          ? "bg-background/80 backdrop-blur-lg border-b border-border/60 shadow-soft"
          : "bg-transparent"
      }`}
    >
      <nav className="container flex items-center justify-between h-16 md:h-20">
        <Link to="/" className="flex items-center gap-2">
          <span className="grid place-items-center w-9 h-9 rounded-xl bg-gradient-primary text-primary-foreground shadow-glow">
            <Sparkles className="w-5 h-5" />
          </span>
          <span className="font-display font-bold text-lg tracking-tight">Tyn Tutor</span>
        </Link>

        <ul className="hidden md:flex items-center gap-1">
          {links.map((l) => (
            <li key={l.href}>
              <Link
                to={l.href}
                className="px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground rounded-lg transition-colors"
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="hidden md:flex items-center gap-2">
          <ThemeToggle />
          <Button variant="hero" size="lg" onClick={onDownloadClick}>
            Download
          </Button>
        </div>

        <button
          className="md:hidden p-2 rounded-lg hover:bg-muted"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden overflow-hidden bg-background/95 backdrop-blur border-t border-border"
          >
            <div className="container py-4 flex flex-col gap-1">
              {links.map((l) => (
                <Link
                  key={l.href}
                  to={l.href}
                  onClick={() => setOpen(false)}
                  className="px-3 py-3 rounded-lg text-sm font-medium hover:bg-muted"
                >
                  {l.label}
                </Link>
              ))}
              <div className="mt-2 flex items-center gap-2">
                <ThemeToggle />
                <Button variant="hero" size="lg" onClick={() => { setOpen(false); onDownloadClick(); }}>
                  Download
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
