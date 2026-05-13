import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight, Sparkles, RotateCcw } from "lucide-react";

import homeDesktop from "@/images/home_desktop.png";
import homeMobile from "@/images/home_mobile.png";
import profileDesktop from "@/images/profile_desktop.png";
import profileMobile from "@/images/profile_mobile.png";
import researchDesktop from "@/images/research_desktop.png";
import researchMobile from "@/images/research_mobile.png";

const features = [
  {
    id: "home",
    title: "Home Dashboard",
    description: "Your personalized workflow hub",
    longDescription: "A clean, focused interface that adapts to your projects—whether you're solving an engineering problem, writing a research paper, or planning a business strategy.",
    desktopImage: homeDesktop,
    mobileImage: homeMobile,
    tags: ["Workspace", "Projects", "Quick Access"],
  },
  {
    id: "profile",
    title: "Professional Profile",
    description: "Track progress and achievements",
    longDescription: "More than grades—track achievements, earned credits, workflow history, and milestones. Visual analytics help you see growth over time across any field.",
    desktopImage: profileDesktop,
    mobileImage: profileMobile,
    tags: ["Analytics", "Achievements", "History"],
  },
  {
    id: "research",
    title: "Smart Research Engine",
    description: "Structured insights from any topic",
    longDescription: "Upload documents, paste links, or ask questions—Xplainfy researches, summarizes, and organizes information into clear, actionable insights you can trust.",
    desktopImage: researchDesktop,
    mobileImage: researchMobile,
    tags: ["Documents", "Summaries", "Sources"],
  },
];

// Utility function for className merging (simplified)
const cn = (...classes: (string | boolean | undefined)[]) => {
  return classes.filter(Boolean).join(' ');
};

const Carousel3D = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const goTo = useCallback((index: number) => {
    setDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(index);
  }, [currentIndex]);

  const next = useCallback(() => {
    const nextIndex = (currentIndex + 1) % features.length;
    setDirection(1);
    setCurrentIndex(nextIndex);
  }, [currentIndex]);

  const prev = useCallback(() => {
    const prevIndex = (currentIndex - 1 + features.length) % features.length;
    setDirection(-1);
    setCurrentIndex(prevIndex);
  }, [currentIndex]);

  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(next, 5000);
    return () => clearInterval(interval);
  }, [isAutoPlaying, next]);

  const currentFeature = features[currentIndex];

  // Enhanced 3D rotation variants for a true 360-degree feel
  const slideVariants = {
    enter: (dir: number) => ({
      x: dir > 0 ? "100%" : "-100%",
      rotateY: dir > 0 ? 60 : -60,
      scale: 0.8,
      opacity: 0,
      zIndex: 0,
    }),
    center: {
      x: 0,
      rotateY: 0,
      scale: 1,
      opacity: 1,
      zIndex: 10,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 28,
        mass: 0.8,
        duration: 0.6,
      },
    },
    exit: (dir: number) => ({
      x: dir > 0 ? "-100%" : "100%",
      rotateY: dir > 0 ? -60 : 60,
      scale: 0.8,
      opacity: 0,
      zIndex: 0,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 28,
        mass: 0.8,
        duration: 0.6,
      },
    }),
  };

  // Staggered animation for content inside card
  const contentVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.08, duration: 0.4, ease: "easeOut" },
    }),
  };

  return (
    <section id="insights" className="py-16 md:py-24 bg-gradient-to-b from-background via-background to-secondary/20 relative overflow-hidden">
      {/* Animated background with blurred orbs */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          animate={{
            x: [0, 60, 0],
            y: [0, -60, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-1/4 left-1/4 w-[600px] h-[600px] rounded-full bg-primary/5 blur-[130px]"
        />
        <motion.div
          animate={{
            x: [0, -60, 0],
            y: [0, 60, 0],
            scale: [1, 1.25, 1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
          className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] rounded-full bg-primary-glow/10 blur-[130px]"
        />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10 max-w-7xl">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl mx-auto text-center mb-12 md:mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-sm font-semibold text-primary mb-4"
          >
            <Sparkles className="w-4 h-4" />
            Interactive 3D Walkthrough
          </motion.div>

          <h2 className="font-display text-3xl md:text-5xl lg:text-6xl font-bold leading-tight">
            Experience Xplainfy in
            <br />
            <span className="bg-gradient-to-r from-primary via-primary-glow to-accent bg-clip-text text-transparent">
              three dimensions
            </span>
          </h2>

          <p className="mt-5 text-base md:text-lg lg:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            Rotate through the app's core features. Each view shows exactly how engineers,
            researchers, and professionals use Xplainfy to transform complexity into clarity.
          </p>
        </motion.div>

        {/* 3D Carousel - Full width with responsive height */}
        <div
          className="relative mx-auto select-none w-full"
          style={{
            perspective: "1200px",
          }}
          onMouseEnter={() => setIsAutoPlaying(false)}
          onMouseLeave={() => setIsAutoPlaying(true)}
        >
          <div
            className="relative w-full"
            style={{
              minHeight: "560px",
              height: "auto",
              transformStyle: "preserve-3d",
            }}
          >
            <AnimatePresence initial={false} custom={direction} mode="wait">
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={0.2}
                onDragEnd={(_, info) => {
                  if (info.offset.x > 80) prev();
                  else if (info.offset.x < -80) next();
                }}
                className="absolute inset-x-0 top-0 flex justify-center px-4"
                style={{ transformStyle: "preserve-3d" }}
              >
                <div
                  className="relative w-full max-w-5xl"
                  style={{
                    transformStyle: "preserve-3d",
                  }}
                >
                  {/* Main card */}
                  <motion.div
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    variants={{
                      hidden: { opacity: 0 },
                      visible: { opacity: 1 },
                      exit: { opacity: 0 },
                    }}
                    className="relative rounded-2xl border border-border/60 bg-card/95 backdrop-blur-xl shadow-2xl overflow-hidden"
                  >
                    {/* Gradient edge accents */}
                    <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/60 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary-glow/50 to-transparent" />
                    <div className="absolute top-0 bottom-0 left-0 w-px bg-gradient-to-b from-transparent via-primary/40 to-transparent" />
                    <div className="absolute top-0 bottom-0 right-0 w-px bg-gradient-to-b from-transparent via-primary/40 to-transparent" />

                    {/* Content */}
                    <div className="p-5 md:p-8">
                      {/* Header */}
                      <motion.div
                        custom={0}
                        variants={contentVariants}
                        initial="hidden"
                        animate="visible"
                        className="flex items-center gap-4 mb-5"
                      >
                        <div className="grid place-items-center w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-primary-glow text-primary-foreground shadow-lg">
                          {(() => {
                            const icons = [
                              <svg key="home" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                              </svg>,
                              <svg key="profile" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                              </svg>,
                              <svg key="research" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                              </svg>,
                            ];
                            return icons[currentIndex];
                          })()}
                        </div>
                        <div>
                          <h3 className="font-display text-xl md:text-2xl font-bold">
                            {currentFeature.title}
                          </h3>
                          <p className="text-sm text-muted-foreground mt-0.5">
                            {currentFeature.description}
                          </p>
                        </div>
                      </motion.div>

                      {/* Description */}
                      <motion.p
                        custom={1}
                        variants={contentVariants}
                        initial="hidden"
                        animate="visible"
                        className="text-muted-foreground leading-relaxed text-base mb-5"
                      >
                        {currentFeature.longDescription}
                      </motion.p>

                      {/* Tags */}
                      <motion.div
                        custom={2}
                        variants={contentVariants}
                        initial="hidden"
                        animate="visible"
                        className="flex flex-wrap gap-2 mb-6"
                      >
                        {currentFeature.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-3 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary border border-primary/20"
                          >
                            {tag}
                          </span>
                        ))}
                      </motion.div>

                      {/* Horizontal divider */}
                      <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent my-4" />

                      {/* Device screenshots - Responsive grid */}
                      <div className="grid md:grid-cols-2 gap-5 md:gap-6 mt-4">
                        {/* Desktop */}
                        <motion.div
                          custom={3}
                          variants={contentVariants}
                          initial="hidden"
                          animate="visible"
                          className="relative rounded-xl overflow-hidden border border-border/30 bg-surface-2 shadow-md"
                        >
                          <div className="flex items-center gap-2 px-3 py-2 border-b border-border/30 bg-background/50">
                            <svg className="w-4 h-4 text-muted-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                              <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                            </svg>
                            <span className="text-xs font-medium text-muted-foreground">Desktop View</span>
                          </div>
                          <div className="p-3">
                            <img
                              src={currentFeature.desktopImage}
                              alt={`${currentFeature.title} desktop`}
                              className="w-full h-auto rounded-lg object-cover"
                              loading="lazy"
                            />
                          </div>
                        </motion.div>

                        {/* Mobile */}
                        <motion.div
                          custom={4}
                          variants={contentVariants}
                          initial="hidden"
                          animate="visible"
                          className="relative rounded-xl overflow-hidden border border-border/30 bg-surface-2 shadow-md"
                        >
                          <div className="flex items-center gap-2 px-3 py-2 border-b border-border/30 bg-background/50">
                            <svg className="w-4 h-4 text-muted-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                              <path strokeLinecap="round" strokeLinejoin="round" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                            </svg>
                            <span className="text-xs font-medium text-muted-foreground">Mobile View</span>
                          </div>
                          <div className="p-3">
                            <img
                              src={currentFeature.mobileImage}
                              alt={`${currentFeature.title} mobile`}
                              className="w-full h-auto rounded-lg object-cover"
                              loading="lazy"
                            />
                          </div>
                        </motion.div>
                      </div>
                    </div>
                  </motion.div>

                  {/* Enhanced glow effects behind card for 3D depth */}
                  <motion.div
                    animate={{
                      scale: [1, 1.15, 1],
                      opacity: [0.25, 0.45, 0.25],
                    }}
                    transition={{
                      duration: 5,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="absolute -inset-5 bg-gradient-to-r from-primary via-primary-glow to-accent rounded-3xl opacity-20 blur-2xl -z-10"
                    style={{ transform: "translateZ(-40px)" }}
                  />
                  <motion.div
                    animate={{
                      y: [0, -15, 0],
                      rotate: [0, 2, 0],
                    }}
                    transition={{
                      duration: 8,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="absolute -top-12 -right-12 w-40 h-40 rounded-full bg-primary-glow opacity-20 blur-3xl -z-5"
                    style={{ transform: "translateZ(30px)" }}
                  />
                  <motion.div
                    animate={{
                      y: [0, 15, 0],
                      rotate: [0, -2, 0],
                    }}
                    transition={{
                      duration: 9,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: 0.5,
                    }}
                    className="absolute -bottom-12 -left-12 w-40 h-40 rounded-full bg-accent opacity-15 blur-3xl -z-5"
                    style={{ transform: "translateZ(20px)" }}
                  />
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation controls */}
          <div className="flex items-center justify-center gap-4 mt-10">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={prev}
              className="p-3 rounded-xl bg-card border border-border/60 hover:border-primary/50 hover:bg-primary/5 transition-all shadow-md flex items-center justify-center"
              aria-label="Previous feature"
            >
              <ChevronLeft className="w-5 h-5 text-foreground" />
            </motion.button>

            {/* Dots */}
            <div className="flex items-center gap-3">
              {features.map((_, idx) => (
                <motion.button
                  key={idx}
                  onClick={() => goTo(idx)}
                  whileHover={{ scale: 1.2 }}
                  className={cn(
                    "rounded-full transition-all duration-300",
                    currentIndex === idx
                      ? "w-7 h-2.5 bg-gradient-to-r from-primary to-primary-glow"
                      : "w-2 h-2 bg-border hover:bg-primary/60"
                  )}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>

            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={next}
              className="p-3 rounded-xl bg-card border border-border/60 hover:border-primary/50 hover:bg-primary/5 transition-all shadow-md flex items-center justify-center"
              aria-label="Next feature"
            >
              <ChevronRight className="w-5 h-5 text-foreground" />
            </motion.button>
          </div>

          {/* Auto-play toggle */}
          <div className="flex justify-center mt-5">
            <button
              onClick={() => setIsAutoPlaying(!isAutoPlaying)}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-medium text-muted-foreground hover:text-foreground hover:bg-primary/5 transition-all"
            >
              <RotateCcw className={cn("w-3.5 h-3.5", isAutoPlaying && "animate-spin-slow")} />
              {isAutoPlaying ? "Auto-rotating" : "Paused"}
            </button>
          </div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-16 text-center"
        >
          <p className="text-muted-foreground mb-4">
            Ready to experience the full power of Xplainfy?
          </p>
          <a
            href="/downloads"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-gradient-to-r from-primary to-primary-glow text-primary-foreground font-semibold text-base shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
          >
            Get Started Free
          </a>
        </motion.div>
      </div>

      <style>{`
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-spin-slow {
          animation: spin-slow 3s linear infinite;
        }
        .bg-gradient-primary {
          background: linear-gradient(135deg, hsl(var(--primary)) 0%, hsl(var(--primary-glow)) 100%);
        }
        .text-gradient-primary {
          background: linear-gradient(135deg, hsl(var(--primary)) 0%, hsl(var(--primary-glow)) 100%);
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
        }
      `}</style>
    </section>
  );
};

export default Carousel3D;