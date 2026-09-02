import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Download } from "lucide-react";
import Desktop_1 from "@/images/Mockup_Desktop_1.png?url";
import Mobile_1 from "@/images/Mockup_Android_1.png?url";

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 12 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const visualVariants = {
    hidden: { opacity: 0, x: 24, scale: 0.97 },
    visible: { opacity: 1, x: 0, scale: 1, transition: { duration: 0.6, delay: 0.08 } },
  };

  return (
    <section id="home" className="relative overflow-hidden bg-slate-50 min-h-screen flex items-center pt-20 lg:pt-24">
      <div className="container">
        <div className="grid gap-8 lg:grid-cols-[1fr_1.3fr] lg:gap-16 lg:items-center">
          {/* LEFT COLUMN: TEXT & BUTTONS */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="flex flex-col"
          >
            <motion.h1
              variants={itemVariants}
              className="text-5xl font-semibold tracking-[-0.06em] text-slate-900 md:text-6xl"
            >
              Anything explained.
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="mt-6 text-lg leading-7 text-slate-600 md:text-xl"
            >
              Start with a question, build the evidence, and turn complex work into a clear answer your team can use.
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center"
            >
              <Button
                size="lg"
                asChild
                className="bg-blue-600 text-white hover:bg-blue-700"
              >
                <a href="/downloads" className="inline-flex items-center gap-2">
                  <Download className="h-4 w-4" />
                  Start exploring
                </a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                asChild
                className="border-slate-200 bg-white text-slate-700 hover:bg-slate-50"
              >
                <a href="/product" className="inline-flex items-center gap-2">
                  See workflow
                  <ArrowRight className="h-4 w-4" />
                </a>
              </Button>
            </motion.div>
          </motion.div>

          {/* RIGHT COLUMN: PRODUCT MOCKUPS */}
          <motion.div
            variants={visualVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="hidden lg:flex justify-end"
          >
            <div className="relative w-full max-w-2xl flex gap-4 items-center justify-end">
              {/* Desktop View: Show Android Image */}
              <div className="rounded-xl overflow-hidden shadow-soft border border-slate-200">
                <img
                  src={Mobile_1}
                  alt="Xplainfy Mobile"
                  className="w-full h-auto max-w-sm"
                  loading="lazy"
                />
              </div>
            </div>
          </motion.div>

          {/* MOBILE VIEW: Show Desktop Image */}
          <motion.div
            variants={visualVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="lg:hidden"
          >
            <div className="rounded-xl overflow-hidden shadow-soft border border-slate-200">
              <img
                src={Desktop_1}
                alt="Xplainfy Desktop"
                className="w-full h-auto"
                loading="lazy"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;