// ExampleOutputs.tsx (White mode)
import { motion } from "framer-motion";
import { ClipboardList, FileSearch, Sparkles } from "lucide-react";

const examples = [
  {
    title: "Engineering Analysis",
    input: "Optimize the thermal design for a compact drone battery system.",
    research: "Key sources identified thermal bottlenecks, material trade-offs, and cooling strategies.",
    reasoning: "We compared cell chemistry, airflow design, and weight trade-offs to balance runtime and temperature.",
    solution: "Recommend a lightweight active venting system plus phase-change inserts for predictable cooling.",
    report: "A technical summary with risk factors, projected temperature range, and manufacturing guidance.",
    color: "from-sky-500 to-cyan-500",
  },
  {
    title: "Medical Investigation",
    input: "Compare treatment protocols for chronic migraine in adults.",
    research: "Evidence was mapped from clinical trials, efficacy rates, and side effect profiles.",
    reasoning: "We evaluated treatment trade-offs using patient history, tolerance, and time-to-relief priorities.",
    solution: "Recommend a prioritized protocol with first-line medication, lifestyle changes, and monitoring checkpoints.",
    report: "A concise recommendation with supporting data, expected outcomes, and follow-up steps.",
    color: "from-violet-500 to-fuchsia-500",
  },
  {
    title: "Business Decision",
    input: "Evaluate the next quarter launch strategy for our AI product.",
    research: "Market signals, competitor positioning, and customer readiness were collected and weighted.",
    reasoning: "We weighed growth, resource constraints, and differentiation to identify the strongest go-to-market option.",
    solution: "Recommend a phased launch with targeted pilot customers, messaging focus, and operational readiness checks.",
    report: "A clear execution roadmap with milestones, risks, and metrics for success.",
    color: "from-emerald-500 to-lime-500",
  },
];

const ExampleOutputs = () => (
  <section id="outputs" className="py-24 md:py-32 bg-white">
    <div className="container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="max-w-3xl mx-auto text-center"
      >
        <span className="text-sm font-semibold uppercase tracking-wider text-blue-600">Example outputs</span>
        <h2 className="mt-3 font-display text-4xl md:text-5xl font-bold tracking-tight text-gray-900">
          Real workflow results, not just feature descriptions
        </h2>
        <p className="mt-4 text-gray-600 text-lg leading-relaxed max-w-2xl mx-auto">
          Each example shows how Xplainfy turns a question into research, reasoning, and a usable recommendation.
        </p>
      </motion.div>

      <div className="mt-16 grid gap-6 md:grid-cols-3">
        {examples.map((example, index) => (
          <motion.div
            key={example.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: index * 0.08 }}
            className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm hover:shadow-lg transition-all duration-300"
          >
            <div className={`inline-flex items-center gap-2 rounded-2xl bg-gradient-to-r ${example.color} px-3 py-2 text-white mb-5`}>
              <Sparkles className="w-4 h-4" />
              <span className="text-xs uppercase tracking-[0.2em]">{example.title}</span>
            </div>

            <div className="space-y-4">
              <div className="rounded-2xl bg-gray-50 p-4 border border-gray-200">
                <p className="text-xs uppercase tracking-[0.2em] text-gray-500">Question</p>
                <p className="mt-3 text-sm font-medium leading-snug text-gray-900">{example.input}</p>
              </div>

              <div className="rounded-2xl bg-gray-50 p-4 border border-gray-200">
                <div className="flex items-center gap-2 text-sm font-semibold text-blue-600">
                  <FileSearch className="w-4 h-4" />
                  Research
                </div>
                <p className="mt-2 text-sm text-gray-600 leading-relaxed">{example.research}</p>
              </div>

              <div className="rounded-2xl bg-gray-50 p-4 border border-gray-200">
                <div className="flex items-center gap-2 text-sm font-semibold text-blue-600">
                  <Sparkles className="w-4 h-4" />
                  Reasoning
                </div>
                <p className="mt-2 text-sm text-gray-600 leading-relaxed">{example.reasoning}</p>
              </div>

              <div className="rounded-2xl bg-gray-50 p-4 border border-gray-200">
                <div className="flex items-center gap-2 text-sm font-semibold text-blue-600">
                  <ClipboardList className="w-4 h-4" />
                  Final report
                </div>
                <p className="mt-2 text-sm text-gray-600 leading-relaxed">{example.report}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ExampleOutputs;