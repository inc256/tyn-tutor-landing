// WorkflowSection.tsx (White mode)
import { motion } from "framer-motion";
import { Search, Lightbulb, Layers, FileText, FileCheck } from "lucide-react";

const steps = [
  {
    title: "Question",
    input: "A real problem, objective, or decision brief.",
    process: "Frame the challenge with context, constraints, and success criteria.",
    output: "A clear question that drives focused work.",
    icon: Search,
  },
  {
    title: "Research",
    input: "Raw sources, documents, and domain information.",
    process: "Extract evidence, summarize findings, and surface the most relevant insights.",
    output: "A concise research brief with verified context.",
    icon: Layers,
  },
  {
    title: "Reasoning",
    input: "Structured evidence, assumptions, and competing options.",
    process: "Build step-by-step logic, test alternatives, and document why each choice matters.",
    output: "A transparent reasoning trail that supports every conclusion.",
    icon: Lightbulb,
  },
  {
    title: "Solution",
    input: "Reasoned findings and validated direction.",
    process: "Convert logic into practical recommendations, decisions, or action plans.",
    output: "A solution set you can apply, share, or iterate on.",
    icon: FileText,
  },
  {
    title: "Report",
    input: "The full workflow, findings, and recommendations.",
    process: "Package the entire thread into a polished export-ready summary.",
    output: "A professional report for stakeholders, reviews, or handoff.",
    icon: FileCheck,
  },
];

const WorkflowSection = () => (
  <section id="workflow" className="py-24 md:py-32 bg-white">
    <div className="container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="max-w-3xl mx-auto text-center"
      >
        <span className="text-sm font-semibold uppercase tracking-wider text-blue-600">Workflow</span>
        <h2 className="mt-3 font-display text-4xl md:text-5xl font-bold tracking-tight text-gray-900">
          A connected workflow from question to final report
        </h2>
        <p className="mt-4 text-gray-600 text-lg leading-relaxed max-w-2xl mx-auto">
          Xplainfy guides every step of your inquiry, keeping the process clear, evidence-based, and ready for action.
        </p>
      </motion.div>

      <div className="mt-16 grid gap-8 lg:grid-cols-5 lg:items-start">
        {steps.map((step, index) => {
          const Icon = step.icon;
          return (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="relative rounded-3xl border border-gray-200 bg-white p-7 shadow-sm hover:shadow-lg transition-all duration-300"
            >
              <div className="flex items-center justify-center w-14 h-14 rounded-2xl bg-blue-50 text-blue-600 mb-5">
                <Icon className="w-6 h-6" />
              </div>
              <div className="text-sm font-semibold uppercase tracking-[0.18em] text-gray-500 mb-3">
                Step {index + 1}
              </div>
              <h3 className="font-display text-xl font-semibold text-gray-900 mb-3">{step.title}</h3>
              <div className="space-y-3 text-sm leading-relaxed text-gray-600">
                <div>
                  <span className="font-semibold text-gray-900">Input: </span>{step.input}
                </div>
                <div>
                  <span className="font-semibold text-gray-900">Process: </span>{step.process}
                </div>
                <div>
                  <span className="font-semibold text-gray-900">Output: </span>{step.output}
                </div>
              </div>

              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 right-[-42px] h-0.5 w-20 bg-gray-300" />
              )}
            </motion.div>
          );
        })}
      </div>

      <div className="mt-10 text-center">
        <p className="text-gray-600 text-sm max-w-2xl mx-auto">
          Every stage is designed to preserve context, support critical thinking, and produce outputs you can trust.
        </p>
      </div>
    </div>
  </section>
);

export default WorkflowSection;