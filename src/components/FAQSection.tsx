// FAQSection.tsx
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    question: "What is Xplainfy?",
    answer: "Xplainfy is a workspace for professionals who research, think through complex problems, build solutions, and create reports with confidence. It helps you gather context, apply structured reasoning, and generate professional reports."
  },
  {
    question: "How does Xplainfy help with research?",
    answer: "Xplainfy helps you gather context, evidence, and relevant information from multiple perspectives. You can save research files, continue investigations with full context, and browse your workflow history with clear navigation."
  },
  {
    question: "Is Xplainfy free to use?",
    answer: "Yes! Xplainfy offers a free tier that allows you to explore the core features. You can get started immediately without any credit card required."
  },
  {
    question: "What formats does Xplainfy support?",
    answer: "Xplainfy supports a wide range of formats including text documents, web pages, PDFs, and more. You can import and export content in various formats to integrate with your existing workflow."
  },
  {
    question: "Can I use Xplainfy on mobile devices?",
    answer: "Yes! Xplainfy is available on all devices including desktop, tablet, and mobile. You can access your workspace from anywhere and continue your work seamlessly across devices."
  },
  {
    question: "How secure is my data on Xplainfy?",
    answer: "Xplainfy takes data security seriously. We use industry-standard encryption and security practices to protect your information. Your data is private and secure."
  }
];

const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-16 md:py-24 bg-white relative">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-gray-900">
            Frequently Asked Questions
          </h2>
          <p className="mt-3 text-gray-600">
            Everything you need to know about Xplainfy. Can't find what you're looking for? 
            <a href="/contact" className="text-blue-600 hover:text-blue-700 font-medium ml-1">
              Contact our team
            </a>
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="space-y-3">
            {faqData.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="border border-gray-200 rounded-xl overflow-hidden bg-white shadow-sm hover:shadow-md transition-shadow duration-200"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-gray-50 transition-colors duration-200"
                >
                  <span className="font-semibold text-gray-900 text-base">
                    {faq.question}
                  </span>
                  <motion.div
                    animate={{ rotate: openIndex === index ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                    className="flex-shrink-0 ml-4"
                  >
                    <ChevronDown className="w-5 h-5 text-gray-500" />
                  </motion.div>
                </button>

                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-4 pt-1 text-gray-600 leading-relaxed border-t border-gray-100">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <p className="text-gray-600">
              Still have questions? 
              <a href="/contact" className="text-blue-600 hover:text-blue-700 font-medium ml-1">
                Get in touch
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;