import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Check, Sparkles, Zap, Rocket, Crown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useState } from "react";

type Plan = {
  name: string;
  price: string;
  period?: string;
  tagline: string;
  features: string[];
  limitations?: string[];
  popular?: boolean;
  icon: React.ReactNode;
  color: string;
};

const plans: Plan[] = [
  {
    name: "Free",
    price: "$0",
    period: "/ month",
    tagline: "Perfect for getting started",
    features: [
      "10 daily credits",
      "Structured question framing",
      "Basic workflow summaries",
      "Standard response speed",
      "Limited document uploads",
      "Basic export options",
    ],
    icon: <Zap className="w-5 h-5" />,
    color: "from-gray-500 to-gray-600",
  },
  {
    name: "Basic",
    price: "$4",
    period: "one-time",
    tagline: "500 Credits",
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
    color: "from-blue-500 to-blue-600",
  },
  {
    name: "Pro",
    price: "$9",
    period: "/ month",
    tagline: "Unlimited",
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

// Your exact original comparison data
const comparisonFeatures = [
  { name: "Daily Access", tooltip: "Access to Xplainfy platform", free: "✓", starter: "✓", pro: "✓", ultra: "✓" },
  { name: "Credits", tooltip: "AI credits for processing requests", free: "10/day", starter: "500", pro: "Unlimited", ultra: "Unlimited" },
  { name: "Presentation Generation", tooltip: "Generate presentations from research", free: "✗", starter: "✓", pro: "✓", ultra: "✓" },
  { name: "Advanced Research", tooltip: "Deep research capabilities with citations", free: "✗", starter: "✗", pro: "✓", ultra: "✓" },
  { name: "AI Image Responses", tooltip: "Generate and analyze images with AI", free: "✗", starter: "✗", pro: "✗", ultra: "✓" },
  { name: "Long Context Processing", tooltip: "Process large documents and conversations", free: "✗", starter: "✗", pro: "✗", ultra: "✓" },
  { name: "Upload Limits", tooltip: "Maximum file size and number of uploads", free: "Low", starter: "Moderate", pro: "Limited", ultra: "Unlimited" },
  { name: "Priority Speed", tooltip: "Faster response times", free: "✗", starter: "✗", pro: "✓", ultra: "✓" },
  { name: "Highest AI Models", tooltip: "Access to latest and most capable models", free: "✗", starter: "✗", pro: "Partial", ultra: "Full" },
];

const Pricing = () => {
  const [billing, setBilling] = useState<"monthly" | "annual">("annual");

  const renderCell = (value: string) => {
    if (value === "✓") return <Check className="w-5 h-5 text-green-500 mx-auto" />;
    if (value === "✗") return <span className="text-gray-300 mx-auto block">—</span>;
    if (value === "Unlimited") return <span className="text-indigo-600 font-semibold">∞</span>;
    return <span className="text-sm text-gray-700">{value}</span>;
  };

  return (
    <section id="pricing" className="bg-white py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-sm font-semibold uppercase tracking-wider text-indigo-600">Pricing</span>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900 mt-2 mb-4">
            Choose the right plan for your work
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From individual learners to research teams and businesses, Explainfy scales with your needs.
          </p>
        </motion.div>

        {/* Billing Toggle */}
        {/* <div className="flex flex-wrap justify-center items-center gap-4 mb-16">
          <div className="flex bg-gray-100 rounded-full p-1">
            <button
              onClick={() => setBilling("monthly")}
              className={`px-8 py-2.5 text-sm font-semibold rounded-full transition-all ${
                billing === "monthly"
                  ? "bg-white text-gray-900 shadow-sm"
                  : "text-gray-500 hover:text-gray-700"
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setBilling("annual")}
              className={`px-8 py-2.5 text-sm font-semibold rounded-full transition-all ${
                billing === "annual"
                  ? "bg-white text-gray-900 shadow-sm"
                  : "text-gray-500 hover:text-gray-700"
              }`}
            >
              Annual
            </button>
          </div>
          <Badge className="bg-indigo-50 text-indigo-600 border-0 px-3 py-1.5 text-xs font-semibold">
            Save 40%
          </Badge>
        </div> */}

        {/* Pricing Cards - Redesigned to match original layout */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className={`relative rounded-2xl border bg-white p-6 transition-all duration-300 ${
                plan.popular
                  ? "border-indigo-500 shadow-xl scale-105 ring-2 ring-indigo-500/20 z-10"
                  : "border-gray-200 shadow-sm hover:shadow-lg"
              }`}
            >
              {plan.popular && (
                <>
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <Badge className="bg-indigo-600 text-white border-0 px-4 py-1 text-xs font-semibold rounded-full">
                      Most Popular
                    </Badge>
                  </div>
                  <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-indigo-500 to-indigo-600 rounded-t-2xl" />
                </>
              )}

              <div className="mt-2">
                <div className={`inline-flex items-center justify-center h-12 w-12 rounded-xl bg-gradient-to-br ${plan.color} text-white shadow-md mb-4`}>
                  {plan.icon}
                </div>

                <h3 className="text-xl font-bold text-gray-900">{plan.name}</h3>
                
                <div className="mt-3">
                  <span className="text-3xl font-bold text-gray-900">{plan.price}</span>
                  {plan.period && <span className="text-sm text-gray-500 ml-1">{plan.period}</span>}
                </div>
                <p className="text-sm text-gray-500 mt-1">{plan.tagline}</p>

                <Button
                  asChild
                  className={`w-full mt-6 ${
                    plan.popular
                      ? "bg-indigo-600 hover:bg-indigo-700 text-white"
                      : "bg-gray-900 hover:bg-gray-800 text-white"
                  } transition-all duration-200 font-semibold shadow-sm hover:shadow-md`}
                >
                  <Link to="/downloads">
                    {plan.name === "Free" ? "Start Free" : "Start Exploring"}
                  </Link>
                </Button>

                <hr className="my-6 border-gray-200" />

                <ul className="space-y-3 text-sm">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2.5 text-gray-700">
                      <Check className="h-4 w-4 text-green-500 flex-shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                {plan.limitations && (
                  <div className="mt-4 rounded-lg bg-gray-50 border border-gray-200 p-2.5 text-xs text-gray-600">
                    <span className="font-semibold">Note:</span> {plan.limitations[0]}
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Feature Comparison Table - Using your exact original data */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-gray-50 rounded-2xl border border-gray-200 p-6 md:p-8"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-6">Compare all features</h3>
          <p className="text-gray-600 mb-8">See exactly what you get with each plan.</p>
          
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left py-3 px-4 font-semibold text-gray-900">Features</th>
                  <th className="text-center py-3 px-4 font-semibold text-gray-900">Free</th>
                  <th className="text-center py-3 px-4 font-semibold text-gray-900">Basic</th>
                  <th className="text-center py-3 px-4 font-semibold text-gray-900 text-indigo-600">Pro</th>
                  <th className="text-center py-3 px-4 font-semibold text-gray-900">Ultra</th>
                </tr>
              </thead>
              <tbody>
                {comparisonFeatures.map((feature, idx) => (
                  <tr key={idx} className="border-b border-gray-100 hover:bg-white/50 transition">
                    <td className="py-3 px-4 font-medium text-gray-900">{feature.name}</td>
                    <td className="py-3 px-4 text-center">{renderCell(feature.free)}</td>
                    <td className="py-3 px-4 text-center">{renderCell(feature.starter)}</td>
                    <td className="py-3 px-4 text-center">{renderCell(feature.pro)}</td>
                    <td className="py-3 px-4 text-center">{renderCell(feature.ultra)}</td>
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