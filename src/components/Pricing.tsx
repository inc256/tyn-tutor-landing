import { motion } from "framer-motion";
import { Check, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

type Plan = {
  name: string;
  price: string;
  period?: string;
  tagline: string;
  features: string[];
  popular?: boolean;
  cta?: string;
};

const plans: Plan[] = [
  {
    name: "Free Trial",
    price: "Free",
    period: "7 days",
    tagline: "Try every feature, no commitment.",
    features: ["Full access for 7 days", "All AI tools unlocked", "Web + Desktop + Mobile"],
  },
  {
    name: "Starter",
    price: "UGX 5,000",
    tagline: "50 Tokens",
    features: ["50 AI tokens", "Basic AI tutor", "Notes & summaries"],
  },
  {
    name: "Basic",
    price: "UGX 10,000",
    tagline: "100 Tokens",
    features: ["100 AI tokens", "Smart research", "Priority responses"],
  },
  {
    name: "Pro",
    price: "UGX 25,000",
    tagline: "250 Tokens",
    features: ["250 AI tokens", "Answer generator", "Export to PDF & Docs"],
  },
  {
    name: "Unlimited",
    price: "UGX 35,000",
    period: "/ month",
    tagline: "Unlimited Monthly",
    popular: true,
    features: ["Unlimited usage", "Highest priority", "All platforms", "Early access to features"],
  },
  {
    name: "Ultimate",
    price: "UGX 300,000",
    period: "/ year",
    tagline: "Unlimited Yearly",
    features: ["Everything in Unlimited", "Save ~30% vs monthly", "Dedicated support"],
  },
];

const Pricing = () => {
  return (
    <section id="pricing" className="py-24 md:py-32 bg-gradient-soft">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto text-center"
        >
          <span className="text-sm font-semibold uppercase tracking-wider text-primary">Pricing</span>
          <h2 className="mt-3 font-display text-4xl md:text-5xl font-bold">Simple plans that grow with you</h2>
          <p className="mt-4 text-muted-foreground text-lg">
            Start free, upgrade when you're ready. No hidden fees.
          </p>
        </motion.div>

        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
          {plans.map((p, i) => (
            <motion.div
              key={p.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              whileHover={{ y: -8 }}
              className={`relative rounded-2xl p-7 flex flex-col transition-all ${
                p.popular
                  ? "bg-gradient-primary text-primary-foreground shadow-glow lg:scale-105 border border-primary/30"
                  : "bg-card border border-border/70 shadow-soft hover:shadow-elevated"
              }`}
            >
              {p.popular && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 inline-flex items-center gap-1 px-3 py-1 rounded-full bg-background text-primary text-xs font-semibold shadow-md border border-border">
                  <Sparkles className="w-3 h-3" /> Most Popular
                </span>
              )}

              <div>
                <h3 className={`font-display text-xl font-semibold ${p.popular ? "" : ""}`}>{p.name}</h3>
                <p className={`text-sm mt-1 ${p.popular ? "text-primary-foreground/80" : "text-muted-foreground"}`}>
                  {p.tagline}
                </p>
              </div>

              <div className="mt-6 flex items-baseline gap-1">
                <span className="font-display text-4xl font-bold">{p.price}</span>
                {p.period && (
                  <span className={`text-sm ${p.popular ? "text-primary-foreground/80" : "text-muted-foreground"}`}>
                    {p.period}
                  </span>
                )}
              </div>

              <ul className="mt-6 space-y-3 flex-1">
                {p.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm">
                    <span className={`mt-0.5 grid place-items-center w-5 h-5 rounded-full ${
                      p.popular ? "bg-primary-foreground/20" : "bg-primary/10 text-primary"
                    }`}>
                      <Check className="w-3 h-3" />
                    </span>
                    <span className={p.popular ? "text-primary-foreground/95" : "text-foreground/90"}>{f}</span>
                  </li>
                ))}
              </ul>

              <Button
                variant={p.popular ? "secondary" : "hero"}
                size="lg"
                className={`mt-8 w-full ${p.popular ? "bg-primary-foreground text-primary hover:bg-primary-foreground/90" : ""}`}
              >
                Start Free Trial
              </Button>
            </motion.div>
          ))}
        </div>

        <p className="mt-10 text-center text-sm text-muted-foreground">
          No credit card required • Cancel anytime
        </p>
      </div>
    </section>
  );
};

export default Pricing;
