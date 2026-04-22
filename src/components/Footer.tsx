import Link from "next/link";
import { MapPin, Phone, Mail, Instagram, Facebook, Clock } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-elegantblack text-cream pt-16 pb-8 border-t border-champagne/20">
      <div className="container mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
        {/* Brand */}
        <div className="space-y-6">
          <div className="flex flex-col items-start">
            <span className="font-serif text-3xl font-bold tracking-widest text-champagne">
              LEILAC
            </span>
            <span className="text-xs tracking-[0.2em] font-light uppercase text-cream/70">
              Clothing
            </span>
          </div>
          <p className="text-sm text-cream/70 font-light leading-relaxed max-w-xs">
            Aesthetic world build for women's. A premium, women-owned brand bringing you elegant, high-quality fashion.
          </p>
          <div className="flex space-x-4 pt-2">
            <a href="https://instagram.com/leilac.clothing" target="_blank" rel="noopener noreferrer" className="text-cream/70 hover:text-champagne transition-colors p-2 bg-white/5 rounded-full hover:bg-white/10">
              <Instagram size={20} />
            </a>
            <a href="#" className="text-cream/70 hover:text-champagne transition-colors p-2 bg-white/5 rounded-full hover:bg-white/10">
              <Facebook size={20} />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-serif text-lg font-semibold tracking-wider text-champagne mb-6 uppercase">Quick Links</h4>
          <ul className="space-y-3">
            {["Home", "Collections", "New Arrivals", "About Us", "Privacy Policy", "Terms & Conditions"].map((link) => (
              <li key={link}>
                <Link href="#" className="text-sm text-cream/70 hover:text-champagne transition-colors">
                  {link}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Working Hours */}
        <div>
          <h4 className="font-serif text-lg font-semibold tracking-wider text-champagne mb-6 uppercase">Working Hours</h4>
          <ul className="space-y-4 text-sm text-cream/70">
            <li className="flex items-start space-x-3">
              <Clock size={18} className="text-champagne shrink-0 mt-0.5" />
              <div>
                <p className="font-medium text-cream mb-1">Sunday – Thursday</p>
                <p>10:00 – 23:00</p>
              </div>
            </li>
            <li className="flex items-start space-x-3">
              <Clock size={18} className="text-champagne shrink-0 mt-0.5" />
              <div>
                <p className="font-medium text-cream mb-1">Friday</p>
                <p>10:00 – 12:30</p>
                <p>13:30 – 23:00</p>
                <p className="text-xs italic mt-0.5 text-cream/50">(Closed for prayer)</p>
              </div>
            </li>
            <li className="flex items-start space-x-3">
              <Clock size={18} className="text-champagne shrink-0 mt-0.5" />
              <div>
                <p className="font-medium text-cream mb-1">Saturday</p>
                <p>10:00 – 23:00</p>
              </div>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="font-serif text-lg font-semibold tracking-wider text-champagne mb-6 uppercase">Contact Us</h4>
          <ul className="space-y-4 text-sm text-cream/70">
            <li className="flex items-start space-x-3">
              <MapPin size={18} className="text-champagne shrink-0 mt-0.5" />
              <p>Kakkemvelli, Nadapuram, Kerala 673504, India</p>
            </li>
            <li className="flex items-center space-x-3">
              <Phone size={18} className="text-champagne shrink-0" />
              <a href="tel:+917510188818" className="hover:text-champagne transition-colors">+91 75101 88818</a>
            </li>
            <li className="flex items-center space-x-3">
              <Mail size={18} className="text-champagne shrink-0" />
              <a href="mailto:leilac.clothing@gmail.com" className="hover:text-champagne transition-colors">leilac.clothing@gmail.com</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="container mx-auto px-6 md:px-12 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center text-xs text-cream/50">
        <p>© {new Date().getFullYear()} Leilac Clothing. All rights reserved.</p>
        <p className="mt-2 md:mt-0 flex items-center space-x-2">
          <span>Accepted Payments:</span>
          <span className="bg-white/10 px-2 py-1 rounded">Cards</span>
          <span className="bg-white/10 px-2 py-1 rounded">GPay</span>
          <span className="bg-white/10 px-2 py-1 rounded">NFC</span>
        </p>
      </div>
    </footer>
  );
}
