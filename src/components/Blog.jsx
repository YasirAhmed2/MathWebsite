import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { BookOpen, ArrowRight, Clock, X } from 'lucide-react';

const blogs = [
  {
    title: "5 Ways to Improve Mathematics Skills",
    desc: "Effective techniques and daily habits to become fundamentally stronger in mathematics and logic.",
    teaser: "Master the logic, train with purpose, and turn mistakes into your strongest advantage.",
    date: "Oct 12, 2025",
    readTime: "5 min read",
    tag: "Tips",
    gradient: "from-fuchsia-500 to-pink-500",
    glow: "shadow-[0_0_30px_rgba(217,70,239,0.3)]",
    content: [
      {
        heading: "1. Build Strong Conceptual Understanding (Foundation First Approach)",
        paragraphs: [
          "Mathematics is not a subject of memorization; it is a subject of logical structure. To improve skills, students must first develop a strong conceptual base.",
          "Instead of memorizing formulas, focus on understanding why a formula works and how it is derived. For example, understanding the derivation of algebraic identities or geometric theorems builds long-term retention.",
          "A strong foundation includes:",
          "Mastery of basic arithmetic operations",
          "Clear understanding of algebraic rules",
          "Strong grip on fractions, ratios, and percentages",
          "Conceptual clarity in geometry and graphs",
          "When concepts are clear, even difficult problems become manageable because the mind knows the logic behind the method, not just the steps."
        ],
        listStart: 3,
        listEnd: 6
      },
      {
        heading: "2. Practice with Purpose and Consistency (Deliberate Practice System)",
        paragraphs: [
          "Effective improvement in mathematics comes from structured and consistent practice, not random problem solving.",
          "Students should follow a gradual progression:",
          "Start from basic level questions",
          "Move to intermediate applications",
          "Then attempt advanced and analytical problems",
          "The key is daily short practice sessions rather than irregular long study hours.",
          "Additionally:",
          "Focus on quality over quantity",
          "Solve problems without immediately looking at solutions",
          "Re-attempt difficult questions after reviewing concepts",
          "This builds speed, accuracy, and confidence over time."
        ],
        listStart: 2,
        listEnd: 4,
        secondListStart: 7,
        secondListEnd: 9
      },
      {
        heading: "3. Develop a Scientific Error Analysis Habit (Learning from Mistakes)",
        paragraphs: [
          "Mistakes are the most powerful learning tools in mathematics if handled correctly.",
          "Students should maintain an error notebook where every mistake is recorded with:",
          "Type of error (conceptual, calculation, misunderstanding, or careless mistake)",
          "Correct solution method",
          "Key lesson learned",
          "Regular revision of this error log helps in:",
          "Eliminating repeated mistakes",
          "Strengthening weak areas",
          "Improving exam performance significantly",
          "This habit transforms weaknesses into permanent strengths."
        ],
        listStart: 2,
        listEnd: 4,
        secondListStart: 6,
        secondListEnd: 8
      },
      {
        heading: "4. Enhance Analytical and Problem-Solving Skills (Multiple Approach Thinking)",
        paragraphs: [
          "Mathematics becomes advanced when a student can think beyond one method.",
          "Instead of relying on a single technique:",
          "Try solving problems using different methods (algebraic, graphical, logical, or substitution-based)",
          "Break complex problems into smaller logical steps",
          "Identify patterns and relationships within questions",
          "This approach develops mathematical creativity and flexibility, which is essential for higher-level exams and competitive problem solving.",
          "A strong problem solver does not just solve questions-they understand the structure behind them."
        ],
        listStart: 2,
        listEnd: 4
      },
      {
        heading: "5. Connect Mathematics with Real-Life Applications (Practical Learning Approach)",
        paragraphs: [
          "Mathematics becomes more meaningful and easier to remember when linked to real-world situations.",
          "For example:",
          "Percentages in banking and discounts",
          "Algebra in business profit and loss",
          "Geometry in architecture and construction",
          "Statistics in data analysis and surveys",
          "When students see mathematics in real life:",
          "Interest increases naturally",
          "Memory retention improves",
          "Abstract concepts become easier to understand",
          "This approach transforms mathematics from a theoretical subject into a practical life skill."
        ],
        listStart: 2,
        listEnd: 5,
        secondListStart: 7,
        secondListEnd: 9
      }
    ],
    finalThought: "True mathematical skill is not built overnight; it is developed through concept clarity, disciplined practice, reflective learning, strategic thinking, and real-life application. A student who masters these five areas gradually develops not just good grades, but strong logical intelligence."
  },
  {
    title: "How to Score High in Math Exams",
    desc: "Proven strategies, time management, and preparation methods students can use to perform better.",
    teaser: "Use a closed-loop system: concept clarity, smart practice, error correction, timed testing, and revision.",
    date: "Oct 05, 2025",
    readTime: "8 min read",
    tag: "Exams",
    gradient: "from-blue-500 to-indigo-500",
    glow: "shadow-[0_0_30px_rgba(59,130,246,0.3)]",
    content: [
      {
        heading: "1. Master Conceptual Clarity Before Memorization",
        paragraphs: [
          "High scores in mathematics come from deep conceptual understanding, not rote learning.",
          "Understand why a formula works, not just how to use it",
          "Learn derivations where applicable (algebra, geometry, trigonometry)",
          "Strengthen core concepts: fractions, equations, identities, theorems",
          "A student with conceptual clarity can solve unfamiliar and twisted exam questions confidently because they are not dependent on memorized patterns."
        ],
        listStart: 1,
        listEnd: 3
      },
      {
        heading: "2. Follow a Structured Practice System (Progressive Difficulty Model)",
        paragraphs: [
          "Mathematics performance improves through a graded practice strategy:",
          "Start with basic textbook exercises",
          "Move to application-based questions",
          "Then attempt mixed and challenging problems",
          "Key scientific principle: spaced and repeated retrieval improves long-term memory retention.",
          "Best practice habits:",
          "Solve daily instead of cramming",
          "Re-attempt difficult questions after 2-3 days",
          "Avoid looking at solutions too early"
        ],
        listStart: 1,
        listEnd: 3,
        secondListStart: 6,
        secondListEnd: 8
      },
      {
        heading: "3. Develop an Error-Free Learning Loop (Error Analysis Technique)",
        paragraphs: [
          "Top students do not just practice more-they practice smarter.",
          "Maintain a mistake analysis register:",
          "Conceptual error (wrong understanding)",
          "Calculation error (carelessness)",
          "Interpretation error (misreading question)",
          "For each mistake:",
          "Write correct method",
          "Identify root cause",
          "Re-solve without help",
          "This method scientifically reduces repeated errors and significantly increases exam accuracy."
        ],
        listStart: 2,
        listEnd: 4,
        secondListStart: 6,
        secondListEnd: 8
      },
      {
        heading: "4. Train Exam-Oriented Problem Solving (Time-Pressure Simulation)",
        paragraphs: [
          "High exam scores depend on performance under time constraints.",
          "Train yourself with:",
          "Timed practice tests (exam simulation)",
          "Section-wise time allocation strategy",
          "Prioritization of easy and moderate questions first",
          "Scientific principle: Cognitive performance improves under controlled simulation of real conditions.",
          "Important skills:",
          "Quick identification of question type",
          "Choosing the shortest correct method",
          "Avoiding over-calculation"
        ],
        listStart: 2,
        listEnd: 4,
        secondListStart: 7,
        secondListEnd: 9
      },
      {
        heading: "5. Optimize Presentation, Accuracy, and Revision Strategy",
        paragraphs: [
          "Even correct answers can lose marks due to poor presentation.",
          "To maximize scoring:",
          "Write step-by-step solutions clearly",
          "Highlight final answers",
          "Use proper mathematical notation",
          "Avoid skipping logical steps",
          "Revision strategy:",
          "First revision: formulas + key concepts",
          "Second revision: error notebook",
          "Final revision: full-length mock papers",
          "Accuracy + presentation = maximum exam marks efficiency"
        ],
        listStart: 2,
        listEnd: 5,
        secondListStart: 7,
        secondListEnd: 9
      }
    ],
    finalThought: "High performance in mathematics is achieved through a closed-loop system: Concept -> Practice -> Error Correction -> Timed Testing -> Revision. A student who consistently follows this system does not just pass mathematics-they excel with confidence, speed, and precision."
  },
  {
    title: "Common Mistakes in Algebra",
    desc: "Understanding typical algebra errors made by students and practical ways to avoid them.",
    teaser: "Eliminate sign, structure, and equation-setup mistakes with a systematic error-control approach.",
    date: "Sep 28, 2025",
    readTime: "6 min read",
    tag: "Algebra",
    gradient: "from-cyan-500 to-teal-500",
    glow: "shadow-[0_0_30px_rgba(6,182,212,0.3)]",
    content: [
      {
        heading: "1. Sign Errors (Most Frequent Computational Failure)",
        paragraphs: [
          "One of the most common algebraic mistakes is incorrect handling of signs.",
          "Typical issues include:",
          "Misuse of negative signs during expansion",
          "Errors in addition or subtraction of negative numbers",
          "Losing signs while shifting terms across equality",
          "Scientific reason: This occurs due to weak working memory during multi-step manipulation.",
          "Correction strategy:",
          "Train sign tracking by underlining every negative term and rewriting steps carefully."
        ],
        listStart: 2,
        listEnd: 4
      },
      {
        heading: "2. Incorrect Application of Algebraic Identities",
        paragraphs: [
          "Students often apply identities mechanically without verifying structure.",
          "Common mistakes:",
          "Ignoring the middle term while applying identities",
          "Incorrect factorization of expressions",
          "Forcing identities where they do not apply",
          "Root cause: Pattern memorization without conceptual understanding.",
          "Solution: Always first identify the structure before applying any identity."
        ],
        listStart: 2,
        listEnd: 4
      },
      {
        heading: "3. Errors in Simplification and Term Collection",
        paragraphs: [
          "Many mistakes occur during combining like terms or simplifying expressions.",
          "Examples:",
          "Mixing unlike terms",
          "Incorrect cancellation in fractions",
          "Losing terms during simplification",
          "Scientific insight: This reflects poor symbolic organization in multi-step reasoning.",
          "Fix: Group like terms visually before performing operations."
        ],
        listStart: 2,
        listEnd: 4
      },
      {
        heading: "4. Equation Manipulation Errors (Transposition Mistakes)",
        paragraphs: [
          "A major source of loss in exams.",
          "Common errors:",
          "Changing signs incorrectly while shifting terms",
          "Dividing only part of an equation instead of both sides",
          "Incorrect expansion before solving",
          "Key principle: Every operation must be applied symmetrically to both sides of the equation."
        ],
        listStart: 2,
        listEnd: 4
      },
      {
        heading: "5. Factorization and Expansion Confusion",
        paragraphs: [
          "Students often struggle to distinguish between expansion and factorization.",
          "Mistakes include:",
          "Expanding when factorization is required",
          "Incorrect splitting of middle terms",
          "Missing common factors",
          "Root cause: Weak recognition of expression patterns.",
          "Solution: Identify first whether the expression is in expanded or factored form before starting."
        ],
        listStart: 2,
        listEnd: 4
      },
      {
        heading: "6. Variable and Exponent Misinterpretation",
        paragraphs: [
          "Errors in handling powers and variables are very common.",
          "Examples:",
          "Incorrect use of exponent rules",
          "Confusion between base and exponent",
          "Scientific reason: Misunderstanding of multiplicative structure of exponents.",
          "Fix: Regular practice of exponent laws with conceptual proof-based learning."
        ],
        listStart: 2,
        listEnd: 3
      },
      {
        heading: "7. Careless Algebraic Writing (Structural Disorganization)",
        paragraphs: [
          "Even correct thinking leads to wrong answers due to poor presentation.",
          "Common issues:",
          "Skipping steps",
          "Unclear rearrangement",
          "Mixing multiple operations in one line",
          "Impact: Increases probability of hidden mistakes.",
          "Solution: Maintain step-by-step structured writing."
        ],
        listStart: 2,
        listEnd: 4
      },
      {
        heading: "8. Misinterpretation of Word Problems",
        paragraphs: [
          "A significant percentage of algebra errors arise from incorrect translation of words into equations.",
          "Examples:",
          "Misreading more than vs less than",
          "Incorrect variable assignment",
          "Forming wrong equations from statements",
          "Scientific basis: Weak semantic-to-symbol translation ability.",
          "Fix: Always define variables clearly before forming equations."
        ],
        listStart: 2,
        listEnd: 4
      }
    ],
    finalThought: "Algebra mistakes are not knowledge failures; they are process failures. They mainly arise from weak sign control, poor structure handling, and pattern memorization without understanding. A student who systematically works on these areas develops error-free algebraic thinking, which directly leads to high exam performance and mathematical confidence."
  },
  {
    title: "Educational Problems in Large Private Schools & Their Evidence-Based Solutions (Expert Perspective)",
    desc: "A high-level, system-oriented analysis of institutional challenges and reforms in large private schools.",
    date: "Sep 20, 2025",
    readTime: "10 min read",
    tag: "Education",
    gradient: "from-emerald-500 to-teal-500",
    glow: "shadow-[0_0_30px_rgba(16,185,129,0.3)]",
    content: [
      {
        heading: "Content: A high-level, system-oriented analysis of institutional challenges and reforms",
        paragraphs: [
          "Large private schools operate as complex educational ecosystems, where academic quality, administration, finance, discipline, and teacher performance are deeply interconnected.",
          "Problems in such institutions are rarely isolated; they are systemic, structural, and behavioral in nature.",
          "Below is a professional diagnosis with practical, scalable solutions."
        ]
      },
      {
        heading: "1. Inconsistent Teaching Quality (Pedagogical Variability)",
        paragraphs: [
          "Problem",
          "In large private schools, teaching quality often varies significantly between senior and junior staff or between different sections or classes. Some teachers rely on traditional rote methods, while others use modern pedagogy.",
          "Impact",
          "Unequal student learning outcomes",
          "Weak conceptual foundation in lower-performing classes",
          "Overdependence on a few good teachers",
          "Root Cause",
          "Lack of standardized teaching framework",
          "Limited instructional supervision",
          "No measurable teaching performance indicators",
          "Solution (Expert Model)",
          "Implement a Standardized Lesson Delivery Framework (SLDF)",
          "Introduce peer observation and academic audits",
          "Monthly teaching effectiveness metrics (student progress data, assessments, feedback loops)",
          "Continuous teacher training on pedagogy and assessment design"
        ],
        listStart: 3,
        listEnd: 5,
        secondListStart: 7,
        secondListEnd: 9,
        thirdListStart: 11,
        thirdListEnd: 14
      },
      {
        heading: "2. Administrative Pressure vs Academic Freedom Conflict",
        paragraphs: [
          "Problem",
          "Teachers are often expected to meet administrative expectations (results, discipline, image control) which may conflict with effective teaching practices.",
          "Impact",
          "Reduced teaching creativity",
          "Fear-based compliance culture",
          "Decline in student-centered learning",
          "Root Cause",
          "Centralized decision-making",
          "Performance judged only by exam results",
          "Solution",
          "Introduce Balanced Performance Framework (BPF):",
          "40% student academic progress",
          "30% classroom engagement",
          "20% discipline and management",
          "10% innovation in teaching",
          "Empower department-level academic autonomy"
        ],
        listStart: 3,
        listEnd: 5,
        secondListStart: 7,
        secondListEnd: 8,
        thirdListStart: 11,
        thirdListEnd: 14
      },
      {
        heading: "3. Weak Student Academic Foundation (Hidden Learning Gaps)",
        paragraphs: [
          "Problem",
          "Many students progress to higher grades without mastering basic concepts.",
          "Impact",
          "Poor performance in advanced topics",
          "Dependence on memorization",
          "High failure rate in application-based questions",
          "Root Cause",
          "Promotion based on overall marks, not competency",
          "Lack of diagnostic assessment systems",
          "Solution",
          "Introduce Competency-Based Progression Testing",
          "Monthly diagnostic assessments (not just exams)",
          "Remedial foundation labs for weak students",
          "Data-driven tracking of learning gaps"
        ],
        listStart: 3,
        listEnd: 5,
        secondListStart: 7,
        secondListEnd: 8,
        thirdListStart: 10,
        thirdListEnd: 13
      },
      {
        heading: "4. Examination-Centered Learning Culture",
        paragraphs: [
          "Problem",
          "Education becomes exam-driven rather than learning-driven.",
          "Impact",
          "Rote memorization",
          "Short-term learning retention",
          "Stress and anxiety among students",
          "Root Cause",
          "Overweighting of board or exam results",
          "Lack of formative assessment culture",
          "Solution",
          "Shift to blended assessment model:",
          "50% conceptual exams",
          "30% project-based learning",
          "20% class participation and critical thinking",
          "Introduce open-book and analytical tests periodically"
        ],
        listStart: 3,
        listEnd: 5,
        secondListStart: 7,
        secondListEnd: 8,
        thirdListStart: 11,
        thirdListEnd: 13
      },
      {
        heading: "5. Teacher Burnout and Low Professional Motivation",
        paragraphs: [
          "Problem",
          "Teachers in large private institutions often face high workload, pressure for results, and limited professional recognition.",
          "Impact",
          "Reduced teaching quality",
          "High turnover rate",
          "Emotional disengagement",
          "Root Cause",
          "Lack of career growth pathways",
          "Excessive administrative workload",
          "Limited professional autonomy",
          "Solution",
          "Create Teacher Career Ladder System (Junior -> Senior -> Master Teacher -> Academic Coach)",
          "Reduce non-teaching workload via administrative support staff",
          "Introduce performance-based incentives linked to student growth (not just results)",
          "Regular mental health and professional development support"
        ],
        listStart: 3,
        listEnd: 5,
        secondListStart: 7,
        secondListEnd: 9,
        thirdListStart: 11,
        thirdListEnd: 14
      },
      {
        heading: "6. Communication Gap Between Management, Teachers, and Parents",
        paragraphs: [
          "Problem",
          "Misalignment often exists between school administration, teaching staff, and parents regarding expectations and student performance.",
          "Impact",
          "Conflict and mistrust",
          "Misinterpretation of academic decisions",
          "Pressure on teachers and students",
          "Solution",
          "Establish triangular communication system:",
          "Monthly parent-teacher academic dashboards",
          "Transparent performance reports",
          "Structured feedback channels",
          "Use data visualization tools for academic reporting"
        ],
        listStart: 3,
        listEnd: 5,
        secondListStart: 8,
        secondListEnd: 11
      },
      {
        heading: "7. Discipline vs Learning Balance Issue",
        paragraphs: [
          "Problem",
          "Some schools overemphasize discipline at the cost of creativity and inquiry-based learning.",
          "Impact",
          "Fear-based classrooms",
          "Reduced student participation",
          "Lack of critical thinking",
          "Solution",
          "Shift from control-based discipline to self-regulated discipline model",
          "Encourage:",
          "Student leadership roles",
          "Classroom responsibility systems",
          "Positive reinforcement strategies"
        ],
        listStart: 3,
        listEnd: 5,
        secondListStart: 9,
        secondListEnd: 11
      }
    ],
    finalThought: "A large private school is not just an institution; it is a learning organization system. Its success depends on alignment of pedagogy, administration, assessment, and human psychology into a single coherent academic framework. Without system-level thinking, reforms remain superficial. With it, even average schools can become high-performance academic institutions."
  },
];

const Blog = () => {
  const [activeBlogIndex, setActiveBlogIndex] = useState(null);
  const [showAllPosts, setShowAllPosts] = useState(false);

  const handleHeadingClick = (index, hasContent) => {
    if (!hasContent) return;
    setActiveBlogIndex(index);
  };

  const closeModal = () => {
    setActiveBlogIndex(null);
  };

  const renderParagraphSection = (section) => {
    const elements = [];
    let i = 0;

    while (i < section.paragraphs.length) {
      if (section.listStart === i && section.listEnd >= i) {
        elements.push(
          <ul key={`list-1-${section.heading}`} className="list-disc pl-6 mb-3 text-slate-600 space-y-1">
            {section.paragraphs.slice(section.listStart, section.listEnd + 1).map((item, idx) => (
              <li key={`${section.heading}-l1-${idx}`}>{item}</li>
            ))}
          </ul>
        );
        i = section.listEnd + 1;
        continue;
      }

      if (section.secondListStart === i && section.secondListEnd >= i) {
        elements.push(
          <ul key={`list-2-${section.heading}`} className="list-disc pl-6 mb-3 text-slate-600 space-y-1">
            {section.paragraphs.slice(section.secondListStart, section.secondListEnd + 1).map((item, idx) => (
              <li key={`${section.heading}-l2-${idx}`}>{item}</li>
            ))}
          </ul>
        );
        i = section.secondListEnd + 1;
        continue;
      }

      if (section.thirdListStart === i && section.thirdListEnd >= i) {
        elements.push(
          <ul key={`list-3-${section.heading}`} className="list-disc pl-6 mb-3 text-slate-600 space-y-1">
            {section.paragraphs.slice(section.thirdListStart, section.thirdListEnd + 1).map((item, idx) => (
              <li key={`${section.heading}-l3-${idx}`}>{item}</li>
            ))}
          </ul>
        );
        i = section.thirdListEnd + 1;
        continue;
      }

      elements.push(
        <p key={`${section.heading}-p-${i}`} className="text-slate-600 mb-3 leading-relaxed font-medium">
          {section.paragraphs[i]}
        </p>
      );
      i += 1;
    }

    return elements;
  };

  const activeBlog = activeBlogIndex !== null ? blogs[activeBlogIndex] : null;
  const hasMorePosts = blogs.length > 3;
  const visibleBlogs = showAllPosts || !hasMorePosts ? blogs : blogs.slice(0, 3);

  return (
    <>
      <section id="blog" className="py-32 bg-[#f8fafc] relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent"></div>
        <div className="container mx-auto px-6 md:px-12 max-w-7xl relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20">
          <div className="max-w-2xl">
            <div className="inline-flex items-center text-indigo-600 font-bold tracking-wider uppercase mb-5 text-sm bg-indigo-50 px-5 py-2.5 rounded-full border border-indigo-100 shadow-sm">
              <BookOpen size={16} className="mr-2"/> Articles & Insights
            </div>
            <motion.h2 
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-6xl font-black text-slate-900 mb-6 tracking-tight"
            >
              Mathematics Blog
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-6 text-slate-600 text-lg leading-relaxed font-medium mix-blend-multiply"
            >
              Explore my latest articles, tips, and strategies to demystify complex concepts and excel in mathematics.
            </motion.p>
          </div>
          
           <motion.button 
             type="button"
             onClick={() => setShowAllPosts(true)}
             initial={{ opacity: 0, x: 20 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             className="inline-flex items-center justify-center px-8 py-4 bg-white border border-slate-200 rounded-full text-slate-800 font-bold hover:bg-slate-50 hover:shadow-lg transition-all transform hover:-translate-y-1 disabled:opacity-70 disabled:cursor-default disabled:hover:translate-y-0 disabled:hover:shadow-none"
             disabled={showAllPosts || !hasMorePosts}
          >
             {showAllPosts || !hasMorePosts ? 'All Posts Shown' : 'Show All Posts'} <ArrowRight size={20} className="ml-2 text-indigo-500" />
           </motion.button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
           {visibleBlogs.map((blog, index) => {
            const hasContent = Array.isArray(blog.content) && blog.content.length > 0;

            return (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              whileHover={{ y: -12 }}
              className={`bg-white rounded-[2rem] overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.04)] border border-slate-100 group flex flex-col h-full transition-all duration-500 hover:${blog.glow} hover:border-transparent relative`}
            >
              {/* Top Gradient Banner */}
              <div className={`h-2 w-full bg-gradient-to-r ${blog.gradient}`}></div>
              
              <div className="p-8 pb-4 flex-grow cursor-pointer relative z-10">
                <div className="flex justify-between items-center mb-6">
                  <span className={`px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-wider text-white bg-gradient-to-r ${blog.gradient} shadow-sm`}>
                    {blog.tag}
                  </span>
                  <div className="flex items-center text-xs font-bold text-slate-400 uppercase tracking-widest">
                    <Clock size={14} className="mr-1.5"/> {blog.readTime}
                  </div>
                </div>
                
                <button
                  type="button"
                  onClick={() => handleHeadingClick(index, hasContent)}
                  className={`text-left w-full text-2xl font-black mb-4 leading-[1.3] transition-colors ${hasContent ? 'cursor-pointer hover:text-indigo-600 focus-visible:outline-none focus-visible:text-indigo-600' : ''}`}
                  aria-haspopup={hasContent ? 'dialog' : undefined}
                >
                  {blog.title}
                </button>

                <p className="text-slate-500 mb-4 leading-relaxed font-medium">{blog.desc}</p>

              </div>
              
              <div className="px-8 pb-8 mt-auto pt-6 flex justify-between items-center z-10">
                <span className="text-sm font-bold text-slate-400 uppercase tracking-wider">{blog.date}</span>
                <button
                  type="button"
                  onClick={() => handleHeadingClick(index, hasContent)}
                  className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-slate-50 border border-slate-100 group-hover:bg-indigo-600 group-hover:text-white transition-colors duration-300 shadow-sm"
                  aria-label={hasContent ? `Open ${blog.title}` : `View ${blog.title}`}
                >
                  <ArrowRight size={20} className="group-hover:-rotate-45 transition-transform duration-300"/>
                </button>
              </div>
            </motion.div>
            );
          })}
        </div>
        </div>
      </section>

      <AnimatePresence>
        {activeBlog && Array.isArray(activeBlog.content) && (
          <motion.div
            className="fixed inset-0 z-[70]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <button
              type="button"
              className="absolute inset-0 bg-slate-900/70 backdrop-blur-sm"
              onClick={closeModal}
              aria-label="Close article popup"
            />

            <div className="absolute inset-0 flex items-center justify-center p-4 md:p-8">
              <motion.div
                role="dialog"
                aria-modal="true"
                initial={{ opacity: 0, y: 24, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 24, scale: 0.98 }}
                transition={{ duration: 0.22 }}
                className="w-full max-w-4xl max-h-[90vh] bg-white rounded-3xl shadow-[0_20px_70px_rgba(15,23,42,0.35)] border border-slate-200 overflow-hidden"
              >
                <div className="sticky top-0 z-10 bg-white/95 backdrop-blur border-b border-slate-100 px-6 md:px-8 py-5">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="text-xs font-black uppercase tracking-[0.2em] text-indigo-600 mb-2">Mathematics Blog</p>
                      <h3 className="text-xl md:text-3xl font-black text-slate-900 leading-tight">{activeBlog.title}</h3>
                    </div>
                    <button
                      type="button"
                      onClick={closeModal}
                      className="inline-flex items-center justify-center w-10 h-10 rounded-full border border-slate-200 text-slate-500 hover:bg-slate-50 hover:text-slate-800 transition-colors"
                      aria-label="Close article"
                    >
                      <X size={18} />
                    </button>
                  </div>

                  <div className="flex items-center gap-3 mt-4 text-xs md:text-sm text-slate-500 font-semibold">
                    <span className={`px-3 py-1 rounded-full text-white bg-gradient-to-r ${activeBlog.gradient}`}>{activeBlog.tag}</span>
                    <span>{activeBlog.date}</span>
                    <span className="inline-flex items-center"><Clock size={14} className="mr-1.5" />{activeBlog.readTime}</span>
                  </div>
                </div>

                <div className="overflow-y-auto max-h-[calc(90vh-120px)] px-6 md:px-8 py-6 md:py-8">
                  <p className="text-slate-700 text-base md:text-lg leading-relaxed font-medium mb-8">{activeBlog.desc}</p>

                  <div className="space-y-7">
                    {activeBlog.content.map((section) => (
                      <section key={section.heading}>
                        <h4 className="text-lg md:text-xl font-black text-slate-900 mb-3">{section.heading}</h4>
                        {renderParagraphSection(section)}
                      </section>
                    ))}
                  </div>

                  {activeBlog.finalThought && (
                    <div className="mt-8 bg-slate-50 border border-slate-200 rounded-2xl p-5 md:p-6">
                      <h4 className="text-lg font-black text-slate-900 mb-3">Final Thought</h4>
                      <p className="text-slate-700 leading-relaxed font-medium">{activeBlog.finalThought}</p>
                    </div>
                  )}
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Blog;
