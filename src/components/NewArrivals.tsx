"use client";

import { motion } from "framer-motion";
import { MessageCircle, Sparkles } from "lucide-react";

const WHATSAPP_NUMBER = "917510188818";

const ARRIVALS = [
  { type: "video", src: "/videos/insta_4.mp4",       name: "Evening Drape Set",       tag: "Best Seller", span: "md:col-span-2 md:row-span-2" },
  { type: "image", src: "/images/shop/shop_2.jpg",   name: "Pastel Co-ord",           tag: "New"          },
  { type: "image", src: "/images/shop/shop_3.jpg",   name: "Lace Detail Top",         tag: "New"          },
  { type: "image", src: "/images/shop/shop_6.jpg",   name: "Chequered Kurta Set",     tag: "Trending"     },
  { type: "image", src: "/images/shop/shop_8.jpg",   name: "Muted Beige Combo",       tag: "New"          },
  { type: "video", src: "/videos/insta_5.mp4",       name: "Floral Anarkali",         tag: "Exclusive", span: "md:col-span-2" },
  { type: "image", src: "/images/shop/shop_9.jpg",   name: "Embroidered Kurta",       tag: "New"          },
  { type: "image", src: "/images/shop/shop_10.jpg",  name: "Ivory Layered Top",       tag: "Limited"      },
  { type: "image", src: "/images/shop/shop_13.jpg",  name: "Terracotta Coord Set",    tag: "Trending"     },
  { type: "image", src: "/images/shop/shop_14.jpg",  name: "Sage Green Co-ord",       tag: "New"          },
  { type: "image", src: "/images/shop/shop_16.jpg",  name: "Rose Floral Combo",       tag: "New"          },
  { type: "image", src: "/images/shop/shop_17.jpg",  name: "Blue Linen Set",          tag: "New"          },
  { type: "image", src: "/images/shop/shop_20.jpg",  name: "Mustard Kurta Combo",     tag: "Trending"     },
  { type: "image", src: "/images/shop/shop_21.jpg",  name: "White Cotton Set",        tag: "New"          },
  { type: "image", src: "/images/shop/shop_22.jpg",  name: "Navy Stripe Tunic",       tag: "Limited"      },
];

const TAG_COLORS: Record<string, string> = {
  "New":        "bg-white/20 text-white",
  "Trending":   "bg-[#D4AF37]/80 text-black",
  "Best Seller":"bg-white text-black",
  "Exclusive":  "bg-[#1C1C1C]/80 text-white",
  "Limited":    "bg-rose-500/80 text-white",
};

export default function NewArrivals() {
  const handleInquiry = (name: string) => {
    const msg = encodeURIComponent(`Hi Leilac Clothing! I'm interested in the "${name}" from your New Arrivals. Could you share more details?`);
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${msg}`, "_blank");
  };

  return (
    <section id="new-arrivals" className="py-28 bg-[#1C1C1C]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-20"
        >
          <div className="flex items-center justify-center gap-2 mb-4">
            <Sparkles size={14} className="text-[#D4AF37]" />
            <span className="text-[#D4AF37] font-medium tracking-[0.3em] uppercase text-xs">Just Arrived</span>
            <Sparkles size={14} className="text-[#D4AF37]" />
          </div>
          <h2 className="font-serif text-4xl md:text-6xl font-light text-white mb-5 leading-tight">
            New <em className="not-italic text-[#D4AF37]">Arrivals</em>
          </h2>
          <p className="text-white/50 text-base max-w-xl mx-auto font-light tracking-wide">
            Fresh styles, delivered from our curated collection. Each piece crafted for the modern woman.
          </p>
          <div className="mt-6 flex items-center justify-center gap-3">
            <div className="h-[1px] w-16 bg-[#D4AF37]/40"></div>
            <div className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]"></div>
            <div className="h-[1px] w-16 bg-[#D4AF37]/40"></div>
          </div>
        </motion.div>

        {/* Masonry Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 auto-rows-[220px]">
          {ARRIVALS.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06, duration: 0.5, ease: "easeOut" }}
              onClick={() => handleInquiry(item.name)}
              className={`relative overflow-hidden rounded-xl group cursor-pointer ${item.span || ""}`}
            >
              {item.type === "video" ? (
                <video
                  src={item.src}
                  autoPlay loop muted playsInline
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              ) : (
                <img
                  src={item.src}
                  alt={item.name}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              )}

              {/* Dark gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />

              {/* Tag badge */}
              <div className="absolute top-3 left-3">
                <span className={`text-[10px] font-semibold px-2 py-1 rounded-full backdrop-blur-sm tracking-widest uppercase ${TAG_COLORS[item.tag] || "bg-white/20 text-white"}`}>
                  {item.tag}
                </span>
              </div>

              {/* Name + CTA */}
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <h3 className="font-serif text-white text-base md:text-lg font-light mb-2 leading-tight">
                  {item.name}
                </h3>
                <div className="flex items-center gap-1.5 text-[#D4AF37] opacity-0 translate-y-3 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                  <MessageCircle size={13} />
                  <span className="text-[10px] tracking-widest uppercase font-semibold">WhatsApp Inquiry</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="text-center mt-14"
        >
          <button
            onClick={() => {
              const msg = encodeURIComponent("Hi Leilac Clothing! I'd love to browse your full collection. Could you share your latest catalogue?");
              window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${msg}`, "_blank");
            }}
            className="inline-flex items-center gap-3 px-10 py-4 border border-[#D4AF37]/60 text-[#D4AF37] rounded-full hover:bg-[#D4AF37] hover:text-black transition-all duration-400 text-sm font-medium tracking-widest uppercase group"
          >
            <span>View Full Collection</span>
            <MessageCircle size={16} className="group-hover:scale-110 transition-transform" />
          </button>
        </motion.div>
      </div>
    </section>
  );
}
