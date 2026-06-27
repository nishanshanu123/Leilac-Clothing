"use client";

import { motion } from "framer-motion";
import { InstagramEmbed } from "react-social-media-embed";

const INSTAGRAM_LINKS = [
  "https://www.instagram.com/p/DXmDQ1lk3l2/",
  "https://www.instagram.com/p/DXmDuSAk7yr/",
  "https://www.instagram.com/reel/DV-5nLnk2Fi/",
  "https://www.instagram.com/reel/DYAC46NzkgE/",
  "https://www.instagram.com/reel/DaAV8cXTtQP/",
];

export default function InstagramShowcase() {
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
          <h2 className="text-3xl md:text-4xl font-serif text-[#1C1C1C] mb-4">Shop Our Instagram</h2>
          <p className="text-[#847B85] max-w-2xl mx-auto">
            Follow us for the latest styles, behind-the-scenes moments, and exclusive updates.
          </p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-6">
          {INSTAGRAM_LINKS.map((link, index) => (
            <motion.div
              key={link}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex justify-center w-full sm:w-[328px] overflow-hidden rounded-xl shadow-lg border border-[#F4F1ED]"
            >
              <InstagramEmbed url={link} width="100%" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
