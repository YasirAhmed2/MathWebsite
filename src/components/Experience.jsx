import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Briefcase, Building2, Calendar } from 'lucide-react';

const experiences = [
  { company: "Merit Schooling System & College, Haripur", role: "Mathematics Teacher", years: "2016 - 2017", color: "from-indigo-500 to-blue-500" },
  
  { company: "Quaid-e-Azam Public School KTS, Haripur", role: "Mathematics Teacher", years: "2017 - 2025", color: "from-cyan-500 to-teal-500" },
  
]
const Experience = () => {
  return (
    <section id="experience" className="py-24 bg-gradient-to-b from-white via-[#f8fafc] to-white relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 max-w-6xl relative z-10">
        <div className="text-center mb-20">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center justify-center text-indigo-600 font-bold tracking-wider uppercase mb-4 text-sm bg-indigo-50 px-5 py-2 rounded-full border border-indigo-100"
          >
             My Academic Journey 
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-black text-slate-900 mb-6"
          >
            Teaching Experience
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-slate-600 max-w-2xl mx-auto text-lg leading-relaxed mix-blend-multiply font-medium"
          >
            Institutions where I have had the privilege to teach, inspire, and develop strong mathematical foundations for countless students.
          </motion.p>
        </div>

        <div className="relative border-l-2 border-indigo-100/50 md:border-l-0 ml-4 md:ml-0">
          {/* Center line for desktop */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-indigo-100 via-cyan-100 to-transparent -translate-x-1/2"></div>
          
          {experiences.map((exp, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className={`relative mb-16 flex items-center w-full ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
            >
              {/* Timeline Dot */}
              <div className="absolute left-[-9px] md:static md:mx-auto w-5 h-5 bg-white border-4 border-indigo-500 rounded-full shadow-[0_0_15px_rgba(79,70,229,0.5)] z-10 transition-transform duration-300 hover:scale-150"></div>
              
              {/* Content Card */}
              <div className={`ml-8 md:ml-0 md:w-[calc(50%-48px)] ${index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12 text-left'}`}>
                <motion.div 
                  whileHover={{ y: -8, scale: 1.02 }}
                  className="bg-white p-8 rounded-[2rem] shadow-[0_10px_40px_rgba(0,0,0,0.04)] border border-slate-100 hover:shadow-[0_20px_50px_rgba(79,70,229,0.1)] transition-all duration-300 group relative overflow-hidden"
                >
                  {/* Colorful Top Accent */}
                  <div className={`absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r ${exp.color} opacity-70 group-hover:opacity-100 transition-opacity duration-300`}></div>
                  
                  <div className={`inline-flex items-center px-4 py-1.5 mb-4 text-sm font-black uppercase tracking-widest text-indigo-600 bg-indigo-50 rounded-full ${index % 2 === 0 ? 'md:ml-auto md:flex' : ''}`}>
                    <Calendar size={14} className="mr-2"/> {exp.years}
                  </div>
                  
                  <h3 className="text-2xl font-black text-slate-800 mb-3 group-hover:text-indigo-600 transition-colors">{exp.role}</h3>
                  <p className={`text-slate-500 font-semibold flex items-center ${index % 2 === 0 ? 'md:justify-end' : 'justify-start'}`}>
                    <div className="p-2 bg-slate-50 rounded-lg mr-3 shadow-sm group-hover:bg-cyan-50 group-hover:text-cyan-600 transition-colors">
                      <Building2 size={18} className=""/> 
                    </div>
                    {exp.company}
                  </p>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
