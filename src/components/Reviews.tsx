import React, { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { ChevronRight } from 'lucide-react';
import wir from '../assets/wir.png'
import { api, HeroSettings } from '../lib/api';

const Reviews = () => {
  const [settings, setSettings] = useState<HeroSettings | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSettings = async () => {
      try {
        const response = await api.getSettings();
        setSettings(response.data);
      } catch (error) {
        console.error("Failed to fetch settings", error);
      } finally {
        setLoading(false);
      }
    };
    fetchSettings();
  }, []);

  const homeVisitData = settings?.home_visit || {
    title: "Wir sind für Sie da – zu Hause oder in unserer Praxis",
    description: "Ob bei Ihnen zu Hause oder in einer Pflegeeinrichtung: Wir bieten auch Hausbesuche an und kommen dorthin, wo Sie unsere Unterstützung benötigen.",
    button_text: "Kontaktieren Sie uns",
    image: null
  };

  return (
     <section className="py-24 px-6 max-w-7xl mx-auto font-sans">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {loading ? (
            <div className="animate-pulse bg-slate-200 rounded-2xl w-full aspect-[4/3]"></div>
          ) : (
            <img 
              src={homeVisitData.image || wir} 
              alt="Physiotherapy" 
              className="rounded-2xl shadow-2xl w-full object-cover aspect-[4/3]"
              referrerPolicy="no-referrer"
            />
          )}
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          {loading ? (
            <div className="animate-pulse space-y-4 w-full">
              <div className="h-10 bg-slate-200 rounded w-full"></div>
              <div className="h-10 bg-slate-200 rounded w-3/4"></div>
              <div className="h-4 bg-slate-200 rounded w-full mt-4"></div>
              <div className="h-4 bg-slate-200 rounded w-5/6"></div>
              <div className="h-12 bg-slate-200 rounded-full w-48 mt-6"></div>
            </div>
          ) : (
            <>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-800 leading-tight">
                {homeVisitData.title}
              </h2>
              <p className="text-slate-600 leading-relaxed text-lg">
                {homeVisitData.description}
              </p>
              <button className="bg-sky-500 hover:bg-sky-600 text-white px-8 py-3 rounded-full font-medium transition-all shadow-lg flex items-center gap-2 group">
                {homeVisitData.button_text}
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default Reviews;
