"use client";

import { motion } from "framer-motion";

const SHOWCASE_ITEMS = [
  { type: "image", src: "/images/embroidery-top.jpg", alt: "Double the style, double the detail" },
  { type: "image", src: "/images/black-jacket.jpg", alt: "Elegant layers" },
  { type: "video", src: "/videos/insta_3.mp4", alt: "Stunning Reel 1" },
  { type: "video", src: "/videos/insta_4.mp4", alt: "Stunning Reel 2" },
  { type: "video", src: "/videos/insta_5.mp4", alt: "Stunning Reel 3" },
];

export default function BrandShowcase() {
  return (
    <section className="py-20 bg-[#FBF9F6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-serif text-[#1C1C1C] mb-4">The Leilac Lifestyle</h2>
          <p className="text-[#847B85] max-w-2xl mx-auto">
            Experience our latest collections in motion. Pure style, no distractions.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {SHOWCASE_ITEMS.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative aspect-[9/16] w-full overflow-hidden rounded-xl shadow-lg border border-[#F4F1ED]"
            >
              {item.type === "video" ? (
                <video
                  src={item.src}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="absolute inset-0 w-full h-full object-cover"
                />
              ) : (
                <img
                  src={item.src}
                  alt={item.alt}
                  className="absolute inset-0 w-full h-full object-cover"
                />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
