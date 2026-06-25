// InsightsSection.tsx (All white background, visible text)
import React, { useState, useEffect, useRef, useCallback } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

// Import images with proper Vite asset handling
import Desktop_1 from "@/images/Mockup_Desktop_1.png?url";
import Desktop_2 from "@/images/Mockup_Desktop_2.png?url";
import Desktop_3 from "@/images/Mockup_Desktop_3.png?url";
import Mobile_1 from "@/images/Mockup_Android_1.png?url";
import Mobile_2 from "@/images/Mockup_Android_2.png?url";
import Mobile_3 from "@/images/Mockup_Android_3.png?url";

const slides = [
  {
    id: "home-dashboard",
    desktop: {
      title: "Home Dashboard",
      description: "A focused hub for project context, priorities, and quick actions.",
      image: Desktop_1,
    },
    mobile: {
      title: "Dashboard on the Go",
      description: "Access your projects, priorities, and actions from anywhere with a mobile-optimized interface.",
      image: Mobile_1,
    },
    tag: "Dashboard",
  },
  {
    id: "history-research",
    desktop: {
      title: "History Research",
      description: "Open a research file inside history and continue your investigation with full context.",
      image: Desktop_2,
    },
    mobile: {
      title: "Set to Prefered Theme",
      description: "Experience a workspace that adapts to you—seamlessly switch between light and dark themes.",
      image: Mobile_2,
    },
    tag: "Research",
  },
  {
    id: "history-pages",
    desktop: {
      title: "History Pages",
      description: "Browse your workflow history with clear navigation through saved pages and insights.",
      image: Desktop_3,
    },
    mobile: {
      title: "History at Your Fingertips",
      description: "Navigate your workflow history with intuitive mobile controls, saved pages, and quick insights.",
      image: Mobile_3,
    },
    tag: "History",
  },
];

const InsightsSection: React.FC = () => {
  const [index, setIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const autoplayRef = useRef<number | null>(null);
  const [isMobile, setIsMobile] = useState(false);

  // Check if mobile viewport
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

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

  const currentSlide = slides[index];
  const currentContent = isMobile ? currentSlide.mobile : currentSlide.desktop;
  const currentImage = isMobile ? currentSlide.mobile.image : currentSlide.desktop.image;

  // Debug: Log the image path to verify it's loading
  console.log('Current image path:', currentImage);

  return (
    <section id="insights" className="py-16 md:py-24 bg-white relative">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-8">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-gray-900">App Insights</h2>
          <p className="mt-3 text-gray-600">Interactive examples that show how Xplainfy turns inputs into structured outputs.</p>
        </div>

        <div ref={containerRef} className="mx-auto max-w-6xl">
          <div className="relative rounded-2xl bg-white border border-gray-200 shadow-lg overflow-hidden">
            <div className="p-4 md:p-8 flex flex-col md:flex-row items-start gap-6">
              <div className="flex-1 w-full flex items-center justify-center">
                <motion.div
                  key={currentSlide.id + (isMobile ? '-mobile' : '-desktop')}
                  initial={{ opacity: 0, x: 40 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -40 }}
                  transition={{ duration: 0.36 }}
                  className="w-full flex items-center justify-center"
                >
                  <div className="w-full flex justify-center">
                    {currentImage ? (
                      <img
                        src={currentImage}
                        alt={currentContent.title}
                        className="rounded-lg shadow-md w-full max-w-[600px] h-auto object-contain"
                        loading="lazy"
                        style={{ maxHeight: '450px' }}
                        onError={(e) => {
                          console.error('Image failed to load:', {
                            src: currentImage,
                            title: currentContent.title,
                            isMobile: isMobile
                          });
                          e.currentTarget.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="400" height="300" viewBox="0 0 400 300"%3E%3Crect width="400" height="300" fill="%23f3f4f6"/%3E%3Ctext x="200" y="150" font-family="Arial" font-size="16" fill="%239ca3af" text-anchor="middle"%3ENo Image%3C/text%3E%3C/svg%3E';
                        }}
                      />
                    ) : (
                      <div className="w-full max-w-[600px] h-[300px] bg-gray-100 rounded-lg flex items-center justify-center text-gray-400">
                        No image available
                      </div>
                    )}
                  </div>
                </motion.div>
              </div>

              <div className="md:w-80 w-full flex-shrink-0">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <span className="px-3 py-1 rounded-full text-xs font-semibold bg-blue-50 text-blue-700 border border-blue-200">
                    {currentSlide.tag}
                  </span>
                  <div className="flex items-center gap-2">
                    <button 
                      onClick={prev} 
                      aria-label="Previous" 
                      className="p-2 rounded-md bg-gray-100 hover:bg-gray-200 transition text-gray-700 hover:scale-105 active:scale-95"
                    >
                      <ChevronLeft className="w-5 h-5" />
                    </button>
                    <button 
                      onClick={next} 
                      aria-label="Next" 
                      className="p-2 rounded-md bg-gray-100 hover:bg-gray-200 transition text-gray-700 hover:scale-105 active:scale-95"
                    >
                      <ChevronRight className="w-5 h-5" />
                    </button>
                  </div>
                </div>

                <h3 className="mt-6 font-display text-xl font-bold text-gray-900">
                  {currentContent.title}
                </h3>
                <p className="mt-2 text-gray-600">
                  {currentContent.description}
                </p>

                <div className="mt-6 flex items-center gap-3">
                  {slides.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => goTo(i)}
                      aria-label={`Go to slide ${i + 1}`}
                      className={`transition-all duration-300 ${i === index ? "bg-blue-600 w-7 h-2.5 rounded-full" : "bg-gray-300 w-3 h-3 rounded-full hover:bg-gray-400"}`}
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