"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section className="py-24 bg-cream">
      <div className="container mx-auto px-6 md:px-12">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="font-serif text-3xl md:text-5xl font-bold text-elegantblack mb-8"
          >
            The Leilac Story
          </motion.h2>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6 text-elegantblack/70 font-light text-lg md:text-xl leading-relaxed"
          >
            <p>
              Born from a passion for timeless elegance, Leilac Clothing is a proudly women-owned brand based in the heart of Nadapuram, Kerala. 
            </p>
            <p>
              We believe that fashion is an expression of grace. Our collections are thoughtfully curated to offer premium, highly aesthetic pieces that make every woman feel beautiful, confident, and fearless.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
