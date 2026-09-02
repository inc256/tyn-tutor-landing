import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Check, Sparkles, Zap, Rocket, Crown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

type Plan = {
  name: string;
  price: string;
  period?: string;
  tagline: string;
  features: string[];
  limitations?: string[];
  popular?: boolean;
  icon: React.ReactNode;
};

const plans: Plan[] = [
  {
    name: "Free",
    price: "$0",
    period: "/ month",
    tagline: "For getting started",
    features: [
      "10 daily credits",
      "Structured question framing",
      "Basic workflow summaries",
      "Standard response speed",
      "Limited uploads",
      "Basic exports",
    ],
    icon: <Zap className="w-5 h-5" />,
  },
  {
    name: "Basic",
    price: "$4",
    period: "one-time",
    tagline: "500 credits",
    features: [
      "500 credits (one-time)",
      "Expanded research depth",
      "Detailed report exports",
      "Document analysis support",
      "Citation-aware summaries",
      "Faster response speed",
    ],
    limitations: ["Credits are consumable"],
    icon: <Sparkles className="w-5 h-5" />,
  },
  {
    name: "Pro",
    price: "$9",
    period: "/ month",
    tagline: "Unlimited use",
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
  },
  {
    name: "Ultra",
    price: "$20",
    period: "/ month",
    tagline: "For advanced work",
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
  },
];

const comparisonFeatures = [
  { name: "Daily access", free: "✓", starter: "✓", pro: "✓", ultra: "✓" },
  { name: "Credits", free: "10/day", starter: "500", pro: "Unlimited", ultra: "Unlimited" },
  { name: "Presentation generation", free: "✗", starter: "✓", pro: "✓", ultra: "✓" },
  { name: "Advanced research", free: "✗", starter: "✗", pro: "✓", ultra: "✓" },
  { name: "AI image responses", free: "✗", starter: "✗", pro: "✗", ultra: "✓" },
  { name: "Long-context processing", free: "✗", starter: "✗", pro: "✗", ultra: "✓" },
  { name: "Upload limits", free: "Low", starter: "Moderate", pro: "Limited", ultra: "Unlimited" },
  { name: "Priority speed", free: "✗", starter: "✗", pro: "✓", ultra: "✓" },
  { name: "Highest AI models", free: "✗", starter: "✗", pro: "Partial", ultra: "Full" },
];

const Pricing = () => {
  const renderCell = (value: string) => {
    if (value === "✓") return <Check className="mx-auto h-4 w-4 text-emerald-600" />;
    if (value === "✗") return <span className="mx-auto block text-slate-300">—</span>;
    if (value === "Unlimited") return <span className="font-semibold text-blue-600">∞</span>;
    return <span className="text-sm text-slate-700">{value}</span>;
  };

  return (
    <section id="pricing" className="bg-slate-50 py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-3xl text-center"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-600">Pricing</p>
          <h2 className="mt-4 text-4xl font-semibold tracking-[-0.06em] text-slate-900 md:text-5xl">
            Choose the plan that fits the work.
          </h2>
          <p className="mt-5 text-base leading-7 text-slate-600 md:text-lg">
            Flexible enough for personal research, and mature enough for serious team workflows.
          </p>
        </motion.div>

        <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: index * 0.05 }}
              className={`relative rounded-2xl border bg-white p-6 shadow-sm ${
                plan.popular ? "border-blue-600 ring-1 ring-blue-100" : "border-slate-200"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <Badge className="border-0 bg-blue-600 px-3 py-1 text-[10px] font-medium uppercase tracking-[0.18em] text-white">
                    Most popular
                  </Badge>
                </div>
              )}

              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-slate-100 text-slate-900">
                {plan.icon}
              </div>

              <h3 className="mt-5 text-2xl font-semibold text-slate-900">{plan.name}</h3>
              <div className="mt-4 flex items-end gap-2">
                <span className="text-4xl font-semibold tracking-[-0.05em] text-slate-900">{plan.price}</span>
                {plan.period && <span className="pb-1 text-sm text-slate-500">{plan.period}</span>}
              </div>
              <p className="mt-2 text-sm text-slate-500">{plan.tagline}</p>

              <Button
                asChild
                className={`mt-6 w-full ${
                  plan.popular ? "bg-blue-600 text-white hover:bg-blue-700" : "bg-slate-900 text-white hover:bg-slate-800"
                }`}
              >
                <Link to="/downloads">{plan.name === "Free" ? "Get started" : "Start exploring"}</Link>
              </Button>

              <ul className="mt-6 space-y-3 text-sm text-slate-700">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-emerald-600" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              {plan.limitations && (
                <div className="mt-6 rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-xs text-slate-600">
                  {plan.limitations[0]}
                </div>
              )}
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mt-20 overflow-hidden rounded-2xl border border-slate-200 bg-white"
        >
          <div className="border-b border-slate-200 px-6 py-5 md:px-8">
            <h3 className="text-2xl font-semibold text-slate-900">Compare plans</h3>
          </div>

          <div className="overflow-x-auto">
            <table className="min-w-full text-left text-sm">
              <thead className="bg-slate-50">
                <tr>
                  <th className="px-6 py-4 font-medium text-slate-600 md:px-8">Feature</th>
                  <th className="px-6 py-4 font-medium text-slate-600 md:px-8">Free</th>
                  <th className="px-6 py-4 font-medium text-slate-600 md:px-8">Basic</th>
                  <th className="px-6 py-4 font-medium text-blue-600 md:px-8">Pro</th>
                  <th className="px-6 py-4 font-medium text-slate-600 md:px-8">Ultra</th>
                </tr>
              </thead>
              <tbody>
                {comparisonFeatures.map((feature, idx) => (
                  <tr key={idx} className={idx % 2 === 0 ? "bg-white" : "bg-slate-50/50"}>
                    <td className="px-6 py-4 font-medium text-slate-800 md:px-8">{feature.name}</td>
                    <td className="px-6 py-4 text-center md:px-8">{renderCell(feature.free)}</td>
                    <td className="px-6 py-4 text-center md:px-8">{renderCell(feature.starter)}</td>
                    <td className="px-6 py-4 text-center font-medium text-blue-600 md:px-8">{renderCell(feature.pro)}</td>
                    <td className="px-6 py-4 text-center md:px-8">{renderCell(feature.ultra)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Pricing;