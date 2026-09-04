import { useCallback, useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Download } from "lucide-react";

// Image imports - using your original paths
import Android_1 from "@/images/Mockup_Android_1.png?url";
import Android_2 from "@/images/Mockup_Android_2.png?url";
import Android_3 from "@/images/Mockup_Android_3.png?url";
import Desktop_1 from "@/images/Mockup_Desktop_1.png?url";
import Desktop_2 from "@/images/Mockup_Desktop_2.png?url";
import Desktop_3 from "@/images/Mockup_Desktop_3.png?url";

const androidSlides = [Android_1, Android_2, Android_3];
const desktopSlides = [Desktop_1, Desktop_2, Desktop_3];

const slideDuration = 4000;

const HeroSlideshow = ({ 
  slides, 
  alt, 
  className = "" 
}: { 
  slides: string[]; 
  alt: string; 
  className?: string;
}) => {
  const [activeSlide, setActiveSlide] = useState(0);
  const [progress, setProgress] = useState(0);
  const animationFrameRef = useRef<number | null>(null);
  const startedAtRef = useRef(0);
  const remainingRef = useRef(slideDuration);
  const isPausedRef = useRef(false);

  const runProgress = useCallback(() => {
    startedAtRef.current = performance.now();

    const updateProgress = (timestamp: number) => {
      if (isPausedRef.current) {
        return;
      }

      const elapsed = timestamp - startedAtRef.current;
      const elapsedForSlide = Math.min(elapsed, remainingRef.current);
      setProgress((slideDuration - remainingRef.current + elapsedForSlide) / slideDuration);

      if (elapsed >= remainingRef.current) {
        setActiveSlide((current) => (current + 1) % slides.length);
        return;
      }

      animationFrameRef.current = requestAnimationFrame(updateProgress);
    };

    animationFrameRef.current = requestAnimationFrame(updateProgress);
  }, [slides.length]);

  useEffect(() => {
    remainingRef.current = slideDuration;
    setProgress(0);
    runProgress();

    return () => {
      if (animationFrameRef.current !== null) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [activeSlide, runProgress]);

  const pauseSlideshow = () => {
    if (isPausedRef.current) {
      return;
    }

    isPausedRef.current = true;

    if (animationFrameRef.current !== null) {
      cancelAnimationFrame(animationFrameRef.current);
    }

    const elapsed = performance.now() - startedAtRef.current;
    remainingRef.current = Math.max(0, remainingRef.current - elapsed);
    setProgress((slideDuration - remainingRef.current) / slideDuration);
  };

  const resumeSlideshow = () => {
    if (!isPausedRef.current) {
      return;
    }

    isPausedRef.current = false;
    runProgress();
  };

  return (
    <div 
      className={`relative overflow-hidden bg-slate-50 ${className}`}
      onMouseEnter={pauseSlideshow}
      onMouseLeave={resumeSlideshow}
    >
      <div className="relative w-full h-full">
        <AnimatePresence initial={false} mode="wait">
          <motion.img
            key={slides[activeSlide]}
            src={slides[activeSlide]}
            alt={alt}
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ duration: 0.7, ease: "easeInOut" }}
            className="absolute inset-0 w-full h-full object-contain"
            loading="lazy"
          />
        </AnimatePresence>
      </div>
      {/* Progress bar */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-slate-200/50">
        <div 
          className="h-full bg-gradient-to-r from-blue-600 to-blue-400 rounded-r-full"
          style={{ width: `${progress * 100}%` }}
        />
      </div>
    </div>
  );
};

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
    <section 
      id="home" 
      className="relative overflow-hidden bg-slate-50 min-h-screen flex items-center pt-20 lg:pt-24"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[1fr_1.3fr] lg:gap-16 lg:items-center">
          {/* LEFT COLUMN: TEXT & BUTTONS */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="flex flex-col hero-content"
          >
            <motion.h1
              variants={itemVariants}
              className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-serif font-bold tracking-tight text-slate-900 leading-[1.05]"
            >
              Anything explained.
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="mt-6 text-lg md:text-xl text-slate-600 max-w-[540px] leading-[1.8] tracking-[-0.01em]"
            >
              Start with a question, build the evidence, and turn complex work into a{" "}
              <span className="font-medium text-slate-800">clear answer</span> your team can use.
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="mt-8 flex flex-col sm:flex-row gap-3 w-full sm:w-auto"
            >
              <Button
                size="lg"
                asChild
                className="bg-blue-600 text-white hover:bg-blue-700 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 font-semibold tracking-wide px-6 py-0 h-10 min-w-[160px]"
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
                className="border-2 border-slate-200 bg-white/80 backdrop-blur-sm text-slate-700 hover:border-blue-600 hover:bg-blue-50/50 hover:-translate-y-0.5 transition-all duration-300 font-semibold tracking-wide px-6 py-0 h-10 min-w-[160px]"
              >
                <a href="/product" className="inline-flex items-center gap-2">
                  See workflow
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>
              </Button>
            </motion.div>
          </motion.div>

          {/* RIGHT COLUMN: ANDROID SLIDESHOW (DESKTOP VISIBLE) */}
          <motion.div
            variants={visualVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="hidden lg:flex justify-end"
          >
            <div className="relative w-full max-w-2xl flex gap-4 items-center justify-end">
              <div className="rounded-2xl overflow-hidden shadow-soft border border-slate-200/50 bg-white max-w-sm w-full transition-transform duration-300 hover:-translate-y-1 hover:shadow-xl">
                <HeroSlideshow 
                  slides={androidSlides} 
                  alt="Xplainfy Mobile" 
                  className="aspect-[9/16]"
                />
              </div>
            </div>
          </motion.div>

          {/* MOBILE VIEW: DESKTOP SLIDESHOW */}
          <motion.div
            variants={visualVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="lg:hidden"
          >
            <div className="max-w-full sm:max-w-[600px] lg:max-w-[700px] mx-auto rounded-2xl overflow-hidden shadow-soft border border-slate-200/50 bg-white">
              <HeroSlideshow 
                slides={desktopSlides} 
                alt="Xplainfy Desktop" 
                className="aspect-[16/9]"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;