"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "motion/react";
import { ShoppingBag, Menu, X, ArrowRight } from "lucide-react";

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

  return (
    <header 
      className={`fixed inset-x-0 top-0 z-[100] transition-all duration-500 ${
        isScrolled 
          ? "py-3 bg-[#819671]/80 backdrop-blur-xl border-b border-white/10 shadow-lg" 
          : "py-6 bg-transparent"
      }`}
    >
      <div className="site-container flex items-center justify-between">
        {/* Logo */}
        <a href="/" className="relative z-10 transition-transform hover:scale-105 duration-300">
          <Image
            src="/logo.png"
            alt="Liya Gole Salon"
            width={180}
            height={50}
            priority
            className={`h-7 md:h-9 w-auto object-contain transition-all duration-300 ${
              isScrolled ? "brightness-100" : "filter drop-shadow-[0_2px_10px_rgba(0,0,0,0.3)]"
            }`}
          />
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-10">
          <NavLink href="/" label="Home" />
          <NavLink href="/about" label="About" />
          <NavLink href="/services" label="Services" />
          <NavLink href="/gallery" label="Gallery" />
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-4">
          <a
            href="/contact"
            className={`hidden md:inline-flex h-11 items-center justify-center rounded-full px-7 text-[11px] font-bold uppercase tracking-widest transition-all duration-300 shadow-md ${
              isScrolled 
                ? "bg-white text-[#819671] hover:bg-white/90" 
                : "bg-white text-[#1E3A2F] hover:shadow-xl hover:shadow-white/20"
            }`}
          >
            Book Now
          </a>

          {/* Mobile Menu Toggle */}
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 md:hidden text-white transition-colors"
          >
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 top-0 h-screen w-full bg-[#1E3A2F] z-[90] flex flex-col pt-32 px-10"
          >
            <div className="space-y-8">
               <MobileNavLink href="/" label="Home" onClick={() => setMobileMenuOpen(false)} />
               <MobileNavLink href="/about" label="About" onClick={() => setMobileMenuOpen(false)} />
               <MobileNavLink href="/services" label="Services" onClick={() => setMobileMenuOpen(false)} />
               <MobileNavLink href="/gallery" label="Gallery" onClick={() => setMobileMenuOpen(false)} />
            </div>
            
            <div className="mt-auto pb-20">
               <a 
                 href="/contact" 
                 onClick={() => setMobileMenuOpen(false)}
                 className="flex w-full h-16 items-center justify-center rounded-2xl bg-[#819671] text-white font-bold uppercase tracking-widest text-xs gap-3"
               >
                 Reserve Session
                 <ArrowRight size={18} />
               </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

function NavLink({ href, label }: { href: string; label: string }) {
  return (
    <a 
      href={href} 
      className="group relative text-[11px] font-bold uppercase tracking-[0.2em] text-white/80 hover:text-white transition-colors"
    >
      {label}
      <span className="absolute -bottom-1 left-0 h-[1.5px] w-0 bg-[#819671] transition-all duration-300 group-hover:w-full" />
    </a>
  );
}

function MobileNavLink({ href, label, onClick }: { href: string; label: string; onClick: () => void }) {
  return (
    <a 
      href={href} 
      onClick={onClick}
      className="block text-4xl font-(--font-display) text-white/90 hover:text-[#819671] transition-colors"
    >
      {label}
    </a>
  );
}
