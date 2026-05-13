import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { platforms } from "@/data/platforms";
import { Button } from "@/components/ui/button";

const Downloads = () => {
  return (
    <section id="downloads" className="py-24 md:py-32 bg-background">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto text-center"
        >
          <span className="text-sm font-semibold uppercase tracking-wider text-primary">Downloads</span>
          <h2 className="mt-3 font-display text-4xl md:text-5xl font-bold">Download Xplainfy</h2>
          <p className="mt-4 text-muted-foreground text-lg">
            Access Xplainfy on any platform—desktop, mobile, or web. Start instantly, anywhere you work.
          </p>
        </motion.div>

        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {platforms.map((p, i) => {
            const Icon = p.icon;
            const isPrimary = p.recommended;
            return (
              <motion.div
                key={p.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                whileHover={{ y: -6 }}
                className={`relative rounded-2xl p-7 flex flex-col transition-shadow ${
                  isPrimary
                    ? "bg-gradient-primary text-primary-foreground shadow-glow"
                    : "bg-card border border-border/70 shadow-soft hover:shadow-elevated"
                }`}
              >
                {isPrimary && (
                  <span className="absolute top-4 right-4 inline-flex items-center px-2.5 py-0.5 rounded-full bg-primary-foreground/20 text-xs font-semibold">
                    Recommended
                  </span>
                )}
                <div className={`grid place-items-center w-12 h-12 rounded-xl mb-5 ${
                  isPrimary ? "bg-primary-foreground/15" : "bg-gradient-primary text-primary-foreground shadow-glow"
                }`}>
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="font-display text-xl font-semibold">{p.name}</h3>
                <p className={`mt-2 text-sm leading-relaxed flex-1 ${
                  isPrimary ? "text-primary-foreground/85" : "text-muted-foreground"
                }`}>
                  {isPrimary ? "No installation required — start instantly in your browser." : p.description}
                </p>
                {p.href === "#" ? (
                  <Button variant="outline" size="lg" className="mt-6 w-full" disabled>
                    Coming Soon
                  </Button>
                ) : (
                  <Button
                    variant={isPrimary ? "secondary" : "hero"}
                    size="lg"
                    className={`mt-6 w-full ${isPrimary ? "bg-primary-foreground text-primary hover:bg-primary-foreground/90" : ""}`}
                    asChild
                  >
                    <a href={p.href} target="_blank" rel="noopener noreferrer">
                      {isPrimary ? "Open Now" : p.cta}
                      <ArrowRight className="w-4 h-4" />
                    </a>
                  </Button>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Downloads;
