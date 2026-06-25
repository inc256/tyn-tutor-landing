// InsightsSection.tsx (All white background, visible text)
import React, { useState, useEffect, useRef, useCallback } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

import Desktop_1 from "@/images/Mockup_Desktop_1.png";
import Desktop_2 from "@/images/Mockup_Desktop_2.png";
import Desktop_3 from "@/images/Mockup_Desktop_3.png";
import Mobile_1 from "@/images/Mockup_Android_1.png";
import Mobile_2 from "@/images/Mockup_Android_2.png";
import Mobile_3 from "@/images/Mockup_Android_3.png";

const slides = [
  {
    id: "home-dashboard",
    title: "Home Dashboard",
    description: "A focused hub for project context, priorities, and quick actions.",
    image: Desktop_1,
    mobileImage: Mobile_1,
    tag: "Dashboard",
  },
  {
    id: "history-research",
    title: "History Research",
    description: "Open a research file inside history and continue your investigation with full context.",
    image: Desktop_2,
    mobileImage: Mobile_3,
    tag: "Research",
  },
  {
    id: "history-pages",
    title: "History Pages",
    description: "Browse your workflow history with clear navigation through saved pages and insights.",
    image: Desktop_3,
    mobileImage: Mobile_2,
    tag: "History",
  },
];

const InsightsSection: React.FC = () => {
  const [index, setIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const autoplayRef = useRef<number | null>(null);

  const next = useCallback(() => setIndex((i) => (i + 1) % slides.length), []);
  const prev = useCallback(() => setIndex((i) => (i - 1 + slides.length) % slides.length), []);
  const goTo = useCallback((i: number) => setIndex(i), []);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [next, prev]);

  // Autoplay
  useEffect(() => {
    autoplayRef.current = window.setInterval(() => {
      setIndex((i) => (i + 1) % slides.length);
    }, 6000);
    return () => {
      if (autoplayRef.current) window.clearInterval(autoplayRef.current);
    };
  }, []);

  return (
    <section id="insights" className="py-16 md:py-24 bg-white relative">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center mb-8">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-gray-900">App Insights</h2>
          <p className="mt-3 text-gray-600">Interactive examples that show how Xplainfy turns inputs into structured outputs.</p>
        </div>

        <div ref={containerRef} className="mx-auto max-w-6xl">
          <div className="relative rounded-2xl bg-white border border-gray-200 shadow-lg overflow-hidden">
            {/* Screenshot hero */}
            <div className="p-6 md:p-8 flex flex-col md:flex-row items-start gap-6">
              <div className="flex-1 flex items-center justify-center">
                <motion.div
                  key={slides[index].id}
                  initial={{ opacity: 0, x: 40 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -40 }}
                  transition={{ duration: 0.36 }}
                  className="w-full flex items-center justify-center"
                >
                  <picture>
                    <source media="(max-width: 767px)" srcSet={slides[index].mobileImage} />
                    <img
                      src={slides[index].image}
                      alt={slides[index].title}
                      className="insight-screenshot rounded-lg shadow-md"
                      loading="lazy"
                    />
                  </picture>
                </motion.div>
              </div>

              <div className="md:w-80 flex-shrink-0">
                <div className="flex items-center justify-between">
                  <span className="px-3 py-1 rounded-full text-xs font-semibold bg-blue-50 text-blue-700 border border-blue-200">{slides[index].tag}</span>
                  <div className="flex items-center gap-2">
                    <button onClick={prev} aria-label="Previous" className="p-2 rounded-md bg-gray-100 hover:bg-gray-200 transition text-gray-700">
                      <ChevronLeft className="w-5 h-5" />
                    </button>
                    <button onClick={next} aria-label="Next" className="p-2 rounded-md bg-gray-100 hover:bg-gray-200 transition text-gray-700">
                      <ChevronRight className="w-5 h-5" />
                    </button>
                  </div>
                </div>

                <h3 className="mt-6 font-display text-xl font-bold text-gray-900">{slides[index].title}</h3>
                <p className="mt-2 text-gray-600">{slides[index].description}</p>

                <div className="mt-6 flex items-center gap-3">
                  {slides.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => goTo(i)}
                      aria-label={`Go to slide ${i + 1}`}
                      className={`w-3 h-3 rounded-full transition ${i === index ? "bg-blue-600 w-7 h-2.5 rounded-full" : "bg-gray-300"}`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InsightsSection;