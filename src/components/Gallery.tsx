import React, { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import person from '../assets/personal-img.png'
import { api, Testimonial } from '../lib/api';

const Gallery = () => {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        const response = await api.getTestimonials();
        setTestimonials(response.data);
      } catch (error) {
        console.error("Failed to fetch testimonials", error);
      } finally {
        setLoading(false);
      }
    };
    fetchTestimonials();
  }, []);

  return (
     <section className="relative py-20 px-6 overflow-hidden bg-gradient-to-b from-sky-400 to-sky-300 text-white text-center font-sans">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 z-10 relative">Das sagen unsere Patienten</h2>
        
        {loading ? (
          <div className="animate-pulse flex flex-col items-center">
            <div className="h-16 bg-white/20 rounded w-full mb-10"></div>
            <div className="w-16 h-16 bg-white/20 rounded-full mb-4"></div>
            <div className="h-6 bg-white/20 rounded w-32"></div>
          </div>
        ) : (
          testimonials.map((testimonial) => (
            <motion.div 
              key={testimonial.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="mb-16 last:mb-0"
            >
              <blockquote className="text-lg md:text-xl italic leading-relaxed mb-10 opacity-90">
                "{testimonial.content}"
              </blockquote>
              <div className="flex flex-col items-center">
                <img 
                  src={testimonial.image || person}
                  alt={testimonial.patient_name} 
                  className="w-16 h-16 rounded-full border-2 border-white mb-4 object-cover"
                  referrerPolicy="no-referrer"
                />
                <p className="font-semibold text-lg">{testimonial.patient_name}</p>
                <div className="flex gap-1 mt-2">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <span key={i} className={`text-xl ${i < testimonial.rating ? 'text-yellow-300' : 'text-slate-300'}`}>
                      ★
                    </span>
                  ))}
                </div>
                <div className="w-12 h-1 bg-white mt-4 rounded-full opacity-50"></div>
              </div>
            </motion.div>
          ))
        )}
      </div>
    </section>
  );
};

export default Gallery;
