// CTASection.tsx
import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Check, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

const CTASection: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-white relative overflow-hidden">
      {/* Background blobs */}
      <div className="pointer-events-none absolute -top-24 -right-24 w-96 h-96 rounded-full bg-blue-100/30 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 -left-24 w-96 h-96 rounded-full bg-purple-100/30 blur-3xl" />
      
      <div className="container relative">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center"
          >

            <h2 className="font-display text-3xl md:text-5xl font-bold text-gray-900 leading-tight">
              Make progress on your greatest work, today
            </h2>
            
            <p className="mt-4 text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
              Your AI Workspace for Research, Analysis, Learning and Decision-Making
            </p>

            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button 
                size="lg"
                asChild
                className="bg-blue-600 hover:bg-blue-700 text-white shadow-lg shadow-blue-600/25 hover:shadow-blue-600/35 transition-all duration-200 text-base px-8 py-6"
              >
                <Link to="/downloads" className="inline-flex items-center gap-2">
                  Start Exploring
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>
            </div>

            <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-6 text-sm text-gray-500">
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-green-500" />
                No credit card required
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-green-500" />
                Cancel anytime
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-green-500" />
                30-day free trial
              </div>
            </div>

            {/* <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-xs text-gray-400">
              <span>Trusted by 10,000+ researchers</span>
              <span>•</span>
              <span>4.9/5 average rating</span>
              <span>•</span>
              <span>Used in 50+ countries</span>
            </div> */}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;