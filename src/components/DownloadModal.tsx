import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ArrowRight } from "lucide-react";
import { platforms } from "@/data/platforms";
import { Button } from "@/components/ui/button";

interface DownloadModalProps {
  open: boolean;
  onClose: () => void;
}

const DownloadModal = ({ open, onClose }: DownloadModalProps) => {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    if (open) document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  useEffect(() => {
    if (open) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-50 grid place-items-center p-4 bg-foreground/40 backdrop-blur-md"
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 10 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-2xl bg-background shadow-elevated border border-border/60"
          >
            <button
              onClick={onClose}
              aria-label="Close"
              className="absolute top-4 right-4 z-10 grid place-items-center w-9 h-9 rounded-full bg-muted hover:bg-secondary transition-colors"
            >
              <X className="w-4 h-4" />
            </button>

            <div className="p-6 md:p-10">
              <div className="text-center max-w-lg mx-auto">
                <h3 className="font-display text-3xl md:text-4xl font-bold">Get Tyn Tutor</h3>
                <p className="mt-2 text-muted-foreground">
                  Choose your platform. We recommend the Web app to start instantly.
                </p>
              </div>

              <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {platforms.map((p) => {
                  const Icon = p.icon;
                  const isPrimary = p.recommended;
                  return (
                    <div
                      key={p.id}
                      className={`relative rounded-2xl p-5 flex flex-col transition-all ${
                        isPrimary
                          ? "bg-gradient-primary text-primary-foreground shadow-glow"
                          : "bg-card border border-border/70 hover:shadow-soft hover:-translate-y-0.5"
                      }`}
                    >
                      {p.badge && (
                        <span className="absolute top-3 right-3 inline-flex items-center px-2 py-0.5 rounded-full bg-white/20 text-[10px] font-semibold uppercase tracking-wider">
                          {p.badge}
                        </span>
                      )}
                      <div className={`grid place-items-center w-10 h-10 rounded-xl mb-4 ${
                        isPrimary ? "bg-white/15" : "bg-accent text-primary"
                      }`}>
                        <Icon className="w-5 h-5" />
                      </div>
                      <div className="font-display font-semibold text-lg">{p.name}</div>
                      <p className={`text-sm mt-1 flex-1 ${
                        isPrimary ? "text-primary-foreground/85" : "text-muted-foreground"
                      }`}>
                        {p.description}
                      </p>
                      <Button
                        size="sm"
                        variant={isPrimary ? "secondary" : "default"}
                        className={`mt-4 ${isPrimary ? "bg-white text-primary hover:bg-white/90" : ""}`}
                        asChild
                      >
                        <a href={p.href}>
                          {p.cta}
                          <ArrowRight className="w-3.5 h-3.5" />
                        </a>
                      </Button>
                    </div>
                  );
                })}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default DownloadModal;
