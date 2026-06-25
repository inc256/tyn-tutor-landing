// SocialProofSection.tsx (White mode)
import { motion } from "framer-motion";
import { Users, Briefcase, BookOpen, HeartPulse } from "lucide-react";

const proofItems = [
  {
    title: "Engineers",
    description: "Solve design trade-offs with evidence-backed reasoning and technical reports that teams can act on.",
    icon: Briefcase,
  },
  {
    title: "Researchers",
    description: "Turn literature, data, and assumptions into a structured argument and a clear decision path.",
    icon: BookOpen,
  },
  {
    title: "Medical Professionals",
    description: "Use clinical evidence to support diagnoses, treatment decisions, and handoff-ready summaries.",
    icon: HeartPulse,
  },
  {
    title: "Business Teams",
    description: "Align strategy, market insight, and execution plans in a single workflow that stakeholders trust.",
    icon: Users,
  },
];

const SocialProofSection = () => (
  <section id="trust" className="py-24 md:py-32 bg-white">
    <div className="container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="max-w-3xl mx-auto text-center"
      >
        <span className="text-sm font-semibold uppercase tracking-wider text-blue-600">Trusted by professionals</span>
        <h2 className="mt-3 font-display text-4xl md:text-5xl font-bold tracking-tight text-gray-900">
          Built for real-world teams and outcomes
        </h2>
        <p className="mt-4 text-gray-600 text-lg leading-relaxed max-w-2xl mx-auto">
          Xplainfy helps experts move from uncertainty to clarity with confidence and speed.
        </p>
      </motion.div>

      <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {proofItems.map((item, index) => {
          const Icon = item.icon;
          return (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm hover:shadow-lg transition-all duration-300"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50 text-blue-600 mb-4">
                <Icon className="w-6 h-6" />
              </div>
              <h3 className="font-display text-xl font-semibold text-gray-900 mb-3">{item.title}</h3>
              <p className="text-gray-600 leading-relaxed">{item.description}</p>
            </motion.div>
          );
        })}
      </div>
    </div>
  </section>
);

export default SocialProofSection;