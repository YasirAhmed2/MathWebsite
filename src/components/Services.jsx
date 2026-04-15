import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Globe, BookOpen, Brain, Calculator, FileEdit, ArrowRight, X, CheckCircle2 } from 'lucide-react';

const services = [
  {
    icon: <Globe size={28} />,
    title: "Online Tutoring",
    desc: "Interactive online classes tailored for international students across different time zones.",
    color: "text-blue-500",
    bg: "bg-blue-50",
    glow: "group-hover:shadow-[0_0_30px_rgba(59,130,246,0.3)]",
    border: "border-blue-100",
    details: {
      overview: "Live one-to-one or small-group tutoring sessions designed around your curriculum, learning pace, and timezone.",
      highlights: [
        "Flexible scheduling for global students",
        "Interactive whiteboard-based explanations",
        "Weekly progress tracking with parent updates"
      ],
      outcomes: "Students build confidence, improve consistency, and achieve stronger performance across school and competitive math assessments."
    }
  },
  {
    icon: <BookOpen size={28} />,
    title: "Exam Preparation",
    desc: "Focused, strategic preparation for school, college, and board examinations to maximize scores.",
    color: "text-indigo-500",
    bg: "bg-indigo-50",
    glow: "group-hover:shadow-[0_0_30px_rgba(79,70,229,0.3)]",
    border: "border-indigo-100",
    details: {
      overview: "A structured exam-readiness program that combines syllabus mastery, timed practice, and targeted revision.",
      highlights: [
        "Custom study roadmap based on exam pattern",
        "Timed mock tests with performance analytics",
        "Topic-wise revision and error correction plans"
      ],
      outcomes: "Learners improve speed, reduce careless mistakes, and approach exams with strategy and confidence."
    }
  },
  {
    icon: <Brain size={28} />,
    title: "Concept Learning",
    desc: "Building a foundation of deep understanding of mathematical concepts rather than rote learning.",
    color: "text-cyan-500",
    bg: "bg-cyan-50",
    glow: "group-hover:shadow-[0_0_30px_rgba(6,182,212,0.3)]",
    border: "border-cyan-100",
    details: {
      overview: "Deep concept teaching that focuses on the logic behind formulas, theorems, and methods.",
      highlights: [
        "Concept-first teaching with visual reasoning",
        "Linking ideas across algebra, geometry, and arithmetic",
        "Regular conceptual quizzes for retention"
      ],
      outcomes: "Students gain long-term clarity, solve unfamiliar problems better, and become independent thinkers."
    }
  },
  {
    icon: <Calculator size={28} />,
    title: "Problem Solving",
    desc: "Learning advanced and shortcut techniques to tackle complex and challenging mathematics problems.",
    color: "text-violet-500",
    bg: "bg-violet-50",
    glow: "group-hover:shadow-[0_0_30px_rgba(139,92,246,0.3)]",
    border: "border-violet-100",
    details: {
      overview: "Advanced problem-solving training to tackle high-difficulty questions with multiple approaches.",
      highlights: [
        "Stepwise strategy for complex multi-step questions",
        "Shortcut and alternative method training",
        "Pattern recognition and analytical thinking drills"
      ],
      outcomes: "Learners develop faster approach selection, better accuracy, and stronger performance in difficult sections."
    }
  },
  {
    icon: <FileEdit size={28} />,
    title: "Assignment Help",
    desc: "Expert guidance and conceptual support for mathematics homework and complex assignments.",
    color: "text-teal-500",
    bg: "bg-teal-50",
    glow: "group-hover:shadow-[0_0_30px_rgba(20,184,166,0.3)]",
    border: "border-teal-100",
    details: {
      overview: "Guided assignment support focused on understanding, correctness, and clean mathematical presentation.",
      highlights: [
        "Support for homework, projects, and worksheets",
        "Clear explanation of each solving step",
        "Review for accuracy, notation, and presentation"
      ],
      outcomes: "Students submit higher-quality work on time while actually mastering the underlying concepts."
    }
  },
];

const Services = () => {
  const [activeServiceIndex, setActiveServiceIndex] = useState(null);

  const openServiceModal = (index) => {
    setActiveServiceIndex(index);
  };

  const closeServiceModal = () => {
    setActiveServiceIndex(null);
  };

  const activeService = activeServiceIndex !== null ? services[activeServiceIndex] : null;

  return (
    <>
    <section id="services" className="py-24 bg-gradient-to-tr from-cyan-50/50 via-white to-indigo-50/50 relative overflow-hidden">
      {/* Decorative floating elements */}
      <div className="absolute top-20 right-10 w-64 h-64 bg-cyan-200/30 rounded-full blur-[80px] -z-10 animate-pulse"></div>
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-indigo-200/30 rounded-full blur-[100px] -z-10 animate-pulse" style={{animationDuration: '7s'}}></div>

      <div className="container mx-auto px-6 md:px-12 max-w-7xl relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20">
          <div className="max-w-2xl">
            <div className="inline-flex flex-row items-center font-bold tracking-widest uppercase mb-4 text-sm px-4 py-2 rounded-full bg-white shadow-sm border border-slate-100 text-indigo-600">
               <span className="w-2 h-2 rounded-full bg-indigo-500 mr-2 animate-ping"></span> What I Do
            </div>
            <motion.h2 
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-black text-slate-900 mb-6 leading-tight"
            >
              Professional Services <br/> for <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Global Students</span>
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-6 text-slate-600 text-lg leading-relaxed mix-blend-multiply font-medium"
            >
              Comprehensive, high-quality mathematical support designed specifically to help ambitious students achieve exceptional academic excellence.
            </motion.p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className={`bg-white/80 backdrop-blur-xl p-8 rounded-[2rem] border border-slate-100 hover:border-transparent transition-all duration-500 group relative overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:bg-white z-10 ${service.glow}`}
            >
              {/* Colorful gradient border on hover */}
              <div className={`absolute inset-0 bg-gradient-to-b from-white to-${service.bg} opacity-0 group-hover:opacity-10 transition-opacity duration-500 -z-10`}></div>
              
              <div className={`w-16 h-16 ${service.bg} ${service.color} rounded-2xl flex items-center justify-center mb-8 border ${service.border} group-hover:scale-110 transition-all duration-500 group-hover:rotate-6 shadow-sm`}>
                {service.icon}
              </div>
              <h3 className="text-2xl font-black text-slate-800 mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-slate-800 group-hover:to-slate-600 transition-colors">{service.title}</h3>
              <p className="text-slate-500 leading-relaxed font-medium mb-8">{service.desc}</p>
              
              <button
                type="button"
                onClick={() => openServiceModal(index)}
                className={`flex items-center text-sm font-black uppercase tracking-wider ${service.color} transition-colors cursor-pointer mt-auto`}
                aria-label={`Learn more about ${service.title}`}
              >
                Learn more <ArrowRight size={18} className="ml-2 group-hover:translate-x-2 transition-transform" />
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    <AnimatePresence>
      {activeService && (
        <motion.div
          className="fixed inset-0 z-[80]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <button
            type="button"
            className="absolute inset-0 bg-slate-900/70 backdrop-blur-sm"
            onClick={closeServiceModal}
            aria-label="Close service details"
          />

          <div className="absolute inset-0 flex items-center justify-center p-4 md:p-8">
            <motion.div
              role="dialog"
              aria-modal="true"
              initial={{ opacity: 0, y: 22, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 22, scale: 0.98 }}
              transition={{ duration: 0.22 }}
              className="w-full max-w-2xl bg-white rounded-3xl border border-slate-200 shadow-[0_20px_70px_rgba(15,23,42,0.35)] overflow-hidden"
            >
              <div className="px-6 md:px-8 py-5 border-b border-slate-100 bg-white/95 backdrop-blur">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-xs font-black uppercase tracking-[0.2em] text-slate-500 mb-2">Global Services</p>
                    <h3 className="text-2xl font-black text-slate-900">{activeService.title}</h3>
                  </div>
                  <button
                    type="button"
                    onClick={closeServiceModal}
                    className="inline-flex items-center justify-center w-10 h-10 rounded-full border border-slate-200 text-slate-500 hover:bg-slate-50 hover:text-slate-800 transition-colors"
                    aria-label="Close popup"
                  >
                    <X size={18} />
                  </button>
                </div>
              </div>

              <div className="px-6 md:px-8 py-6">
                <p className="text-slate-700 leading-relaxed font-medium mb-6">{activeService.details.overview}</p>

                <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5 mb-6">
                  <h4 className="text-sm font-black uppercase tracking-wider text-slate-700 mb-4">What You Get</h4>
                  <ul className="space-y-3">
                    {activeService.details.highlights.map((point) => (
                      <li key={point} className="flex items-start text-slate-700">
                        <CheckCircle2 size={18} className="text-emerald-500 mt-0.5 mr-2 shrink-0" />
                        <span className="leading-relaxed">{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="border border-indigo-100 bg-indigo-50 rounded-2xl p-5">
                  <h4 className="text-sm font-black uppercase tracking-wider text-indigo-700 mb-2">Expected Outcome</h4>
                  <p className="text-indigo-900 leading-relaxed font-medium">{activeService.details.outcomes}</p>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
    </>
  );
};

export default Services;
