"use client";

import { motion } from "framer-motion";
import { Search, MessageCircle, PackageCheck } from "lucide-react";

const steps = [
  {
    icon: Search,
    title: "1. Find Your Style",
    description: "Browse our collections and find the piece that speaks to you.",
  },
  {
    icon: MessageCircle,
    title: "2. Click to WhatsApp",
    description: "Tap 'Inquire on WhatsApp' to chat directly with our team.",
  },
  {
    icon: PackageCheck,
    title: "3. Confirm & Collect",
    description: "Finalize details via chat and collect in-store or get it delivered.",
  },
];

export default function HowToOrder() {
  return (
    <section className="py-24 bg-lavender/10 border-y border-lavender/30">
      <div className="container mx-auto px-6 md:px-12 text-center">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-serif text-3xl md:text-5xl font-bold text-elegantblack mb-16"
        >
          How to Order
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-5xl mx-auto">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              className="flex flex-col items-center"
            >
              <div className="w-20 h-20 bg-white rounded-full shadow-sm border border-champagne/30 flex items-center justify-center mb-6 text-champagne">
                <step.icon size={36} strokeWidth={1.5} />
              </div>
              <h3 className="font-serif text-xl font-medium text-elegantblack mb-3">{step.title}</h3>
              <p className="text-elegantblack/70 font-light text-sm max-w-[250px] leading-relaxed">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
