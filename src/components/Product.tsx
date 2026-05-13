import { motion } from "framer-motion";
import { Brain, Search, FileText, Workflow, Upload, Shield, CreditCard, Globe, Edit3 } from "lucide-react";

const features = [
  {
    icon: Brain,
    title: "Problem Explanation",
    desc: "Guided thinking system that breaks complex problems into clear, logical steps—teaching you how to think, not just what to think.",
  },
  {
    icon: Search,
    title: "Structured Research",
    desc: "Transforms scattered information into organized insights with clear focus, key questions, and logical summaries for any field.",
  },
  {
    icon: Workflow,
    title: "Step-by-Step Solutions",
    desc: "Builds solutions progressively with full reasoning—each step explained, each decision justified, culminating in a complete, accurate output.",
  },
  {
    icon: FileText,
    title: "Full Report Generation",
    desc: "Combines analysis, explanations, and conclusions into professional reports ready for decision-making, presentations, or deep study.",
  },
  {
    icon: Edit3,
    title: "Editable AI Outputs",
    desc: "Take full control: modify, refine, or regenerate any response. You're always in charge of the final result.",
  },
  {
    icon: Shield,
    title: "Privacy-First",
    desc: "Optional privacy mode disables data storage—your information stays private with no history saved when you choose.",
  },
  {
    icon: CreditCard,
    title: "Transparent Credits",
    desc: "Simple, predictable usage model. Credits are spent per action—no hidden fees or surprise charges.",
  },
  {
    icon: Globe,
    title: "Cross-Platform",
    desc: "Seamless experience across mobile, desktop, and web. A consistent, productive interface everywhere you work.",
  },
];

const Product = () => {
  return (
    <section id="product" className="py-24 md:py-32 bg-background">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto text-center"
        >
          <span className="text-sm font-semibold uppercase tracking-wider text-primary">Built for Clarity</span>
          <h2 className="mt-3 font-display text-4xl md:text-5xl font-bold">
            Eight powerful tools for any professional
          </h2>
          <p className="mt-4 text-muted-foreground text-lg">
            Xplainfy combines guided thinking, structured research, and step-by-step solutions into one seamless workflow.
            Built for engineers, teachers, researchers, medical professionals, business owners, students—anyone who values understanding over guesswork.
          </p>
        </motion.div>

        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              whileHover={{ y: -6 }}
              className="group relative rounded-2xl border border-border/70 bg-card p-6 shadow-soft hover:shadow-elevated transition-all duration-500"
            >
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="grid place-items-center w-10 h-10 rounded-xl bg-gradient-primary text-primary-foreground shadow-glow mb-4">
                <f.icon className="w-5 h-5" />
              </div>
              <h3 className="font-display text-lg font-semibold leading-tight">{f.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Product;
