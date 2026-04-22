"use client";

import { motion } from "framer-motion";
import { ShieldCheck, MapPin, BadgeCheck, Car } from "lucide-react";

export default function StoreDetails() {
  return (
    <section id="store" className="py-24 bg-white">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          {/* Details */}
          <div className="w-full lg:w-1/2 space-y-10">
            <div>
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="font-serif text-3xl md:text-5xl font-bold text-elegantblack mb-4"
              >
                Visit Our Store
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
              className="text-elegantblack/70 font-light text-lg"
            >
              Experience our aesthetic world in person. Try on our premium collections and get personalized styling advice.
            </motion.p>

            {/* Badges */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="grid grid-cols-2 gap-4"
            >
              <div className="flex items-center space-x-3 bg-cream p-4 rounded border border-champagne/20">
                <ShieldCheck className="text-champagne shrink-0" size={24} />
                <span className="text-sm font-medium text-elegantblack">Women-Owned</span>
              </div>
              <div className="flex items-center space-x-3 bg-cream p-4 rounded border border-champagne/20">
                <Car className="text-champagne shrink-0" size={24} />
                <span className="text-sm font-medium text-elegantblack">Free Parking</span>
              </div>
              <div className="flex items-center space-x-3 bg-cream p-4 rounded border border-champagne/20 col-span-2">
                <BadgeCheck className="text-champagne shrink-0" size={24} />
                <span className="text-sm font-medium text-elegantblack">Accepts Credit Cards, GPay & NFC</span>
              </div>
            </motion.div>
          </div>

          {/* Map & Visual */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="w-full lg:w-1/2 relative h-[400px] bg-cream rounded-sm overflow-hidden shadow-sm"
          >
            {/* Embedded Google Map */}
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15632.748281358327!2d75.6417743!3d11.681123!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba68000030c6a51%3A0xb35a0cfcf8943834!2sNadapuram%2C%20Kerala%20673504!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin" 
              width="100%" 
              height="100%" 
              style={{ border: 0, filter: "grayscale(20%) contrast(1.1)" }} 
              allowFullScreen={true} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Store Location"
            ></iframe>
            
            <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm p-4 rounded shadow-md border border-champagne/30">
              <div className="flex items-center space-x-2 text-elegantblack font-semibold mb-1">
                <MapPin size={18} className="text-champagne" />
                <span>Leilac Clothing</span>
              </div>
              <p className="text-xs text-elegantblack/70">Kakkemvelli, Nadapuram</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
