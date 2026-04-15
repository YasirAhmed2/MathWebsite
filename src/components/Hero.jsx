import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Star, Award, TrendingUp } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-[#f0f9ff] via-white to-[#eef2ff]" id="home">
      {/* Premium Gradient Orbs */}
      <div className="absolute top-0 right-0 -translate-y-12 translate-x-1/4 w-[600px] h-[600px] bg-gradient-to-br from-cyan-200 to-blue-300 rounded-full blur-[100px] opacity-40 mix-blend-multiply pointer-events-none animate-pulse" style={{ animationDuration: '8s' }}></div>
      <div className="absolute bottom-0 left-0 translate-y-1/3 -translate-x-1/4 w-[500px] h-[500px] bg-gradient-to-tr from-indigo-200 to-purple-300 rounded-full blur-[100px] opacity-50 mix-blend-multiply pointer-events-none animate-pulse" style={{ animationDuration: '10s' }}></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-gradient-to-r from-blue-100 to-indigo-50 rounded-full blur-[80px] opacity-60 -z-10 twist"></div>

      <div className="container mx-auto px-6 md:px-12 z-10 relative">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-8">
          
          {/* Left: Text Content */}
          <div className="lg:w-1/2 flex flex-col justify-center text-left">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/80 backdrop-blur-sm text-indigo-700 font-bold text-sm tracking-wide mb-8 w-max border border-white shadow-[0_4px_20px_rgba(79,70,229,0.1)]"
            >
              <Star size={18} className="text-amber-400 fill-amber-400" /> Top-Rated International Teacher
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-5xl md:text-7xl lg:text-[5rem] font-black mb-6 tracking-tight leading-[1.05] text-slate-900"
            >
              Master <span className="text-transparent bg-clip-text bg-gradient-to-br from-indigo-600 via-blue-600 to-cyan-500 drop-shadow-sm">Mathematics</span> <br className="hidden md:block"/> with Expertise.
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-lg md:text-xl text-slate-600 mb-10 max-w-xl leading-relaxed font-medium"
            >
              Hi, I'm Riaz Ahmed. I hold a BS (Hons) in Mathematics and bring over 9+ years of experience helping students globally achieve academic excellence.
            </motion.p>
            
            <motion.div
               initial={{ opacity: 0, y: 20 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.5, delay: 0.6 }}
               className="flex flex-col sm:flex-row gap-5"
            >
              <a 
                href="#contact" 
                className="relative overflow-hidden inline-flex items-center justify-center bg-indigo-600 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-indigo-700 hover:shadow-[0_8px_30px_rgba(79,70,229,0.4)] transition-all duration-300 transform hover:-translate-y-1 group"
              >
                <div className="absolute inset-0 w-1/4 h-full bg-white/20 skew-x-12 -translate-x-24 group-hover:animate-[shine_1.5s_ease-in-out]"></div>
                Book Online Class <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </a>
              <a 
                href="#services" 
                className="inline-flex items-center justify-center glass-card text-slate-800 px-8 py-4 rounded-full font-bold text-lg hover:bg-white/90 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
              >
                Explore Services
              </a>
            </motion.div>

            {/* Quick Stats */}
            <motion.div 
               initial={{ opacity: 0 }}
               animate={{ opacity: 1 }}
               transition={{ duration: 0.8, delay: 0.9 }}
               className="flex items-center gap-8 mt-12 pt-8 border-t border-slate-200/60"
            >
                <div>
                  <div className="text-3xl font-black text-slate-800 flex items-center gap-1"><TrendingUp size={24} className="text-indigo-500"/> 90%+</div>
                  <div className="text-sm font-semibold text-slate-500 uppercase tracking-wider mt-1">Board Results</div>
                </div>
                <div className="w-px h-12 bg-slate-200"></div>
                <div>
                  <div className="text-3xl font-black text-slate-800 flex items-center gap-1"><Award size={24} className="text-cyan-500"/> 9+</div>
                  <div className="text-sm font-semibold text-slate-500 uppercase tracking-wider mt-1">Years Teaching</div>
                </div>
            </motion.div>
          </div>

          {/* Right: Profile Image */}
          <div className="lg:w-1/2 relative flex justify-center lg:justify-end mt-16 lg:mt-0">
            <motion.div 
              initial={{ opacity: 0, scale: 0.8, rotate: -3 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 0.8, type: "spring", bounce: 0.3, delay: 0.3 }}
              className="relative w-[370px] h-[370px] md:w-[520px] md:h-[520px] z-20 group"
            >
              {/* Glowing animated background rings */}
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-500 to-cyan-400 rounded-full blur-[2px] -rotate-6 scale-[1.03] transition-transform duration-700 group-hover:rotate-6 opacity-30 group-hover:opacity-60 group-hover:blur-md"></div>
              <div className="absolute inset-0 border-[3px] border-white/50 rounded-full rotate-12 scale-[1.08] transition-transform duration-1000 group-hover:rotate-0"></div>
              <div className="absolute inset-0 border border-indigo-200 rounded-full -rotate-12 scale-[1.12] transition-transform duration-1000 group-hover:rotate-0 border-dashed"></div>
              
              <div className="relative w-full h-full rounded-full glow-indigo overflow-hidden border-5 border-white p-1.5 md:p-2 bg-white transition-transform duration-500 group-hover:scale-[1.02]">
                <img 
                  src="/profile.png" 
                  alt="Riaz Ahmed - Mathematics Teacher" 
                  className="w-full h-full object-cover object-top scale-[0.94] rounded-full mix-blend-normal"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-indigo-900/30 to-transparent rounded-full mix-blend-overlay"></div>
              </div>
              
              {/* Floating aesthetic elements */}
              <motion.div 
                animate={{ y: [0, -20, 0], rotate: [0, 10, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-10 -left-6 glass-card p-4 rounded-2xl shadow-xl z-30 flex items-center gap-3 backdrop-blur-xl"
              >
                <div className="text-indigo-600 font-serif text-3xl font-bold italic">x²</div>
              </motion.div>
              <motion.div 
                animate={{ y: [0, 20, 0], rotate: [0, -10, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute bottom-20 -right-6 glass-card p-4 rounded-2xl shadow-xl z-30 flex items-center gap-3 backdrop-blur-xl"
              >
                <div className="text-cyan-500 font-serif text-3xl font-bold">∑</div>
              </motion.div>
            </motion.div>
          </div>

        </div>
      </div>
      
      {/* Required for shine animation */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes shine {
          100% { transform: translateX(400px) skewX(12deg); }
        }
      `}} />
    </section>
  );
};

export default Hero;
