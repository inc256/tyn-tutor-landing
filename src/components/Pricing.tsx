import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Check, X, Sparkles, Zap, Rocket, Crown, HelpCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

type Plan = {
  name: string;
  price: string;
  period?: string;
  tagline: string;
  description: string;
  features: string[];
  limitations?: string[];
  popular?: boolean;
  icon: React.ReactNode;
  color: string;
};

const plans: Plan[] = [
  {
    name: "Trial",
    price: "Free / 30 days",
    tagline: "Trying out Xplainfy",
    description: "Start with core reasoning workflows and basic report generation.",
    features: [
      "20 daily credits for 30 days",
      "Structured question framing",
      "Basic workflow summaries",
      "Standard response speed",
      "Limited document uploads",
      "Basic export options",
    ],
    icon: <Zap className="w-5 h-5" />,
    color: "from-slate-500 to-slate-600",
  },
  {
    name: "Starter",
    price: "$4",
    period: "one-time",
    tagline: "500 Credits",
    description: "A flexible plan for teams testing structured reasoning workflows.",
    features: [
      "1000 credits (one-time)",
      "Expanded research depth",
      "Detailed report exports",
      "Document analysis support",
      "Citation-aware summaries",
      "Faster response speed",
    ],
    limitations: ["Credits are consumable"],
    icon: <Sparkles className="w-5 h-5" />,
    color: "from-blue-500 to-blue-600",
  },
  {
    name: "Pro",
    price: "$9",
    period: "/ month",
    tagline: "Unlimited",
    description: "A plan for professionals who need daily research, reasoning, and report-ready insights.",
    features: [
      "Unlimited standard usage",
      "Advanced evidence research",
      "Enhanced reasoning workflows",
      "Deep document analysis",
      "Report generation",
      "Priority response queue",
    ],
    popular: true,
    icon: <Rocket className="w-5 h-5" />,
    color: "from-purple-500 to-purple-600",
  },
  {
    name: "Ultra",
    price: "$20",
    period: "/ month",
    tagline: "Maximum AI Power",
    description: "Maximum research power for teams that need deep context and premium reasoning output.",
    features: [
      "AI image-powered responses",
      "Long-context processing",
      "Unlimited uploads",
      "Highest intelligence models",
      "Maximum research depth",
      "Premium processing speeds",
    ],
    limitations: ["Fair usage policy applies"],
    icon: <Crown className="w-5 h-5" />,
    color: "from-amber-500 to-amber-600",
  },
];

const comparisonFeatures = [
  { name: "Daily Access", tooltip: "Access to Xplainfy platform", free: "✓", starter: "✓", pro: "✓", ultra: "✓" },
  { name: "Credits", tooltip: "AI credits for processing requests", free: "20/day", starter: "1,000", pro: "Unlimited", ultra: "Unlimited" },
  { name: "Presentation Generation", tooltip: "Generate presentations from research", free: "✗", starter: "✓", pro: "✓", ultra: "✓" },
  { name: "Advanced Research", tooltip: "Deep research capabilities with citations", free: "✗", starter: "✗", pro: "✓", ultra: "✓" },
  { name: "AI Image Responses", tooltip: "Generate and analyze images with AI", free: "✗", starter: "✗", pro: "✗", ultra: "✓" },
  { name: "Long Context Processing", tooltip: "Process large documents and conversations", free: "✗", starter: "✗", pro: "✗", ultra: "✓" },
  { name: "Upload Limits", tooltip: "Maximum file size and number of uploads", free: "Low", starter: "Moderate", pro: "Limited", ultra: "Unlimited" },
  { name: "Priority Speed", tooltip: "Faster response times", free: "✗", starter: "✗", pro: "✓", ultra: "✓" },
  { name: "Highest AI Models", tooltip: "Access to latest and most capable models", free: "✗", starter: "✗", pro: "Partial", ultra: "Full" },
];

const getCheckIcon = (value: string) => {
  if (value === "✓") return <Check className="w-5 h-5 text-green-500 mx-auto" />;
  if (value === "✗") return <X className="w-5 h-5 text-red-400 mx-auto" />;
  return <span className="text-sm font-medium">{value}</span>;
};

const Pricing = () => {
  return (
    <TooltipProvider>
      <section id="pricing" className="bg-background">
        <div className="container py-24 md:py-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="mx-auto max-w-3xl text-center"
          >
            <span className="text-sm font-semibold uppercase tracking-wider text-primary">Pricing</span>
            <h2 className="mt-3 font-display text-4xl md:text-5xl font-bold tracking-tight">
              Simple pricing for research and decision workflows.
            </h2>
            <p className="mt-4 text-muted-foreground text-lg leading-relaxed">
              Choose a plan that fits your pace, from trial access to unlimited pro workflows with priority research and reporting.
            </p>
          </motion.div>

          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {plans.map((p, i) => (
              <motion.div
                key={p.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                whileHover={{ y: -6 }}
                className={`group relative overflow-hidden rounded-3xl border border-border/70 bg-card p-8 shadow-soft transition-all duration-300 ${
                  p.popular ? "scale-105 border-primary/60 shadow-elevated" : "hover:shadow-elevated"
                }`}
              >
                <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-primary to-primary-glow" />
                {p.popular && (
                  <Badge className="absolute right-5 top-5 rounded-full bg-purple-500/10 text-purple-600 border border-purple-200 px-3 py-1 text-xs font-semibold">
                    Most Popular
                  </Badge>
                )}

                <div className="relative mt-5">
                  <div className={`inline-flex items-center justify-center h-14 w-14 rounded-3xl bg-gradient-to-br ${p.color} text-white shadow-glow mb-6`}>
                    {p.icon}
                  </div>

                  <h3 className="font-display text-2xl font-semibold">{p.name}</h3>
                  <p className="mt-2 text-muted-foreground leading-relaxed">{p.description}</p>

                  <div className="mt-6 flex items-end gap-2">
                    <span className="font-display text-4xl font-bold leading-none">{p.price}</span>
                    {p.period && <span className="text-sm text-muted-foreground">{p.period}</span>}
                  </div>
                  <p className="mt-2 text-sm text-muted-foreground">{p.tagline}</p>

                  <ul className="mt-6 space-y-3 text-sm">
                    {p.features.slice(0, 4).map((feature) => (
                      <li key={feature} className="flex gap-3">
                        <Check className="mt-1 h-4 w-4 text-green-500" />
                        <span>{feature}</span>
                      </li>
                    ))}
                    {p.features.length > 4 && (
                      <li className="text-xs text-muted-foreground pl-7">
                        +{p.features.length - 4} more features
                      </li>
                    )}
                  </ul>

                  {p.limitations && p.name !== "Ultra" && (
                    <div className="mt-5 rounded-3xl border border-border/70 bg-background/90 p-4 text-xs text-muted-foreground">
                      <span className="font-semibold text-foreground">Limit:</span> {p.limitations[0]}
                    </div>
                  )}

                  <Button
                    asChild
                    variant={p.popular ? "hero" : "outline"}
                    className="w-full mt-8"
                  >
                    <Link to="/downloads">Choose {p.name}</Link>
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-20"
          >
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold mb-2">Compare all features</h3>
              <p className="text-muted-foreground">See exactly what you get with each plan.</p>
            </div>

            <div className="overflow-hidden rounded-3xl border border-border/70 bg-card shadow-soft">
              <div className="overflow-x-auto">
                <table className="w-full border-collapse text-sm">
                  <thead>
                    <tr className="border-b bg-primary/5 text-left text-sm uppercase tracking-[0.3em] text-muted-foreground">
                      <th className="py-5 px-6">Features</th>
                      {plans.map((plan) => (
                        <th key={plan.name} className="px-4 py-5 text-center">
                          <div className="flex flex-col items-center gap-3">
                            <div className={`inline-flex h-12 w-12 items-center justify-center rounded-3xl bg-gradient-to-br ${plan.color} text-white shadow-glow`}>
                              {plan.icon}
                            </div>
                            <div className="font-semibold text-base">{plan.name}</div>
                            <div className="text-xs text-muted-foreground">{plan.price}{plan.period ? plan.period : ''}</div>
                            {plan.popular && (
                              <Badge className="rounded-full bg-purple-100 text-purple-700 px-2 py-1 text-[10px] font-semibold">
                                Popular
                              </Badge>
                            )}
                          </div>
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {comparisonFeatures.map((feature) => (
                      <tr key={feature.name} className="border-b last:border-b-0">
                        <td className="px-6 py-4">
                          <Tooltip>
                            <TooltipTrigger asChild>
                              <button className="inline-flex items-center gap-2 text-left font-medium text-foreground text-sm hover:text-primary transition">
                                {feature.name}
                                <HelpCircle className="w-4 h-4 text-muted-foreground" />
                              </button>
                            </TooltipTrigger>
                            <TooltipContent>
                              <p className="text-xs">{feature.tooltip}</p>
                            </TooltipContent>
                          </Tooltip>
                        </td>
                        <td className="px-4 py-4 text-center">{getCheckIcon(feature.free)}</td>
                        <td className="px-4 py-4 text-center">{getCheckIcon(feature.starter)}</td>
                        <td className="px-4 py-4 text-center">{getCheckIcon(feature.pro)}</td>
                        <td className="px-4 py-4 text-center">{getCheckIcon(feature.ultra)}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </TooltipProvider>
  );
};


export default Pricing;