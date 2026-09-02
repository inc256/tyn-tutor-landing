import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from '@/images/logo.png';

const links = [
  { label: "Home", href: "/" },
  { label: "Product", href: "/product" },
  { label: "Pricing", href: "/pricing" },
  { label: "Contact", href: "/contact" },
];

const policyLinks = [
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Terms of Service", href: "/terms" },
  { label: "Refund Policy", href: "/refund" },
];

interface NavbarProps {
  onDownloadClick?: () => void;
}

const Navbar = ({ onDownloadClick }: NavbarProps) => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [policiesOpen, setPoliciesOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const linkClass = ({ isActive }: { isActive: boolean }) =>
    `px-3 py-2 text-sm font-medium rounded-md transition-colors ${
      isActive ? "bg-slate-100 text-slate-900" : "text-slate-600 hover:text-slate-900 hover:bg-slate-50"
    }`;

  return (
    <header className={`fixed inset-x-0 top-0 z-40 border-b border-slate-200/80 backdrop-blur-sm transition-all ${scrolled ? "bg-white/90 shadow-sm" : "bg-white/90"}`}>
      <nav className="container flex h-16 items-center justify-between md:h-20">
        <NavLink to="/" className="flex items-center gap-3">
          <div className="h-9 w-9 overflow-hidden rounded-lg border border-slate-200 bg-white shadow-sm">
            <img src={logo} alt="Xplainfy" className="h-full w-full object-cover" />
          </div>
          <div>
            <div className="text-base font-semibold tracking-[-0.04em] text-slate-900">Xplainfy</div>
            <div className="text-[10px] uppercase tracking-[0.22em] text-slate-500">Anything Explained</div>
          </div>
        </NavLink>

        <ul className="hidden items-center gap-1 md:flex">
          {links.map((link) => (
            <li key={link.href}>
              <NavLink to={link.href} className={linkClass}>
                {link.label}
              </NavLink>
            </li>
          ))}
          <li className="relative">
            <button
              onClick={() => setPoliciesOpen(!policiesOpen)}
              className="inline-flex items-center gap-1 rounded-md px-3 py-2 text-sm font-medium text-slate-600 transition-colors hover:bg-slate-50 hover:text-slate-900"
            >
              Policies
              <ChevronDown className={`h-4 w-4 transition-transform ${policiesOpen ? "rotate-180" : ""}`} />
            </button>
            <AnimatePresence>
              {policiesOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.18 }}
                  className="absolute left-0 top-full mt-2 w-56 rounded-xl border border-slate-200 bg-white p-2 shadow-soft"
                >
                  {policyLinks.map((policy) => (
                    <NavLink
                      key={policy.href}
                      to={policy.href}
                      onClick={() => setPoliciesOpen(false)}
                      className={({ isActive }) =>
                        `block rounded-md px-3 py-2 text-sm transition-colors ${
                          isActive ? "bg-slate-100 text-slate-900" : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
                        }`
                      }
                    >
                      {policy.label}
                    </NavLink>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </li>
        </ul>

        <div className="hidden items-center gap-3 md:flex">
          <Button
            size="sm"
            asChild
            className="bg-blue-600 text-white hover:bg-blue-700"
          >
            <a href="/downloads">
              Start exploring
            </a>
          </Button>
        </div>

        <button
          className="rounded-lg border border-slate-200 bg-white p-2 text-slate-700 md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="border-t border-slate-200 bg-white md:hidden"
          >
            <div className="container flex flex-col gap-2 py-4">
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
              <div className="border-t border-slate-200 pt-3">
                <p className="mb-2 px-3 text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-500">Policies</p>
                {policyLinks.map((policy) => (
                  <NavLink
                    key={policy.href}
                    to={policy.href}
                    onClick={() => setOpen(false)}
                    className={({ isActive }) =>
                      `block rounded-md px-3 py-2 text-sm transition-colors ${
                        isActive ? "bg-slate-100 text-slate-900" : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
                      }`
                    }
                  >
                    {policy.label}
                  </NavLink>
                ))}
              </div>
              <a
                href="/downloads"
                className="mt-2 inline-flex items-center justify-center rounded-lg bg-blue-600 px-4 py-3 text-sm font-semibold text-white hover:bg-blue-700"
              >
                Start exploring
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;