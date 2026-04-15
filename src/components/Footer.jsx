import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-[#f8fafc] border-t border-slate-200/60 py-16 text-center text-slate-600 relative overflow-hidden">
      {/* Decorative top gradient line */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-400 via-indigo-500 to-cyan-400"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-3xl font-black text-slate-900 mb-8 tracking-tight flex items-center justify-center gap-3">
           <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-indigo-500 to-cyan-500 flex items-center justify-center text-white text-sm shadow-md">∑</div>
           Riaz Ahmed
        </div>
        
        <div className="flex flex-wrap justify-center gap-x-10 gap-y-4 mb-10 text-sm md:text-base font-bold uppercase tracking-wider">
          <a href="#home" className="hover:text-indigo-600 transition-colors">Home</a>
          <a href="#about" className="hover:text-indigo-600 transition-colors">About</a>
          <a href="#experience" className="hover:text-indigo-600 transition-colors">Experience</a>
          <a href="#services" className="hover:text-indigo-600 transition-colors">Services</a>
          <a href="#contact" className="hover:text-indigo-600 transition-colors">Contact</a>
        </div>
        
        <div className="h-px bg-slate-200 max-w-2xl mx-auto mb-10"></div>
        
        <p className="text-sm text-slate-500 font-semibold tracking-wide">
          © {new Date().getFullYear()} Riaz Ahmed | Expert Mathematics Educator.<br className="md:hidden" /> All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
