"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-cream">
      {/* Background with an aesthetic gradient or placeholder image. In a real app, use a high quality image of the store or models. */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat opacity-40"
        style={{ 
          backgroundImage: "url('https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?q=80&w=2070&auto=format&fit=crop')",
          backgroundBlendMode: "overlay"
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-cream/80 via-transparent to-cream"></div>
      </div>

      <div className="relative z-10 container mx-auto px-6 flex flex-col items-center text-center mt-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-3xl"
        >
          <h1 className="font-serif text-5xl md:text-7xl font-bold text-elegantblack leading-tight mb-6">
            Aesthetic world <br />
            <span className="text-champagne font-italic">build for women's</span>
          </h1>
          <p className="text-lg md:text-xl text-elegantblack/70 mb-10 font-light tracking-wide max-w-2xl mx-auto">
            Discover a premium collection of elegant wear. Designed for comfort, styled for the modern woman.
          </p>
          
          <motion.a
            href="#collections"
            className="inline-flex items-center space-x-3 px-8 py-4 bg-elegantblack text-cream rounded hover:bg-champagne hover:text-elegantblack transition-all duration-300 font-medium tracking-widest uppercase text-sm group"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <span>Explore Collections</span>
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </motion.a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center space-y-2 text-elegantblack/50"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
      >
        <span className="text-xs uppercase tracking-widest font-medium">Scroll</span>
        <motion.div 
          className="w-[1px] h-12 bg-elegantblack/30"
          animate={{ height: ["0%", "100%", "0%"], y: [0, 10, 20] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        />
      </motion.div>
    </section>
  );
}
