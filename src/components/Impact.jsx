import React from 'react';
import { motion } from 'framer-motion';
import { Quote, FileDown } from 'lucide-react';

const impactPoints = [
  'Improved student grades significantly within weeks',
  'Helped students succeed in board and international exams',
  'Developed strong mathematical foundations in struggling learners',
];

const testimonials = [
  'Sir Riaz made mathematics extremely easy to understand.',
  'Best online math teacher I have ever studied with.',
  'Highly recommended for conceptual learning.',
];

const Impact = () => {
  return (
    <section id="impact" className="py-20 bg-white relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-slate-300 to-transparent"></div>
      <div className="container mx-auto px-6 md:px-12 max-w-7xl relative z-10">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center text-indigo-700 font-bold tracking-wider uppercase mb-4 text-xs bg-slate-50 px-4 py-2 rounded-full border border-slate-200">
            Results & Trust
          </div>
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight"
          >
            Student Success and Professional Profile
          </motion.h2>
          <p className="text-slate-600 text-base md:text-lg font-medium mt-4 max-w-3xl mx-auto leading-relaxed">
            Recruiter-ready evidence of instructional outcomes, learner feedback, and institutional profile readiness.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 mb-8">
          {impactPoints.map((point, index) => (
            <motion.div
              key={point}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-slate-50 border border-slate-200 rounded-2xl p-5 relative"
            >
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-indigo-500 to-cyan-500 rounded-t-2xl"></div>
              <p className="text-slate-700 font-semibold leading-relaxed pt-2">{point}</p>
            </motion.div>
          ))}
        </div>

        <div className="bg-white border border-slate-200 rounded-2xl p-7 md:p-8 mb-6 shadow-[0_8px_24px_rgba(15,23,42,0.04)]">
          <h3 className="text-2xl md:text-[1.7rem] font-black text-slate-900 mb-5">What Students Say</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {testimonials.map((quote) => (
              <div key={quote} className="bg-slate-50 border border-slate-200 rounded-xl p-4">
                <Quote size={16} className="text-indigo-500 mb-2" />
                <p className="text-slate-700 font-semibold leading-relaxed text-sm md:text-base">{quote}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-slate-900 text-white rounded-2xl p-7 md:p-8 flex flex-col md:flex-row md:items-center md:justify-between gap-5 border border-slate-700">
          <div>
            <h3 className="text-2xl font-black mb-2 tracking-tight">Professional Profile</h3>
            <p className="text-slate-300 font-medium max-w-2xl leading-relaxed">
              Download my complete academic CV and teaching profile for institutional opportunities.
            </p>
          </div>
          <a
            href="/Riaz_Ahmed_CV.pdf"
            download
            className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-white text-slate-900 font-bold hover:bg-slate-100 transition-colors shadow-sm"
          >
            <FileDown size={18} className="mr-2" /> Download CV
          </a>
        </div>
      </div>
    </section>
  );
};

export default Impact;
