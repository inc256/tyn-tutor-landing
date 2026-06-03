import { motion } from "framer-motion";
import { Brain, Search, FileText, Workflow, Globe, Edit3 } from "lucide-react";

const features = [
  {
    icon: Brain,
    title: "Problem Framing",
    desc: "Stop starting with vague questions. Xplainfy turns complexity into a precise, actionable problem statement.",
    preview: "Clear question framing and objective definition",
  },
  {
    icon: Search,
    title: "Evidence Research",
    desc: "Instead of scattered notes, gather and summarize the right sources to support every claim.",
    preview: "Verified research briefs and insight summaries",
  },
  {
    icon: Workflow,
    title: "Guided Reasoning",
    desc: "Every step is checked, compared, and documented so conclusions are not just plausible, but defensible.",
    preview: "Logical decision pathways and explanation trails",
  },
  {
    icon: FileText,
    title: "Actionable Solutions",
    desc: "Convert reasoning into clear recommendations, plans, or decisions ready for execution.",
    preview: "Structured solution outlines and next-step guidance",
  },
  {
    icon: Edit3,
    title: "Report Generation",
    desc: "Produce polished summaries that capture findings, logic, and outcomes in one shareable document.",
    preview: "Executive-ready reports with full context",
  },
  {
    icon: Globe,
    title: "Workflow Continuity",
    desc: "Keep the entire process connected across devices so nothing gets lost between research, reasoning, and reporting.",
    preview: "Consistent workflow across web, desktop, and mobile",
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
          <span className="text-sm font-semibold uppercase tracking-wider text-primary">Workflow stages</span>
          <h2 className="mt-3 font-display text-4xl md:text-5xl font-bold tracking-tight">
            Every stage is designed to move you from question to decision.
          </h2>
          <p className="mt-4 text-muted-foreground text-lg leading-relaxed">
            See how Xplainfy turns complex problems into evidence-backed reasoning, actionable solutions, and polished reports.
          </p>
        </motion.div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              whileHover={{ y: -6 }}
              className="group flex h-full flex-col rounded-3xl border border-border/70 bg-card p-7 shadow-soft hover:shadow-elevated transition-all duration-300"
            >
              <div className="grid place-items-center w-12 h-12 rounded-3xl bg-gradient-primary text-primary-foreground shadow-glow mb-5">
                <feature.icon className="w-5 h-5" />
              </div>
              <h3 className="font-display text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{feature.desc}</p>
              <div className="mt-6 rounded-3xl bg-background/90 border border-border/60 p-4 text-sm text-muted-foreground">
                <span className="font-semibold text-foreground">Outcome</span>
                <p className="mt-2 leading-relaxed">{feature.preview}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Product;
