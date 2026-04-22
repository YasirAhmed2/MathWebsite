import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';

const philosophyPoints = [
  'Inspire learning beyond the classroom',
  'Build confidence in students',
  'Create structured and motivating environments',
  'Apply effective instructional strategies',
  'Continuously reflect and improve practice',
];

const Philosophy = () => {
  return (
    <section id="philosophy" className="py-20 bg-white relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-slate-300 to-transparent"></div>

      <div className="container mx-auto px-6 md:px-12 max-w-7xl relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-10">
          <div className="inline-flex items-center justify-center text-indigo-700 font-bold tracking-wider uppercase mb-4 text-xs bg-slate-50 px-4 py-2 rounded-full border border-slate-200">
            Core Belief
          </div>
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight"
          >
            My Educational Philosophy
          </motion.h2>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-5xl mx-auto bg-slate-50 border border-slate-200 rounded-3xl p-7 md:p-10"
        >
          <p className="text-slate-700 text-base md:text-lg font-medium leading-relaxed mb-5">
            I believe that true education develops both competence and character. Academic success is important, but it must be supported by discipline, values, and responsibility.
          </p>

          <p className="text-slate-700 text-base md:text-lg font-medium leading-relaxed mb-5">
            An effective educator is not defined only by subject knowledge, but by the ability to:
          </p>

          <ul className="space-y-3 mb-6">
            {philosophyPoints.map((point) => (
              <li key={point} className="flex items-start text-slate-700 font-semibold leading-relaxed">
                <CheckCircle2 size={18} className="text-indigo-500 mt-0.5 mr-2 shrink-0" />
                {point}
              </li>
            ))}
          </ul>

          <p className="text-slate-700 text-base md:text-lg font-medium leading-relaxed mb-5">
            Teaching is both a science and an art - requiring knowledge, empathy, leadership, and vision.
          </p>

          <p className="text-slate-900 text-base md:text-lg font-bold leading-relaxed">
            My goal as an educator is to contribute to a system of learning where students are not only academically successful but also ethically strong, intellectually curious, and socially responsible.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Philosophy;
