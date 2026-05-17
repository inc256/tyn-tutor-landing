import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Users, Globe, Smartphone, ArrowRight } from "lucide-react";

const Hero = () => {
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

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="mt-6 font-display text-5xl sm:text-6xl md:text-7xl font-bold leading-[1.05] tracking-tight"
          >
            <span className="text-gradient-primary">Anything Explained.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-6 text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto"
          >
            Xplainfy is an AI-powered system designed to help you understand, research,
            and solve problems through structured, step-by-step explanations.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-10 grid sm:grid-cols-2 gap-3 max-w-md mx-auto"
          >
            <Button
              variant="soft"
              size="xl"
              asChild
              className="bg-card border border-border/70 shadow-soft hover:shadow-elevated text-foreground"
            >
              <a href="https://app.xplainfy.net" target="_blank" rel="noopener noreferrer">
                <Globe className="w-5 h-5" />
                Web App
              </a>
            </Button>
            <Button
              variant="soft"
              size="xl"
              asChild
              className="bg-card border border-border/70 shadow-soft hover:shadow-elevated text-foreground"
            >
              <a href="/releases/app-release.apk" download>
                <Smartphone className="w-5 h-5" />
                Android
                <ArrowRight className="w-4 h-4" />
              </a>
            </Button>
          </motion.div>

           <motion.div
             initial={{ opacity: 0 }}
             animate={{ opacity: 1 }}
             transition={{ duration: 0.8, delay: 0.5 }}
             className="mt-8 inline-flex items-center gap-2 text-sm text-muted-foreground"
           >
             <Users className="w-4 h-4" />
             Used by engineers, researchers, educators, medical professionals, and lifelong learners worldwide
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
            className="rounded-2xl border border-border/60 bg-card/70 backdrop-blur-xl shadow-elevated p-2"
          >
            <div className="rounded-xl bg-gradient-to-br from-surface to-surface-2 p-6 md:p-10 dark:from-card dark:to-card/80">
              <div className="flex items-center gap-1.5 mb-6">
                <span className="w-3 h-3 rounded-full bg-destructive/70" />
                <span className="w-3 h-3 rounded-full bg-yellow-400/80" />
                <span className="w-3 h-3 rounded-full bg-emerald-400/80" />
              </div>
              <div className="space-y-3">
                <div className="text-xs uppercase tracking-wider text-primary font-semibold">Xplainfy</div>
                <p className="font-display text-xl md:text-2xl font-semibold leading-snug">
                  "Explain photosynthesis."
                </p>
                <div className="grid sm:grid-cols-3 gap-3 mt-6">
                  {["Understand", "Breakdown", "Solve"].map((s, i) => (
                    <motion.div
                      key={s}
                      animate={{ y: [0, -4, 0] }}
                      transition={{ duration: 4 + i, repeat: Infinity, ease: "easeInOut", delay: i * 0.3 }}
                      className="rounded-xl bg-card border border-border/60 p-4 shadow-soft"
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
