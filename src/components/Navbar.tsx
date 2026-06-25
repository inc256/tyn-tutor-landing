// Navbar.tsx (with Policies dropdown)
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
    `px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200 ${
      isActive ? "bg-blue-50 text-blue-700" : "text-gray-700 hover:text-gray-900 hover:bg-gray-50"
    }`;

  return (
    <header
      className={`fixed top-0 inset-x-0 z-40 transition-all duration-300 ${
        scrolled
          ? "bg-white border-b border-gray-200 shadow-sm"
          : "bg-white"
      }`}
    >
      <nav className="container flex items-center justify-between h-16 md:h-20">
        <NavLink to="/" className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl overflow-hidden shadow-md ring-2 ring-blue-100/50">
            <img src={logo} alt="Xplainfy" className="w-full h-full object-cover" />
          </div>
          <div>
            <div className="font-display text-lg font-bold tracking-tight text-gray-900">Xplainfy</div>
            <div className="text-[11px] uppercase tracking-[0.3em] text-gray-500">Anything Explained</div>
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
          {/* Policies Dropdown */}
          <li className="relative">
            <button
              onClick={() => setPoliciesOpen(!policiesOpen)}
              className="px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200 text-gray-700 hover:text-gray-900 hover:bg-gray-50 inline-flex items-center gap-1"
            >
              Policies
              <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${policiesOpen ? 'rotate-180' : ''}`} />
            </button>
            <AnimatePresence>
              {policiesOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                  className="absolute top-full left-0 mt-2 w-56 bg-white border border-gray-200 rounded-xl shadow-lg py-2"
                >
                  {policyLinks.map((policy) => (
                    <NavLink
                      key={policy.href}
                      to={policy.href}
                      onClick={() => setPoliciesOpen(false)}
                      className={({ isActive }) =>
                        `block px-4 py-2 text-sm transition-colors ${
                          isActive ? "bg-blue-50 text-blue-700" : "text-gray-700 hover:bg-gray-50 hover:text-gray-900"
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

        <div className="hidden md:flex items-center gap-3">
          <Button 
            size="sm" 
            asChild 
            className="bg-blue-600 hover:bg-blue-700 text-white shadow-md hover:shadow-lg transition-all duration-200"
          >
            <a href="https://app.xplainfy.net" target="_blank" rel="noopener noreferrer">
              Start Exploring
            </a>
          </Button>
        </div>

        <button
          className="md:hidden p-2 rounded-xl border border-gray-200 bg-white text-gray-700 shadow-sm"
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
            className="md:hidden overflow-hidden bg-white border-t border-gray-200"
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
              <div className="border-t border-gray-200 pt-3">
                <p className="text-xs font-semibold uppercase tracking-wider text-gray-500 px-4 mb-2">Policies</p>
                {policyLinks.map((policy) => (
                  <NavLink
                    key={policy.href}
                    to={policy.href}
                    onClick={() => setOpen(false)}
                    className={({ isActive }) =>
                      `block px-4 py-2 text-sm transition-colors ${
                        isActive ? "bg-blue-50 text-blue-700" : "text-gray-700 hover:bg-gray-50 hover:text-gray-900"
                      }`
                    }
                  >
                    {policy.label}
                  </NavLink>
                ))}
              </div>
              <a
                href="https://app.xplainfy.net"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-xl bg-blue-600 px-4 py-3 text-sm font-semibold text-white shadow-md hover:bg-blue-700 transition"
              >
                Start Exploring
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;