import React from 'react';
import { motion } from 'motion/react';
import person from '../assets/personal-img.png'

const Gallery = () => {
  return (
     <section className="relative py-20 px-6 overflow-hidden bg-gradient-to-b from-sky-400 to-sky-300 text-white text-center font-sans">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl mx-auto"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-8">Das sagen unsere Patienten</h2>
        <blockquote className="text-lg md:text-xl italic leading-relaxed mb-10 opacity-90">
          "Ich habe mich vom ersten Termin an sehr gut aufgehoben gefühlt. Die Behandlung war individuell auf meine Beschwerden abgestimmt und bereits nach wenigen Sitzungen spürte ich eine deutliche Verbesserung. Das Team ist freundlich, kompetent und sehr engagiert. Absolute Empfehlung!"
        </blockquote>
        <div className="flex flex-col items-center">
          <img 
            src={person}
            alt="Patient" 
            className="w-16 h-16 rounded-full border-2 border-white mb-4 object-cover"
          />
          <p className="font-semibold text-lg">Gerhard Schröder</p>
          <div className="w-12 h-1 bg-white mt-4 rounded-full opacity-50"></div>
        </div>
      </motion.div>
    </section>
  );
};

export default Gallery;
