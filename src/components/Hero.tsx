import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Globe, ArrowRight } from "lucide-react";
import Desktop_1 from "@/images/Mockup_Desktop_1.png";

const Hero = () => {
  return (
    <section id="home" className="relative overflow-hidden py-28 md:py-32 bg-gradient-hero">
      <div className="pointer-events-none absolute -top-24 -left-24 w-96 h-96 rounded-full bg-primary/20 blur-3xl" />
      <div className="pointer-events-none absolute top-16 -right-32 w-[28rem] h-[28rem] rounded-full bg-primary-glow/20 blur-3xl" />

      <div className="container relative">
        <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl"
          >
            <div className="mt-8 w-full max-w-4xl overflow-visible rounded-[2rem] bg-transparent shadow-none">
              <img
                src={Desktop_1}
                alt="Xplainfy desktop workflow preview"
                className="w-full h-auto object-contain bg-transparent shadow-none"
                loading="lazy"
                style={{ background: "transparent" }}
              />
            </div>

            <p className="mt-8 text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl">
              A workspace for professionals who research, think through complex problems, build solutions, and create reports with confidence.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
               <Button variant="hero" size="xl" asChild>
                 <a href="https://app.xplainfy.net" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2">
                   <Globe className="w-5 h-5" />
                   Try the Web App
                 </a>
               </Button>
               <Button variant="outline" size="xl" asChild className="w-full sm:w-auto">
                 <a href="/downloads" className="inline-flex items-center gap-2">
                   Explore All Devices
                   <ArrowRight className="w-4 h-4" />
                 </a>
               </Button>
             </div>

            <p className="mt-4 text-sm uppercase tracking-[0.3em] text-muted-foreground">
              For engineers, researchers, consultants, analysts, learners and business teams.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.1 }}
            className="relative mx-auto w-full max-w-3xl"
          >
            <div className="relative overflow-hidden rounded-[2rem] border border-border/60 bg-card/95 shadow-2xl shadow-primary/10">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(56,189,248,0.18),_transparent_35%),radial-gradient(circle_at_top_right,_rgba(236,72,153,0.12),_transparent_32%)]" />
              <div className="relative p-6 lg:p-8">
                <div className="flex flex-wrap items-center justify-between gap-4">
                  <div className="space-y-2">
                    <div className="h-2.5 w-20 rounded-full bg-primary/60" />
                    <div className="text-sm font-semibold uppercase tracking-[0.3em] text-muted-foreground">How Xplainfy Works</div>
                  </div>
                </div>

                <div className="mt-8 rounded-[1.75rem] border border-border/50 bg-background/90 p-6 shadow-sm backdrop-blur-lg">
  <div className="grid gap-5 lg:grid-cols-3">
    <div className="rounded-3xl border border-border/70 bg-card p-5 text-sm text-muted-foreground">
      <p className="font-semibold text-foreground">Research</p>
      <p className="mt-3 leading-relaxed">
        Gather context, evidence, and relevant information from multiple perspectives.
      </p>
    </div>

    <div className="rounded-3xl border border-border/70 bg-card p-5 text-sm text-muted-foreground">
      <p className="font-semibold text-foreground">Think</p>
      <p className="mt-3 leading-relaxed">
        Apply structured reasoning to connect ideas, evaluate options, and solve complex problems.
      </p>
    </div>

    <div className="rounded-3xl border border-border/70 bg-card p-5 text-sm text-muted-foreground">
      <p className="font-semibold text-foreground">Report</p>
      <p className="mt-3 leading-relaxed">
        Generate professional reports that clearly explain the research, reasoning, and final outcome.
      </p>
    </div>
  </div>
</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
