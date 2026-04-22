import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Expertise', href: '#expertise' },
    { name: 'Philosophy', href: '#philosophy' },
    { name: 'Experience', href: '#experience' },
    { name: 'Services', href: '#services' },
    { name: 'Impact', href: '#impact' },
    { name: 'Blog', href: '#blog' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className={`fixed w-full top-0 z-50 transition-all duration-500 ${scrolled ? 'bg-white/70 backdrop-blur-xl shadow-[0_4px_30px_rgba(0,0,0,0.05)] border-b border-white/50 py-3' : 'bg-transparent py-5'}`}>
      <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
        <a href="#" className="text-brand-primary text-2xl font-black tracking-tight flex items-center gap-2 group">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-indigo-500 to-cyan-500 flex items-center justify-center text-white text-base shadow-lg shadow-indigo-500/30 group-hover:scale-110 transition-transform duration-300">
            ∑
          </div>
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-slate-800 to-indigo-900 group-hover:to-cyan-700 transition-all">Riaz Ahmed</span>
        </a>
        
        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-8 items-center">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="relative text-slate-600 font-semibold hover:text-indigo-600 transition-colors group"
            >
              {link.name}
              <span className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-indigo-500 to-cyan-400 group-hover:w-full transition-all duration-300 rounded-full"></span>
            </a>
          ))}
          <a href="#contact" className="px-6 py-2.5 rounded-full bg-slate-900 text-white font-semibold text-sm hover:bg-indigo-600 hover:shadow-lg hover:shadow-indigo-500/30 transition-all duration-300 transform hover:-translate-y-0.5">
            Hire Me
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-slate-800 focus:outline-none p-2 bg-white/50 rounded-xl hover:bg-white shadow-sm border border-slate-100 transition-colors" 
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white/95 backdrop-blur-xl border-t border-slate-100 absolute top-full left-0 w-full flex flex-col items-center py-6 space-y-4 shadow-xl overflow-hidden"
          >
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                className="text-slate-800 text-lg font-bold hover:text-indigo-600 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
