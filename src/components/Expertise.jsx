import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, GraduationCap, Lightbulb } from 'lucide-react';

const expertiseAreas = [
  'Algebra & Functions',
  'Geometry & Trigonometry',
  'Calculus (Basic to Advanced)',
  'Statistics & Probability',
  'O-Level / A-Level Mathematics',
  'Competitive Exam Preparation',
];

const teachingApproach = [
  'Concept-based learning instead of memorization',
  'Step-by-step problem solving',
  'Student-centered interactive teaching',
  'Focus on analytical thinking',
  'Exam-oriented strategy with conceptual depth',
];

const Expertise = () => {
  return (
    <section id="expertise" className="py-20 bg-[#f8fafc] relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-slate-300 to-transparent"></div>
      <div className="container mx-auto px-6 md:px-12 max-w-7xl relative z-10">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center text-indigo-700 font-bold tracking-wider uppercase mb-4 text-xs bg-white px-4 py-2 rounded-full border border-slate-200">
            Credibility & Method
          </div>
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight"
          >
            Expertise and Teaching Approach
          </motion.h2>
          <p className="text-slate-600 text-base md:text-lg font-medium mt-4 max-w-3xl mx-auto leading-relaxed">
            A structured academic profile designed for institutions, parents, and learners seeking high-quality mathematics instruction.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white border border-slate-200 rounded-2xl p-7 shadow-[0_8px_24px_rgba(15,23,42,0.04)] hover:shadow-[0_12px_28px_rgba(15,23,42,0.07)] transition-shadow"
          >
            <div className="flex items-center justify-between mb-5">
              <div className="inline-flex items-center text-slate-800 font-black text-sm uppercase tracking-wider">
                <GraduationCap size={18} className="mr-2 text-indigo-600" /> Areas of Expertise
              </div>
              <span className="text-[11px] font-black tracking-[0.2em] text-slate-400">01</span>
            </div>
            <ul className="space-y-2.5">
              {expertiseAreas.map((item) => (
                <li key={item} className="flex items-start text-slate-700 font-semibold leading-relaxed">
                  <CheckCircle2 size={17} className="text-indigo-500 mt-0.5 mr-2 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="bg-white border border-slate-200 rounded-2xl p-7 shadow-[0_8px_24px_rgba(15,23,42,0.04)] hover:shadow-[0_12px_28px_rgba(15,23,42,0.07)] transition-shadow"
          >
            <div className="flex items-center justify-between mb-5">
              <div className="inline-flex items-center text-slate-800 font-black text-sm uppercase tracking-wider">
                <Lightbulb size={18} className="mr-2 text-cyan-600" /> My Teaching Approach
              </div>
              <span className="text-[11px] font-black tracking-[0.2em] text-slate-400">02</span>
            </div>
            <ul className="space-y-2.5">
              {teachingApproach.map((item) => (
                <li key={item} className="flex items-start text-slate-700 font-semibold leading-relaxed">
                  <CheckCircle2 size={17} className="text-cyan-500 mt-0.5 mr-2 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Expertise;
