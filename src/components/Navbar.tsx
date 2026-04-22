"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { MessageCircle, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#" },
    { name: "Collections", href: "#collections" },
    { name: "New Arrivals", href: "#new-arrivals" },
    { name: "Visit Store", href: "#store" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled ? "glass py-3" : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2">
          <div className="flex flex-col items-center">
            <span className="font-serif text-2xl font-bold tracking-widest text-elegantblack">
              LEILAC
            </span>
            <span className="text-[10px] tracking-[0.2em] font-light uppercase text-elegantblack">
              Clothing
            </span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-sm uppercase tracking-wider text-elegantblack/80 hover:text-champagne transition-colors"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* WhatsApp & Mobile Menu Toggle */}
        <div className="flex items-center space-x-4">
          <a
            href="https://wa.me/917510188818"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:flex items-center space-x-2 px-5 py-2.5 bg-elegantblack text-cream rounded hover:bg-champagne hover:text-elegantblack transition-colors"
          >
            <MessageCircle size={18} />
            <span className="text-sm font-medium tracking-wide">WhatsApp Us</span>
          </a>

          <button
            className="md:hidden text-elegantblack"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-white/95 backdrop-blur-md shadow-lg border-t border-gray-100 py-6 px-6 flex flex-col space-y-6 md:hidden"
          >
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-lg uppercase tracking-wider text-elegantblack hover:text-champagne transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <a
              href="https://wa.me/917510188818"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center space-x-2 px-5 py-3 bg-elegantblack text-cream rounded hover:bg-champagne hover:text-elegantblack transition-colors mt-4"
            >
              <MessageCircle size={20} />
              <span className="font-medium tracking-wide">WhatsApp Us</span>
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
