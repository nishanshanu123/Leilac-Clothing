"use client";

import { motion } from "framer-motion";

const categories = [
  { name: "Combos", image: "/images/combos.jpg" },
  { name: "Long Tops", image: "/images/long-tops.jpg" },
  { name: "Gowns", image: "/images/gowns.jpg" },
  { name: "Jackets", image: "/images/jackets.jpg" },
  { name: "Skirts", image: "/images/skirts.jpg" },
  { name: "Veils", image: "/images/veils.jpg" },
];

export default function Categories() {
  return (
    <section id="collections" className="py-24 bg-white">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-serif text-3xl md:text-5xl font-bold text-elegantblack mb-4"
          >
            Shop by Category
          </motion.h2>
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="w-24 h-1 bg-champagne mx-auto"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category, index) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="relative aspect-[4/5] overflow-hidden group cursor-pointer bg-cream"
            >
              {/* Background Image */}
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                style={{ backgroundImage: `url(${category.image})` }}
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-elegantblack/20 transition-colors duration-500 group-hover:bg-elegantblack/40" />

              {/* Text */}
              <div className="absolute inset-0 flex items-center justify-center">
                <h3 className="font-serif text-3xl text-white font-medium tracking-wide drop-shadow-lg transform transition-transform duration-500 group-hover:-translate-y-2">
                  {category.name}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
