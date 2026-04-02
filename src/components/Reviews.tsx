import React from 'react';
import { motion } from 'motion/react';
import { ChevronRight } from 'lucide-react';
import wir from '../assets/wir.png'


const Reviews = () => {
  return (
     <section className="py-24 px-6 max-w-7xl mx-auto font-sans">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <img 
            src={wir} 
            alt="Physiotherapy" 
            className="rounded-2xl shadow-2xl w-full object-cover aspect-[4/3]"
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 leading-tight">
            Wir sind für Sie da – zu Hause oder in unserer Praxis
          </h2>
          <p className="text-slate-600 leading-relaxed text-lg">
            Ob bei Ihnen zu Hause oder in einer Pflegeeinrichtung: Wir bieten auch Hausbesuche an und kommen dorthin, wo Sie unsere Unterstützung benötigen.
          </p>
          <button className="bg-sky-500 hover:bg-sky-600 text-white px-8 py-3 rounded-full font-medium transition-all shadow-lg flex items-center gap-2 group">
            Kontaktieren Sie uns
            <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Reviews;
