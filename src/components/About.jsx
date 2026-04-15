import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-24 bg-white relative overflow-hidden">
      {/* Background aesthetics */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-purple-100/40 rounded-full blur-[100px] -translate-y-1/2 -z-10"></div>
      
      <div className="container mx-auto px-6 md:px-12 max-w-6xl">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.9, rotate: -2 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="lg:w-1/2 relative group w-full"
          >
             <div className="absolute inset-0 bg-gradient-to-br from-indigo-100 to-cyan-100 rounded-[2.5rem] translate-x-4 translate-y-4 -z-10 transition-transform duration-500 group-hover:translate-x-2 group-hover:translate-y-2"></div>
             
             <div className="rounded-[2.5rem] overflow-hidden shadow-[0_20px_40px_rgba(79,70,229,0.15)] border-4 border-white relative group-hover:shadow-[0_20px_50px_rgba(79,70,229,0.25)] transition-all duration-500">
               <div className="absolute inset-0 bg-indigo-900/10 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
               <img src="/profile.png" alt="About Riaz Ahmed" className="object-cover w-full h-[450px] lg:h-[600px] object-top group-hover:scale-105 transition-transform duration-700" />
             </div>
             
             {/* Floating Info Badge */}
             <motion.div 
               whileHover={{ y: -5 }}
               className="absolute -bottom-8 -right-4 md:-right-8 bg-white/90 backdrop-blur-md p-6 rounded-3xl shadow-2xl border border-white/50 z-20"
             >
                <div className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-cyan-500 mb-1">
                  100%
                </div>
                <div className="text-sm font-bold text-slate-600 uppercase tracking-wide">
                  Dedication to <br/> Student Success
                </div>
             </motion.div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:w-1/2 flex flex-col justify-center mt-10 lg:mt-0"
          >
            <div className="inline-flex items-center text-indigo-600 font-bold tracking-wider uppercase mb-4 text-sm bg-indigo-50 px-4 py-2 rounded-full w-max border border-indigo-100">
              <span className="w-2 h-2 rounded-full bg-indigo-500 mr-2 animate-pulse"></span> About Me
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-8 leading-tight">
              Dedicated to Shaping <span className="relative inline-block">
                <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-cyan-500">Bright Minds</span>
                <span className="absolute bottom-1 left-0 w-full h-3 bg-cyan-200/50 -z-10 -rotate-2"></span>
              </span>
            </h2>
            
            <p className="text-slate-600 text-lg mb-6 leading-relaxed font-medium">
              With a BS (Hons) degree in Mathematics and over <span className="font-bold text-indigo-700">nine years</span> of professional teaching experience, I specialize in elementary and secondary mathematics education.
            </p>
            
            <p className="text-slate-600 text-lg mb-8 leading-relaxed">
              My methodology goes beyond rote memorization. I focus on deep conceptual understanding, analytical thinking, and advanced problem-solving skills to build an unshakable mathematical foundation.
            </p>

            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {['Concept-Based Mastery', '90%+ Board Results', 'Interactive Classes', 'Strategic Exam Prep'].map((item, index) => (
                <motion.li 
                  key={index}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + (index * 0.1) }}
                  whileHover={{ scale: 1.03, y: -2 }}
                  className="flex items-center text-slate-800 font-bold text-base bg-gradient-to-r from-slate-50 to-white hover:from-indigo-50 hover:to-white p-4 rounded-2xl border border-slate-100 shadow-sm transition-all cursor-default group"
                >
                  <div className="bg-white p-1.5 rounded-full shadow-sm mr-3 group-hover:shadow-md transition-shadow">
                    <CheckCircle2 className="text-cyan-500 flex-shrink-0" size={20} />
                  </div>
                  {item}
                </motion.li>
              ))}
            </ul>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default About;
