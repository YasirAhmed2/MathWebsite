import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, MessageSquare, Sparkles } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState('idle');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('submitting');
    setTimeout(() => {
      setStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setStatus('idle'), 5000);
    }, 1500);
  };

  return (
    <section id="contact" className="py-32 relative overflow-hidden bg-gradient-to-br from-[#eff6ff] via-white to-[#f0fdf4]">
      {/* Decorative Blob */}
      <div className="absolute top-1/2 left-1/2 w-[1000px] h-[1000px] bg-gradient-to-tr from-cyan-100/50 to-indigo-100/50 rounded-full blur-[120px] -translate-y-1/2 -translate-x-1/2 pointer-events-none z-0 mix-blend-multiply"></div>
      
      <div className="container mx-auto px-6 md:px-12 max-w-7xl relative z-10">
        <div className="text-center mb-20">
          <div className="inline-flex items-center justify-center text-indigo-600 font-bold tracking-wider uppercase mb-5 text-sm bg-white px-6 py-3 rounded-full border border-indigo-100 shadow-sm">
            <Sparkles size={16} className="mr-2 text-amber-500 fill-amber-500"/> Get In Touch
          </div>
          <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-black text-slate-900 tracking-tight"
          >
            Let's Discuss Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-cyan-500">Journey</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          <motion.div 
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 space-y-10"
          >
            <p className="text-slate-600 text-xl mb-10 leading-relaxed font-medium mix-blend-multiply">
              Whether you need help with exam preparation, regular tutoring, or solving complex assignments, I am here to guide you to success. Reach out today.
            </p>
            
            <div className="space-y-6">
              {[
                { icon: <Mail size={24} />, title: "Email Address", info: "Riaz0334@gmail.com", href: "mailto:Riaz0334@gmail.com", color: "text-blue-600", bg: "bg-blue-100/50" },
                { icon: <Phone size={24} />, title: "WhatsApp & Phone", info: "+92 334 9500342", href: "tel:+923349500342", color: "text-emerald-600", bg: "bg-emerald-100/50" },
                { icon: <MapPin size={24} />, title: "Location", info: "Haripur, Pakistan", href: null, color: "text-indigo-600", bg: "bg-indigo-100/50" }
              ].map((item, i) => (
                <div key={i} className="flex items-center space-x-6 group p-4 rounded-3xl hover:bg-white/60 transition-colors border border-transparent hover:border-white/80 hover:shadow-sm">
                  <div className={`w-16 h-16 ${item.bg} ${item.color} rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300 shadow-sm border border-white`}>
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="text-xs text-slate-400 uppercase tracking-widest font-black mb-1.5">{item.title}</h4>
                    {item.href ? (
                      <a href={item.href} className="text-2xl font-black text-slate-800 hover:text-indigo-600 transition-colors">{item.info}</a>
                    ) : (
                      <p className="text-2xl font-black text-slate-800">{item.info}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-12 p-8 bg-gradient-to-r from-indigo-600 to-blue-600 rounded-[2rem] border border-indigo-500 shadow-[0_20px_40px_rgba(79,70,229,0.2)] text-white relative overflow-hidden group">
               <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl -translate-y-10 translate-x-10 group-hover:scale-150 transition-transform duration-700"></div>
               <div className="flex items-center font-black text-xl relative z-10">
                 <MessageSquare size={28} className="mr-4 text-cyan-300" /> Rapid Response Guaranteed
               </div>
               <p className="text-indigo-100 mt-2 ml-11 font-medium">I reply to all inquiries within 24 hours.</p>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-7 bg-white/80 backdrop-blur-2xl rounded-[3rem] p-8 md:p-14 shadow-[0_20px_60px_rgba(0,0,0,0.05)] border border-white relative overflow-hidden"
          >
            {/* Glass reflection */}
            <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-white/60 to-transparent pointer-events-none"></div>

            <h3 className="text-3xl font-black text-slate-900 mb-10 relative z-10">Send a Message</h3>
            
            {status === 'success' ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-emerald-50 border border-emerald-100 text-emerald-800 p-10 rounded-[2rem] text-center py-20 relative z-10"
              >
                <div className="w-24 h-24 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6 text-emerald-500 shadow-[0_0_30px_rgba(16,185,129,0.2)] animate-bounce font-bold">
                  <Send size={40} />
                </div>
                <h4 className="text-3xl font-black mb-4">Message Sent!</h4>
                <p className="text-emerald-600 text-lg font-medium">Thank you for reaching out. I will get back to you shortly.</p>
              </motion.div>
            ) : (
             <form onSubmit={handleSubmit} className="space-y-8 relative z-10">
               <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                 <div className="space-y-3">
                   <label className="text-xs font-black text-slate-400 uppercase tracking-widest ml-1">Your Name</label>
                   <input 
                     type="text" 
                     name="name"
                     value={formData.name}
                     onChange={handleChange}
                     required
                     className="w-full px-6 py-4 rounded-2xl border-0 focus:ring-4 focus:ring-indigo-100 outline-none transition-all placeholder:text-slate-400 bg-slate-50/80 hover:bg-slate-100/80 text-slate-800 font-bold shadow-inner"
                     placeholder="John Doe"
                   />
                 </div>
                 <div className="space-y-3">
                   <label className="text-xs font-black text-slate-400 uppercase tracking-widest ml-1">Email Address</label>
                   <input 
                     type="email" 
                     name="email"
                     value={formData.email}
                     onChange={handleChange}
                     required
                     className="w-full px-6 py-4 rounded-2xl border-0 focus:ring-4 focus:ring-indigo-100 outline-none transition-all placeholder:text-slate-400 bg-slate-50/80 hover:bg-slate-100/80 text-slate-800 font-bold shadow-inner"
                     placeholder="john@example.com"
                   />
                 </div>
               </div>
               
               <div className="space-y-3">
                 <label className="text-xs font-black text-slate-400 uppercase tracking-widest ml-1">Subject</label>
                 <select 
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-6 py-4 rounded-2xl border-0 focus:ring-4 focus:ring-indigo-100 outline-none transition-all placeholder:text-slate-400 bg-slate-50/80 hover:bg-slate-100/80 text-slate-800 font-bold shadow-inner appearance-none cursor-pointer"
                 >
                    <option value="" disabled>Select a topic</option>
                    <option value="Online Tutoring">Online Tutoring</option>
                    <option value="Exam Preparation">Exam Preparation</option>
                    <option value="Assignment Help">Assignment Help</option>
                    <option value="General Inquiry">General Inquiry</option>
                 </select>
               </div>

               <div className="space-y-3">
                 <label className="text-xs font-black text-slate-400 uppercase tracking-widest ml-1">Message</label>
                 <textarea 
                   name="message"
                   value={formData.message}
                   onChange={handleChange}
                   required
                   rows="5"
                   className="w-full px-6 py-4 rounded-2xl border-0 focus:ring-4 focus:ring-indigo-100 outline-none transition-all placeholder:text-slate-400 bg-slate-50/80 hover:bg-slate-100/80 text-slate-800 font-bold shadow-inner resize-none"
                   placeholder="How can I help you?"
                 ></textarea>
               </div>

               <button 
                 type="submit" 
                 disabled={status === 'submitting'}
                 className="w-full py-5 mt-4 bg-slate-900 text-white font-black text-lg rounded-2xl hover:bg-indigo-600 transition-all duration-300 flex items-center justify-center shadow-[0_10px_20px_rgba(0,0,0,0.1)] hover:shadow-[0_15px_30px_rgba(79,70,229,0.3)] disabled:opacity-70 transform hover:-translate-y-1 relative overflow-hidden group"
               >
                 <div className="absolute inset-0 w-1/4 h-full bg-white/20 skew-x-12 -translate-x-24 group-hover:animate-[shine_1.5s_ease-in-out]"></div>
                 {status === 'submitting' ? (
                   <span className="flex items-center">
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending...
                   </span>
                 ) : (
                   <span className="flex items-center">Send Message <Send size={20} className="ml-3 group-hover:translate-x-1 transition-transform" /></span>
                 )}
               </button>
             </form>
            )}
          </motion.div>
        
        </div>
      </div>
    </section>
  );
};

export default Contact;
