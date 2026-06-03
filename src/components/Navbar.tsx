import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from '@/images/logo.png';

const links = [
  { label: "Home", href: "/" },
  { label: "Product", href: "/product" },
  { label: "Pricing", href: "/pricing" },
  { label: "Contact", href: "/contact" },
];

interface NavbarProps {
  onDownloadClick?: () => void;
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

  const linkClass = ({ isActive }: { isActive: boolean }) =>
    `px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200 ${
      isActive ? "bg-primary/10 text-primary" : "text-muted-foreground hover:text-foreground hover:bg-muted"
    }`;

  return (
    <header
      className={`fixed top-0 inset-x-0 z-40 transition-all duration-300 ${
        scrolled
          ? "bg-background/90 backdrop-blur-xl border-b border-border/60 shadow-soft"
          : "bg-transparent"
      }`}
    >
      <nav className="container flex items-center justify-between h-16 md:h-20">
        <NavLink to="/" className="flex items-center gap-3">
          <img src={logo} alt="Xplainfy" className="w-10 h-10 rounded-2xl shadow-glow" />
          <div>
            <div className="font-display text-lg font-bold tracking-tight">Xplainfy</div>
            <div className="text-[11px] uppercase tracking-[0.3em] text-muted-foreground">Anything Explained</div>
          </div>
        </NavLink>

        <ul className="hidden md:flex items-center gap-2">
          {links.map((link) => (
            <li key={link.href}>
              <NavLink to={link.href} className={linkClass}>
                {link.label}
              </NavLink>
            </li>
          ))}
        </ul>

        <div className="hidden md:flex items-center gap-3">
          <Button variant="outline" size="sm" asChild className="hidden sm:inline-flex">
            <a href="https://app.xplainfy.net" target="_blank" rel="noopener noreferrer">
              Launch App
            </a>
          </Button>
          {/* <Button variant="hero" size="sm" onClick={() => onDownloadClick?.()}>
            Try Xplainfy
          </Button> */}
        </div>

        <button
          className="md:hidden p-2 rounded-xl border border-border/60 bg-card/80 text-foreground shadow-sm"
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
            <div className="container py-4 flex flex-col gap-3">
              {links.map((link) => (
                <NavLink
                  key={link.href}
                  to={link.href}
                  onClick={() => setOpen(false)}
                  className={linkClass}
                >
                  {link.label}
                </NavLink>
              ))}
              <a
                href="https://app.xplainfy.net"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-xl border border-border/70 bg-card px-4 py-3 text-sm font-semibold text-foreground hover:bg-primary/5 transition"
              >
                Launch App
              </a>
              <button
                type="button"
                onClick={() => onDownloadClick?.()}
                className="inline-flex items-center justify-center rounded-xl bg-gradient-primary px-4 py-3 text-sm font-semibold text-primary-foreground shadow-glow hover:shadow-elevated transition"
              >
                Try Xplainfy
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
