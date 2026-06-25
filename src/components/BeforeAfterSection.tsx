// BeforeAfterSection.tsx (White mode)
import { motion } from "framer-motion";

const items = [
  {
    before: "Scattered information and unclear priorities.",
    after: "Focused research with a clear question and direction.",
  },
  {
    before: "Evidence is buried in notes and guesses.",
    after: "Research is organized, cited, and evaluated.",
  },
  {
    before: "Logic is hidden, conclusions feel unsupported.",
    after: "Every recommendation is backed by a reasoning trail.",
  },
  {
    before: "Solutions are hard to act on or share.",
    after: "Final outcomes are structured, reviewable, and ready to present.",
  },
  {
    before: "Work gets lost across tools and documents.",
    after: "The full workflow lives in one platform from question to report.",
  },
];

const BeforeAfterSection = () => (
  <section id="transformation" className="py-24 md:py-32 bg-white">
    <div className="container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="max-w-3xl mx-auto text-center"
      >
        <span className="text-sm font-semibold uppercase tracking-wider text-blue-600">Before vs after</span>
        <h2 className="mt-3 font-display text-4xl md:text-5xl font-bold tracking-tight text-gray-900">
          Move from messy research to a structured solution and a polished report.
        </h2>
        <p className="mt-4 text-gray-600 text-lg leading-relaxed max-w-2xl mx-auto">
          Xplainfy turns uncertain work into a repeatable workflow that teams can trust, share, and act on.
        </p>
      </motion.div>

      <div className="mt-16 grid gap-6 lg:grid-cols-2">
        {items.map((item, index) => (
          <motion.div
            key={item.before}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: index * 0.05 }}
            className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm"
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-3xl bg-gray-50 p-5 border border-gray-200">
                <p className="text-xs uppercase tracking-[0.24em] text-gray-500">Before</p>
                <p className="mt-3 text-sm leading-relaxed text-gray-600">{item.before}</p>
              </div>
              <div className="rounded-3xl bg-blue-50 p-5 border border-blue-200">
                <p className="text-xs uppercase tracking-[0.24em] text-blue-600">After</p>
                <p className="mt-3 text-sm leading-relaxed text-gray-900">{item.after}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default BeforeAfterSection;