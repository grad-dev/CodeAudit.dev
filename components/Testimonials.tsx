"use client";
import React from "react";
import { testimonials } from "@/data";
import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-32 px-6 max-w-7xl mx-auto w-full">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-center mb-16 max-w-2xl mx-auto"
      >
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 tracking-tight">
          Client Success Stories
        </h2>
        <p className="text-gray-500 text-lg">
          Don&apos;t just take our word for it. Hear from founders and leaders who have launched with us.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {testimonials.map((testimonial, idx) => (
          <motion.div 
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            className="bg-[#F8F9FA] rounded-[2rem] p-10 flex flex-col relative border border-gray-100 hover:shadow-xl transition-all duration-300 group"
          >
            <Quote className="w-10 h-10 text-blue-100 mb-6 group-hover:text-blue-200 transition-colors" />
            
            <p className="text-gray-700 text-lg leading-relaxed flex-1 italic mb-8">
              &ldquo;{testimonial.quote}&rdquo;
            </p>
            
            <div className="flex items-center gap-4 mt-auto">
              <div className="w-12 h-12 rounded-full bg-blue-100 overflow-hidden flex flex-shrink-0 items-center justify-center font-bold text-[#0B57D0]">
                {testimonial.img ? (
                  <img src={testimonial.img} alt={testimonial.name} className="w-full h-full object-cover" />
                ) : (
                  <span>{testimonial.name.charAt(0)}</span>
                )}
              </div>
              <div>
                <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                <p className="text-sm text-[#0B57D0] font-medium">{testimonial.title}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
