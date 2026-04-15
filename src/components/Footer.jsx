import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-white border-t border-slate-200 py-10 md:py-8 text-slate-600 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-indigo-300 to-transparent"></div>

      <div className="container mx-auto px-6 md:px-12 max-w-7xl relative z-10">
        <div className="text-2xl md:text-[1.7rem] text-slate-900 mb-5 tracking-tight flex items-center justify-center gap-2.5 font-academic font-bold">
           <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-indigo-500 to-cyan-500 flex items-center justify-center text-white text-xs shadow-sm">∑</div>
           Riaz Ahmed
        </div>
        
        <div className="flex flex-wrap justify-center gap-x-7 gap-y-2.5 mb-5 text-sm font-bold text-slate-600">
          <a href="#home" className="hover:text-indigo-600 transition-colors">Home</a>
          <a href="#about" className="hover:text-indigo-600 transition-colors">About</a>
          <a href="#expertise" className="hover:text-indigo-600 transition-colors">Expertise</a>
          <a href="#services" className="hover:text-indigo-600 transition-colors">Programs</a>
          <a href="#impact" className="hover:text-indigo-600 transition-colors">Impact</a>
          <a href="#blog" className="hover:text-indigo-600 transition-colors">Blog</a>
          <a href="#contact" className="hover:text-indigo-600 transition-colors">Contact</a>
        </div>
        
        <div className="h-px bg-slate-200 max-w-3xl mx-auto mb-4"></div>
        
        <p className="text-xs md:text-sm text-slate-500 font-semibold tracking-wide text-center">
          © {new Date().getFullYear()} Riaz Ahmed | Mathematics Educator and Academic Mentor. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
