"use client";

import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

// Mixing static catalogue items with the extracted Instagram videos
const ARRIVALS = [
  { type: "video", src: "/videos/insta_4.mp4", name: "The Midnight Gown", span: "row-span-2 col-span-1 md:col-span-2" },
  { type: "image", src: "/images/embroidery-top.jpg", name: "Embroidery Top Combo", span: "col-span-1" },
  { type: "image", src: "/images/check-top.jpg", name: "Check Top Combo", span: "col-span-1" },
  { type: "video", src: "/videos/insta_5.mp4", name: "Summer Breeze Collection", span: "row-span-2 col-span-1 md:col-span-2" },
  { type: "image", src: "/images/light-orange.jpg", name: "Light Orange & White Combo", span: "col-span-1" },
  { type: "image", src: "/images/grey-woollen.jpg", name: "Grey Woollen Short Top", span: "col-span-1" },
  { type: "image", src: "/images/pink-white.jpg", name: "Pink and White Combo", span: "col-span-1" },
  { type: "image", src: "/images/black-jacket.jpg", name: "Classic Black Jacket", span: "col-span-1" },
];

export default function NewArrivals() {
  const WHATSAPP_NUMBER = "917510188818";
  
  const handleInquiry = (productName: string) => {
    const message = encodeURIComponent(`Hi Leilac Clothing! I'm interested in the ${productName} from your New Arrivals section. Could you provide more details?`);
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${message}`, '_blank');
  };

  return (
    <section id="new-arrivals" className="py-24 bg-[#FBF9F6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-champagne font-medium tracking-widest uppercase text-sm mb-3 block">Discover</span>
          <h2 className="text-4xl md:text-5xl font-serif text-[#1C1C1C] mb-4">New Arrivals</h2>
          <div className="w-24 h-[1px] bg-[#1C1C1C]/20 mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 auto-rows-[300px]">
          {ARRIVALS.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative overflow-hidden rounded-2xl shadow-lg group ${item.span}`}
            >
              {item.type === "video" ? (
                <video
                  src={item.src}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              ) : (
                <img
                  src={item.src}
                  alt={item.name}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              )}
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 transition-opacity duration-300"></div>
              
              <div className="absolute inset-0 p-6 flex flex-col justify-end">
                <h3 className="text-white text-xl font-serif mb-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  {item.name}
                </h3>
                
                <button 
                  onClick={() => handleInquiry(item.name)}
                  className="w-full flex items-center justify-center space-x-2 bg-white text-[#1C1C1C] py-3 px-4 rounded-lg hover:bg-champagne hover:text-white transition-colors duration-300 transform translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100"
                >
                  <MessageCircle size={18} />
                  <span className="font-medium text-sm">Inquire on WhatsApp</span>
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
