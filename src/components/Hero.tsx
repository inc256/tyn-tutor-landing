// Hero.tsx (All white background, visible text)
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Globe, ArrowRight, Sparkles, Zap, Shield } from "lucide-react";

const Hero = () => {
  return (
    <section id="home" className="relative overflow-hidden py-28 md:py-32 bg-white">
      {/* Decorative blobs - very subtle */}
      <div className="pointer-events-none absolute -top-24 -left-24 w-96 h-96 rounded-full bg-blue-100/30 blur-3xl" />
      <div className="pointer-events-none absolute top-16 -right-32 w-[28rem] h-[28rem] rounded-full bg-purple-100/30 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 left-1/2 -translate-x-1/2 w-[40rem] h-[40rem] rounded-full bg-blue-100/20 blur-3xl" />

      <div className="container relative">
        <div className="flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-6"
          >
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight"
          >
            <span className="text-gray-900">Anything Explained</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-6 text-lg md:text-xl text-gray-700 leading-relaxed max-w-3xl"
          >
            A workspace for professionals who research, think through complex problems, 
            build solutions, and create reports with confidence.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center"
          >
            <Button 
              size="xl" 
              asChild
              className="bg-blue-600 hover:bg-blue-700 text-white shadow-lg shadow-blue-600/25 hover:shadow-blue-600/35 transition-all duration-200"
            >
              <a 
                href="https://app.xplainfy.net" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="inline-flex items-center gap-2"
              >
                <Globe className="w-5 h-5" />
                Start Exploring — It's Free
              </a>
            </Button>
            <Button 
              size="xl" 
              asChild 
              className="w-full sm:w-auto bg-transparent border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-all duration-200"
            >
              <a href="/downloads" className="inline-flex items-center gap-2">
                View Downloads
                <ArrowRight className="w-4 h-4" />
              </a>
            </Button>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mt-8 text-xs uppercase tracking-[0.3em] text-gray-500"
          >
            For engineers, researchers, consultants, analysts, learners and business teams
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.4 }}
            className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl w-full"
          >
            <div className="rounded-2xl border border-gray-200 bg-white shadow-sm hover:shadow-md transition-shadow duration-200 p-6 text-left">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 rounded-xl bg-blue-50 text-blue-600">
                  <Shield className="w-5 h-5" />
                </div>
                <p className="font-semibold text-gray-900">Research</p>
              </div>
              <p className="text-sm text-gray-600 leading-relaxed">
                Gather context, evidence, and relevant information from multiple perspectives.
              </p>
            </div>

            <div className="rounded-2xl border border-gray-200 bg-white shadow-sm hover:shadow-md transition-shadow duration-200 p-6 text-left">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 rounded-xl bg-blue-50 text-blue-600">
                  <Zap className="w-5 h-5" />
                </div>
                <p className="font-semibold text-gray-900">Think</p>
              </div>
              <p className="text-sm text-gray-600 leading-relaxed">
                Apply structured reasoning to connect ideas, evaluate options, and solve complex problems.
              </p>
            </div>

            <div className="rounded-2xl border border-gray-200 bg-white shadow-sm hover:shadow-md transition-shadow duration-200 p-6 text-left">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 rounded-xl bg-blue-50 text-blue-600">
                  <Sparkles className="w-5 h-5" />
                </div>
                <p className="font-semibold text-gray-900">Report</p>
              </div>
              <p className="text-sm text-gray-600 leading-relaxed">
                Generate professional reports that clearly explain the research, reasoning, and final outcome.
              </p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Hero;