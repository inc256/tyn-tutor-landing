import { motion } from "framer-motion";
import { Brain, Search, FileText, Workflow, Upload, Trophy } from "lucide-react";

const features = [
  {
    icon: Brain,
    title: "AI Tutor",
    desc: "Explanations that feel like a patient human tutor, tailored to your level.",
  },
  {
    icon: Upload,
    title: "Upload Any Content",
    desc: "From PDFs to PPTs and learn everything your way — upload your materials and get personalized learning.",
  },
  {
    icon: Search,
    title: "Smart Research",
    desc: "Summarize articles, papers, and videos into the points that matter.",
  },
  {
    icon: Trophy,
    title: "Quizzes",
    desc: "Test yourself to see your progress — challenge your knowledge and track improvement.",
  },
  {
    icon: FileText,
    title: "Answer Generator",
    desc: "Draft essays, study notes, and step-by-step solutions in seconds.",
  },
  {
    icon: Workflow,
    title: "Fast Workflow",
    desc: "Problem → Research → Answer. One flow, zero friction.",
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
          <span className="text-sm font-semibold uppercase tracking-wider text-primary">Product</span>
          <h2 className="mt-3 font-display text-4xl md:text-5xl font-bold">
            Everything you need to learn well
          </h2>
          <p className="mt-4 text-muted-foreground text-lg">
            Six focused tools that work together — so you spend more time learning and less time wrestling with apps.
          </p>
        </motion.div>

        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              whileHover={{ y: -6 }}
              className="group relative rounded-2xl border border-border/70 bg-card p-7 shadow-soft hover:shadow-elevated transition-shadow"
            >
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="grid place-items-center w-12 h-12 rounded-xl bg-gradient-primary text-primary-foreground shadow-glow mb-5">
                <f.icon className="w-6 h-6" />
              </div>
              <h3 className="font-display text-xl font-semibold">{f.title}</h3>
              <p className="mt-2 text-muted-foreground leading-relaxed">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Product;
