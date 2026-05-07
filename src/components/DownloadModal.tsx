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
                <h3 className="font-display text-3xl md:text-4xl font-bold">Coming Soon</h3>
                <p className="mt-2 text-muted-foreground">
                  Tyn Tutor downloads are currently in development. Check back soon for native apps.
                </p>
                <div className="mt-8">
                  <Button variant="outline" size="lg" className="w-full max-w-xs" disabled>
                    Coming Soon
                  </Button>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default DownloadModal;
