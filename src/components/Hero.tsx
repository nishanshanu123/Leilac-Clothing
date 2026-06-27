"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-[#1C1C1C]">
      {/* Dynamic Video Background */}
      <div className="absolute inset-0 z-0 opacity-60">
        <video
          src="/videos/insta_3.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#1C1C1C]/40 to-[#1C1C1C]"></div>
      </div>

      <div className="relative z-10 container mx-auto px-6 flex flex-col items-center text-center mt-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="max-w-4xl"
        >
          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-bold text-white leading-tight mb-6 tracking-wide drop-shadow-lg">
            Timeless Elegance, <br />
            <span className="text-[#D4AF37] font-italic font-light">Crafted for Her</span>
          </h1>
          <p className="text-lg md:text-xl text-white/90 mb-12 font-light tracking-widest max-w-2xl mx-auto drop-shadow-md">
            Discover a premium collection of elegant wear. Designed for comfort, styled for the modern woman.
          </p>
          
          <motion.a
            href="#new-arrivals"
            className="inline-flex items-center space-x-3 px-10 py-4 bg-white/10 backdrop-blur-md border border-white/30 text-white rounded-full hover:bg-white hover:text-[#1C1C1C] transition-all duration-500 font-medium tracking-widest uppercase text-sm group"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span>Explore New Arrivals</span>
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </motion.a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center space-y-2 text-white/70"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
      >
        <span className="text-xs uppercase tracking-[0.3em] font-medium">Scroll</span>
        <motion.div 
          className="w-[1px] h-16 bg-white/50"
          animate={{ height: ["0%", "100%", "0%"], y: [0, 15, 30] }}
          transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
        />
      </motion.div>
    </section>
  );
}
