"use client";

import { motion } from "framer-motion";
import { MessageCircle, ArrowRight } from "lucide-react";

const WHATSAPP_NUMBER = "917510188818";

const categories = [
  {
    name: "Combos",
    subtitle: "Complete sets, effortlessly styled",
    image: "/images/shop/shop_4.jpg",
    accent: "#C8A97E",
  },
  {
    name: "Co-ords & Sets",
    subtitle: "Matching perfection, curated for you",
    image: "/images/shop/shop_5.jpg",
    accent: "#B8956A",
  },
  {
    name: "Tops & Tunics",
    subtitle: "Everyday elegance redefined",
    image: "/images/shop/shop_7.jpg",
    accent: "#D4AF37",
  },
  {
    name: "Dresses & Gowns",
    subtitle: "Flowing silhouettes, timeless grace",
    image: "/images/shop/shop_19.jpg",
    accent: "#C8A97E",
  },
  {
    name: "Jackets & Layering",
    subtitle: "The perfect finishing touch",
    image: "/images/shop/shop_12.jpg",
    accent: "#B8956A",
  },
  {
    name: "New Arrivals",
    subtitle: "Fresh from our latest collection",
    image: "/images/shop/shop_1.jpg",
    accent: "#D4AF37",
  },
];

export default function Categories() {
  const handleInquiry = (cat: string) => {
    const msg = encodeURIComponent(`Hi Leilac Clothing! I'd love to explore your ${cat} collection. Could you share what's available?`);
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${msg}`, "_blank");
  };

  return (
    <section id="collections" className="py-28 bg-[#FAF8F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-20"
        >
          <span className="text-[#B8956A] font-medium tracking-[0.3em] uppercase text-xs mb-4 block">Collections</span>
          <h2 className="font-serif text-4xl md:text-6xl font-light text-[#1C1C1C] mb-5 leading-tight">
            Shop by <em className="not-italic text-[#C8A97E]">Category</em>
          </h2>
          <p className="text-[#888] text-base max-w-xl mx-auto font-light tracking-wide">
            Explore our handpicked collections — each piece designed to make you feel extraordinary.
          </p>
          <div className="mt-6 flex items-center justify-center gap-3">
            <div className="h-[1px] w-16 bg-[#C8A97E]/40"></div>
            <div className="w-1.5 h-1.5 rounded-full bg-[#C8A97E]"></div>
            <div className="h-[1px] w-16 bg-[#C8A97E]/40"></div>
          </div>
        </motion.div>

        {/* Grid — 3 large + 3 wide */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {categories.map((cat, index) => (
            <motion.div
              key={cat.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.12, duration: 0.6, ease: "easeOut" }}
              onClick={() => handleInquiry(cat.name)}
              className="group relative cursor-pointer overflow-hidden rounded-2xl"
              style={{ aspectRatio: index < 3 ? "3/4" : "4/3" }}
            >
              {/* Image */}
              <img
                src={cat.image}
                alt={cat.name}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-[800ms] ease-out group-hover:scale-110"
              />

              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent transition-all duration-500 group-hover:from-black/85" />

              {/* Gold border reveal on hover */}
              <div
                className="absolute inset-0 border-2 border-transparent rounded-2xl transition-all duration-500 group-hover:border-[#C8A97E]/60"
              />

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <div
                  className="h-[2px] w-10 mb-4 transition-all duration-500 group-hover:w-16"
                  style={{ backgroundColor: cat.accent }}
                />
                <h3 className="font-serif text-2xl md:text-3xl text-white font-light mb-1 tracking-wide">
                  {cat.name}
                </h3>
                <p className="text-white/70 text-sm font-light tracking-wide mb-4 transform translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-400">
                  {cat.subtitle}
                </p>
                <div className="flex items-center gap-2 text-white/90 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                  <MessageCircle size={14} />
                  <span className="text-xs tracking-widest uppercase font-medium">Inquire on WhatsApp</span>
                  <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform duration-300" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
