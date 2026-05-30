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
    description: "Get started with basic AI explanations",
    features: [
      "20 daily credits for 30 days",
      "Standard AI explanations",
      "Basic AI assistance",
      "Standard response speed",
      "Limited document uploads",
      "Basic exports",
    ],
    icon: <Zap className="w-5 h-5" />,
    color: "from-slate-500 to-slate-600",
  },
  {
    name: "Starter",
    price: "$4",
    period: "one-time",
    tagline: "1,000 Credits",
    description: "Flexible credit-based usage",
    features: [
      "1000 credits (one-time)",
      "Basic & intermediate research",
      "Presentation generation",
      "PDF & document exports",
      "Citation support",
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
    description: "Daily productivity & research",
    features: [
      "Unlimited standard usage",
      "Advanced Research",
      "Better AI reasoning",
      "Deep document analysis",
      "Presentation generation",
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
    description: "Advanced workflows & AI image responses",
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
      <section id="pricing" className="py-24 md:py-32 bg-gradient-to-b from-background to-secondary/20">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl mx-auto text-center"
          >
            <span className="text-sm font-semibold uppercase tracking-wider text-primary">Pricing</span>
            <h2 className="mt-3 font-display text-4xl md:text-5xl font-bold">
              Simple. Powerful. Built for modern AI research
            </h2>
            <p className="mt-4 text-muted-foreground text-lg">
              Choose the plan that fits your workflow
            </p>
          </motion.div>

          {/* Plans Grid */}
          <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
            {plans.map((p, i) => (
              <motion.div
                key={p.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                whileHover={{ y: -8 }}
                className={`relative rounded-2xl bg-card border overflow-hidden transition-all shadow-lg hover:shadow-xl ${
                  p.popular ? "ring-2 ring-purple-500/50 scale-105" : ""
                }`}
              >
                <div className={`h-1 bg-gradient-to-r ${p.color}`} />
                
                {p.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-10">
                    <Badge className="bg-gradient-to-r from-purple-500 to-purple-600 text-white border-0 shadow-lg">
                      <Sparkles className="w-3 h-3 mr-1" /> Most Popular
                    </Badge>
                  </div>
                )}

                <div className="p-6">
                  <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${p.color} text-white shadow-md mb-4`}>
                    {p.icon}
                  </div>
                  
                  <h3 className="font-display text-xl font-semibold">{p.name}</h3>
                  <p className="text-sm text-muted-foreground mt-1">{p.description}</p>

                  <div className="mt-4">
                    <div className="flex items-baseline gap-1">
                      <span className="font-display text-3xl font-bold">{p.price}</span>
                      {p.period && (
                        <span className="text-sm text-muted-foreground">{p.period}</span>
                      )}
                    </div>
                    <p className="text-xs text-muted-foreground mt-1">{p.tagline} credits</p>
                  </div>

                  <ul className="mt-5 space-y-2">
                    {p.features.slice(0, 4).map((f) => (
                      <li key={f} className="flex items-start gap-2 text-sm">
                        <Check className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                        <span>{f}</span>
                      </li>
                    ))}
                    {p.features.length > 4 && (
                      <li className="text-xs text-muted-foreground pl-6">
                        +{p.features.length - 4} more features
                      </li>
                    )}
                  </ul>

                  {p.limitations && p.name !== "Ultra" && (
                    <div className="mt-3 pt-3 border-t">
                      <p className="text-xs text-muted-foreground flex items-center gap-1">
                        <X className="w-3 h-3 text-red-400" />
                        {p.limitations[0]}
                      </p>
                    </div>
                  )}

                  <Button
                    asChild
                    variant={p.popular ? "default" : "outline"}
                    className={`w-full mt-6 ${
                      p.popular ? "bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700" : ""
                    }`}
                  >
                    <Link to="/downloads">Get {p.name}</Link>
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Feature Comparison Table */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-20"
          >
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold mb-2">Compare All Features</h3>
              <p className="text-muted-foreground">See exactly what you get with each plan</p>
            </div>

            <div className="relative rounded-2xl border bg-card/50 backdrop-blur-sm overflow-hidden shadow-lg">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b bg-gradient-to-r from-primary/5 to-transparent">
                      <th className="text-left py-5 px-6 font-semibold text-base">
                        <span className="flex items-center gap-1">
                          Features
                          <HelpCircle className="w-4 h-4 text-muted-foreground" />
                        </span>
                      </th>
                      {plans.map((plan) => (
                        <th key={plan.name} className="text-center py-5 px-4">
                          <div className="space-y-1">
                            <div className={`inline-flex p-2 rounded-xl bg-gradient-to-br ${plan.color} text-white shadow-md`}>
                              {plan.icon}
                            </div>
                            <div className="font-semibold text-lg">{plan.name}</div>
                            <div className="text-xs text-muted-foreground">
                              {plan.price}{plan.period ? plan.period : ''}
                            </div>
                            {plan.popular && (
                              <Badge variant="secondary" className="text-xs bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-300">
                                Popular
                              </Badge>
                            )}
                          </div>
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {comparisonFeatures.map((feature, idx) => (
                      <tr 
                        key={idx} 
                        className={`border-b transition-colors hover:bg-muted/30 ${
                          idx % 2 === 0 ? 'bg-background' : 'bg-muted/5'
                        }`}
                      >
                        <td className="py-4 px-6">
                          <Tooltip>
                            <TooltipTrigger asChild>
                              <span className="flex items-center gap-1 font-medium cursor-help">
                                {feature.name}
                                <HelpCircle className="w-3.5 h-3.5 text-muted-foreground" />
                              </span>
                            </TooltipTrigger>
                            <TooltipContent>
                              <p className="text-xs">{feature.tooltip}</p>
                            </TooltipContent>
                          </Tooltip>
                        </td>
                        <td className="text-center py-4 px-4">
                          {getCheckIcon(feature.free)}
                        </td>
                        <td className="text-center py-4 px-4">
                          {getCheckIcon(feature.starter)}
                        </td>
                        <td className={`text-center py-4 px-4 ${feature.pro === "✓" ? 'bg-purple-500/5' : ''}`}>
                          {getCheckIcon(feature.pro)}
                        </td>
                        <td className="text-center py-4 px-4">
                          {getCheckIcon(feature.ultra)}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="p-6 bg-gradient-to-r from-primary/5 via-transparent to-primary/5 border-t text-center">
                <p className="text-sm text-muted-foreground">
                  All plans include core AI explanations and basic assistance. 
                  Upgrade anytime to unlock more power.
                </p>
              </div>
            </div>
          </motion.div>

          <div className="mt-12 text-center">
            <p className="text-sm text-muted-foreground">
              No credit card required for Free plan • Cancel anytime
            </p>
          </div>
        </div>
      </section>
    </TooltipProvider>
  );
};

export default Pricing;