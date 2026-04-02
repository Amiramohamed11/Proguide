import React from 'react';
import { motion } from 'motion/react';

const Testimonials = () => {
  return (
    <section className="py-24 bg-sky text-white text-center">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="text-3xl font-bold mb-8">Das sagen unsere Patienten</h3>
          <blockquote className="text-xl md:text-2xl italic mb-10 leading-relaxed">
            „Ich habe mich vom ersten Termin an sehr gut aufgehoben gefühlt. Die Behandlung war individuell auf meine Beschwerden abgestimmt und bereits nach wenigen Sitzungen spürte ich eine deutliche Verbesserung. Das Team ist freundlich, kompetent und sehr engagiert. Absolute Empfehlung!“
          </blockquote>
          
          <div className="flex flex-col items-center">
            <img 
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=100" 
              alt="Gerhard Schröder" 
              className="w-20 h-20 rounded-full border-4 border-white/20 mb-4 object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="font-bold text-lg">Gerhard Schröder</div>
            <div className="flex gap-2 mt-2">
              <div className="w-8 h-1 bg-white"></div>
              <div className="w-8 h-1 bg-white/40"></div>
              <div className="w-8 h-1 bg-white/40"></div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
