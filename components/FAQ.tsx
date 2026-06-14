"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "How do you deliver an MVP so fast?",
    answer: "We leverage a battle-tested foundational architecture, pre-built enterprise-grade modules, and AI-accelerated workflows. Instead of reinventing the wheel (like auth, payments, or basic CRUD), we focus purely on your unique business logic."
  },
  {
    question: "Do I own the source code?",
    answer: "Yes, 100%. Upon completion and final payment, the entire codebase, intellectual property, and infrastructure access are transferred entirely to you. No vendor lock-in."
  },
  {
    question: "What if I need changes after the MVP is launched?",
    answer: "We offer flexible post-launch support and iteration retainers. Once your MVP is live and gathering user feedback, we can seamlessly transition into a phase 2 to build out additional features."
  },
  {
    question: "What tech stack do you use?",
    answer: "We build scalable systems using Next.js (React), React Native, Java/Spring Boot, and Node.js. Our infrastructure is powered by AWS and Vercel to ensure enterprise-grade reliability from day one."
  },
  {
    question: "How do we communicate during the project?",
    answer: "We set up a dedicated Slack/Discord channel for real-time communication, provide weekly progress demos, and give you access to our project management board so you always know exactly where things stand."
  }
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-32 px-6 max-w-4xl mx-auto w-full">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 tracking-tight">
          Frequently Asked Questions
        </h2>
        <p className="text-gray-500 text-lg">
          Everything you need to know about our process and how we work.
        </p>
      </motion.div>

      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            key={index} 
            className="border border-gray-200/60 bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
          >
            <button
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
              className="w-full flex items-center justify-between p-6 md:p-8 text-left focus:outline-none group"
            >
              <span className={`text-lg font-semibold transition-colors ${openIndex === index ? "text-[#0B57D0]" : "text-gray-900 group-hover:text-[#0B57D0]"}`}>
                {faq.question}
              </span>
              <motion.div
                animate={{ rotate: openIndex === index ? 180 : 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className={`flex-shrink-0 ml-4 p-2 rounded-full ${openIndex === index ? "bg-blue-50 text-[#0B57D0]" : "bg-gray-50 text-gray-400 group-hover:bg-blue-50 group-hover:text-[#0B57D0]"}`}
              >
                <ChevronDown className="w-5 h-5" />
              </motion.div>
            </button>
            <AnimatePresence>
              {openIndex === index && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                >
                  <div className="px-6 md:px-8 pb-8 text-gray-600 leading-relaxed">
                    {faq.answer}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default FAQ;
