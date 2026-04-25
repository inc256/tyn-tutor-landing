import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, Users } from "lucide-react";

interface HeroProps {
  onDownload: () => void;
}

const Hero = ({ onDownload }: HeroProps) => {
  return (
    <section id="home" className="relative pt-28 md:pt-36 pb-20 md:pb-28 overflow-hidden bg-gradient-hero">
      {/* Decorative blurred orbs */}
      <div className="pointer-events-none absolute -top-24 -left-24 w-96 h-96 rounded-full bg-primary/20 blur-3xl" />
      <div className="pointer-events-none absolute top-20 -right-32 w-[28rem] h-[28rem] rounded-full bg-primary-glow/20 blur-3xl" />

      <div className="container relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/20 bg-white/70 backdrop-blur text-xs font-medium text-primary shadow-sm">
            <Sparkles className="w-3.5 h-3.5" />
            Meet your AI study companion
          </span>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="mt-6 font-display text-5xl sm:text-6xl md:text-7xl font-bold leading-[1.05] tracking-tight"
          >
            Learn Smarter.{" "}
            <span className="text-gradient-primary">Think Faster.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-6 text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto"
          >
            Tyn Tutor AI helps you understand, organize, and solve problems
            like a real tutor — built for students who want clarity, not clutter.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-3"
          >
            <Button variant="hero" size="xl" onClick={onDownload}>
              Download Now
              <ArrowRight className="w-4 h-4" />
            </Button>
            <Button variant="soft" size="xl" asChild>
              <a href="#product">Try Web App</a>
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mt-8 inline-flex items-center gap-2 text-sm text-muted-foreground"
          >
            <Users className="w-4 h-4" />
            Used by students and self-learners worldwide
          </motion.div>
        </motion.div>

        {/* Floating preview card */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.4 }}
          className="relative mx-auto mt-16 max-w-4xl"
        >
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="rounded-2xl border border-border/60 bg-white/70 backdrop-blur-xl shadow-elevated p-2"
          >
            <div className="rounded-xl bg-gradient-to-br from-surface to-surface-2 p-6 md:p-10">
              <div className="flex items-center gap-1.5 mb-6">
                <span className="w-3 h-3 rounded-full bg-destructive/70" />
                <span className="w-3 h-3 rounded-full bg-yellow-400/80" />
                <span className="w-3 h-3 rounded-full bg-emerald-400/80" />
              </div>
              <div className="space-y-3">
                <div className="text-xs uppercase tracking-wider text-primary font-semibold">Tyn Tutor</div>
                <p className="font-display text-xl md:text-2xl font-semibold leading-snug">
                  "Explain photosynthesis like I'm 12, then quiz me."
                </p>
                <div className="grid sm:grid-cols-3 gap-3 mt-6">
                  {["Understand", "Organize", "Solve"].map((s, i) => (
                    <motion.div
                      key={s}
                      animate={{ y: [0, -4, 0] }}
                      transition={{ duration: 4 + i, repeat: Infinity, ease: "easeInOut", delay: i * 0.3 }}
                      className="rounded-xl bg-white border border-border/60 p-4 shadow-soft"
                    >
                      <div className="text-xs text-muted-foreground">Step {i + 1}</div>
                      <div className="font-semibold mt-1">{s}</div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
