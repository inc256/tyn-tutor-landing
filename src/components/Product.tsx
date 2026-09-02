import { motion } from "framer-motion";
import { ArrowRight, BrainCircuit, FileText, NotebookText, Search, Sparkles } from "lucide-react";

const workflow = [
  { title: "Start with a question", description: "Frame the problem clearly before any research begins.", icon: Search },
  { title: "Understand the evidence", description: "Collect the relevant facts, papers, notes, and context in one place.", icon: NotebookText },
  { title: "Build your answer", description: "Reason through trade-offs, compare options, and document the logic.", icon: BrainCircuit },
  { title: "Keep everything together", description: "Turn the process into a structured report that is easy to share and review.", icon: FileText },
];

const Product = () => {
  return (
    <section id="product" className="bg-white py-24 md:py-32">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-3xl text-center"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-600">Product</p>
          <h2 className="mt-4 text-4xl font-semibold tracking-[-0.06em] text-slate-900 md:text-5xl">
            A calmer way to understand complex work.
          </h2>
          <p className="mt-5 text-base leading-7 text-slate-600 md:text-lg">
            Xplainfy keeps research, reasoning, and communication in one thread so the answer is clear, documented, and traceable.
          </p>
        </motion.div>

        <div className="mt-16 grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
          <div className="space-y-4">
            {workflow.map((step, index) => {
              const Icon = step.icon;

              return (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, x: -18 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.42, delay: index * 0.05 }}
                  className="rounded-2xl border border-slate-200 bg-slate-50 p-5 shadow-sm"
                >
                  <div className="flex items-start gap-4">
                    <div className="mt-0.5 flex h-10 w-10 items-center justify-center rounded-xl bg-white text-blue-600 shadow-sm ring-1 ring-slate-200">
                      <Icon className="h-4 w-4" />
                    </div>
                    <div>
                      <p className="text-sm font-medium uppercase tracking-[0.18em] text-slate-500">0{index + 1}</p>
                      <h3 className="mt-2 text-xl font-semibold text-slate-900">{step.title}</h3>
                      <p className="mt-2 text-sm leading-6 text-slate-600">{step.description}</p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          <motion.div
            initial={{ opacity: 0, x: 18 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.55 }}
            className="overflow-hidden rounded-[1.75rem] border border-slate-200 bg-slate-50 p-3 shadow-soft"
          >
            <div className="rounded-[1.35rem] border border-slate-200 bg-white p-4 md:p-6">
              <div className="mb-5 flex items-center justify-between border-b border-slate-200 pb-4">
                <div className="flex items-center gap-2">
                  <span className="h-2.5 w-2.5 rounded-full bg-slate-300" />
                  <span className="h-2.5 w-2.5 rounded-full bg-slate-300" />
                  <span className="h-2.5 w-2.5 rounded-full bg-slate-300" />
                </div>
                <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-2.5 py-1 text-[10px] font-medium uppercase tracking-[0.18em] text-slate-500">
                  <Sparkles className="h-3 w-3 text-blue-600" />
                  Analysis
                </div>
              </div>

              <div className="space-y-4">
                <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                  <p className="text-xs font-medium uppercase tracking-[0.2em] text-slate-500">Prompt</p>
                  <p className="mt-3 text-base font-medium leading-7 text-slate-800">
                    Evaluate the operational risk of launching in three new markets this quarter.
                  </p>
                </div>

                <div className="grid gap-4 md:grid-cols-2">
                  <div className="rounded-2xl border border-slate-200 bg-white p-4">
                    <p className="text-xs font-medium uppercase tracking-[0.2em] text-slate-500">Evidence</p>
                    <ul className="mt-3 space-y-2 text-sm leading-6 text-slate-600">
                      <li>• Regulatory changes</li>
                      <li>• Operational constraints</li>
                      <li>• Competitive benchmarks</li>
                    </ul>
                  </div>
                  <div className="rounded-2xl border border-blue-200 bg-blue-50 p-4">
                    <p className="text-xs font-medium uppercase tracking-[0.2em] text-blue-700">Recommendation</p>
                    <p className="mt-3 text-sm leading-6 text-slate-700">
                      Launch in phases, start with one market, and validate the operating model before scaling further.
                    </p>
                  </div>
                </div>

                <div className="rounded-2xl border border-slate-200 bg-white p-4">
                  <div className="flex items-center justify-between gap-3">
                    <p className="text-xs font-medium uppercase tracking-[0.2em] text-slate-500">Decision summary</p>
                    <button className="inline-flex items-center gap-2 text-sm font-medium text-blue-600">
                      View report
                      <ArrowRight className="h-4 w-4" />
                    </button>
                  </div>
                  <p className="mt-3 text-sm leading-6 text-slate-600">
                    Market expansion is viable only when the operating, legal, and support constraints are accounted for in the rollout plan.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Product;