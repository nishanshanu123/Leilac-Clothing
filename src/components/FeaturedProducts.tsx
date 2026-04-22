"use client";

import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

const products = [
  { name: "Embroidery Top Combo", image: "/images/embroidery-top.jpg" },
  { name: "Check Top Combo", image: "/images/check-top.jpg" },
  { name: "Light Orange & White Combo", image: "/images/light-orange.jpg" },
  { name: "Grey Woollen Short Top", image: "/images/grey-woollen.jpg" },
  { name: "Pink and White Combo", image: "/images/pink-white.jpg" },
  { name: "Black Jacket", image: "/images/black-jacket.jpg" },
];

export default function FeaturedProducts() {
  return (
    <section id="new-arrivals" className="py-24 bg-cream">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16">
          <div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-serif text-3xl md:text-5xl font-bold text-elegantblack mb-4"
            >
              New Arrivals
            </motion.h2>
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="w-24 h-1 bg-champagne"
            />
          </div>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-elegantblack/60 font-light mt-4 md:mt-0 max-w-sm text-right hidden md:block"
          >
            Explore our latest elegant designs. Inquire directly via WhatsApp.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => {
            const whatsappMsg = `Hi Leilac! I am interested in this item: ${product.name}. Is it available?`;
            const whatsappUrl = `https://wa.me/917510188818?text=${encodeURIComponent(whatsappMsg)}`;

            return (
              <motion.div
                key={product.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="group flex flex-col"
              >
                <div className="relative aspect-[3/4] overflow-hidden bg-gray-100 mb-4 rounded-sm">
                  <div 
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                    style={{ backgroundImage: `url(${product.image})` }}
                  />
                  
                  {/* Subtle overlay on hover */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
                </div>
                
                <div className="flex flex-col flex-grow items-center text-center space-y-3">
                  <h3 className="font-serif text-lg text-elegantblack">{product.name}</h3>
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-2 text-xs uppercase tracking-widest font-medium border-b border-elegantblack pb-1 text-elegantblack hover:text-champagne hover:border-champagne transition-colors"
                  >
                    <span>Inquire on WhatsApp</span>
                    <MessageCircle size={14} />
                  </a>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
