import React from 'react';
import { motion } from 'motion/react';
import { Check } from 'lucide-react';
import { cn } from '../lib/utils';
import motor from '../assets/motor1-img.jpg'
import motor2 from '../assets/motor2.jpg'
import motor3 from '../assets/motor3.png'
import motor4 from '../assets/motor4.png'
import motor5 from '../assets/motor5.png'
import motor6 from '../assets/motor6.png'
import motor7 from '../assets/motor7.png'
import motor8 from '../assets/motor8.png'
import motor9 from '../assets/motor9.png'

const services = [
  {
    title: "Krankengymnastik",
    description: "Individuelle Therapie zur Verbesserung von Kraft, Ausdauer und Beweglichkeit.",
    features: ["Nach Operationen", "Muskuläre Defizite", "Bewegungseinschränkungen", "Rückenbeschwerden (z. B. Bandscheibenvorfall)"],
    image: motor,
  },
  {
    title: "CMD Behandlung (Kiefergelenkstherapie)",
    description: "Spezialisierte Therapie bei Beschwerden im Kiefer- und Kopfbereich.",
    features: ["Zähneknirschen (Bruxismus)", "Kiefergelenkknacken", "Verspannungen im Kiefer-, Nacken- und Schulterbereich", "Kieferfehlstellungen"],
    image: motor2,
  },
  {
    title: "Manuelle Therapie",
    description: "Spezielle Techniken zur Behandlung von Gelenk- und Funktionsstörungen.",
    features: ["Wirbelsäulenbeschwerden", "Gelenkblockaden", "Funktionsstörungen des Bewegungsapparates", "Bewegungseinschränkungen"],
    image: motor3,
  },
  {
    title: "Manuelle Lymphdrainage",
    description: "Sanfte Therapie zur Förderung des Lymphflusses und zur Schwellungsreduktion.",
    features: ["Lymphödem (primär / sekundär)", "Lipödem / Lipo-Lymphödem", "Postoperative oder posttraumatische Ödeme", "Phlebo-lymphatische Ödeme"],
    image: motor4,
  },
  {
    title: "Gerätegestütztes Training",
    description: "Medizinisches Training zur Stärkung und Verbesserung der Ausdauer.",
    features: ["Nach Operationen", "Chronische Rücken- oder Gelenkbeschwerden", "Haltungsschwächen und muskuläre Dysbalancen", "Sturzprophylaxe im Alter"],
    image: motor5,
  },
  {
    title: "Wärmeanwendung / Fango",
    description: "Tiefenwirksame Wärme zur Entspannung der Muskulatur und Schmerzlinderung.",
    features: ["Muskelverspannungen", "Chronische Gelenkbeschwerden", "Rückenschmerzen", "Vorbereitung auf physiotherapeutische Behandlungen"],
    image: motor6,
  },
  {
    title: "Faszientherapie",
    description: "Bindegewebebehandlung zur Schmerzlinderung und besseren Beweglichkeit.",
    features: ["Chronische Schmerzen", "Bewegungseinschränkungen", "Muskuläre Dysbalancen", "Nach Sportverletzungen"],
    image: motor7,
  },
  {
    title: "Kinesio-Taping",
    description: "Tapes zur Unterstützung von Muskeln und Gelenken.",
    features: ["Muskelverspannungen", "Stabilisierung nach Verletzungen", "Schwellungen und Lymphabflussstörungen"],
    image: motor8,
  },
  {
    title: "Elektrotherapie",
    description: "Therapie mit elektrischen Impulsen zur Muskelstimulation und Schmerzlinderung.",
    features: ["Akute und chronische Schmerzen", "Muskelverletzungen oder Lähmungen", "Durchblutungsstörungen", "Gelenkentzündungen"],
    image: motor9,
  }
];

const Services = () => {
  return (
    <section id="services" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl font-bold text-navy mb-4 uppercase tracking-wider">
Kontaktieren Sie uns            </h2>
          <div className="w-20 h-1 bg-sky mx-auto mb-6"></div>
          <p className="text-slate-600 max-w-2xl mx-auto text-lg">
            Unser Team vereint junge Talente und erfahrene Spezialisten für Ihre beste Behandlung.
          </p>
        </div>

        <div className="space-y-16">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className={cn(
                "flex flex-col lg:flex-row items-stretch gap-0 rounded-3xl overflow-hidden shadow-xl shadow-navy/5 bg-light-sky border border-navy/5",
                index % 2 === 1 ? "lg:flex-row-reverse" : ""
              )}
            >
              <div className="w-full lg:w-1/2 h-80 lg:h-auto overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                  referrerPolicy="no-referrer"
                />
              </div>
              
              <div className="w-full lg:w-1/2 p-10 lg:p-16 flex flex-col justify-center">
                <span className="text-sky font-bold text-sm uppercase tracking-widest mb-2">Physiotherapie</span>
                <h4 className="text-3xl font-bold text-navy mb-6">{service.title}</h4>
                <p className="text-slate-600 mb-8 text-base leading-relaxed">
                  {service.description}
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
                  {service.features.map((feature, fIndex) => (
                    <div key={fIndex} className="flex items-start gap-3 text-sm text-slate-700">
                      <div className="mt-1 bg-sky/10 rounded-full p-1">
                        <Check size={14} className="text-sky" />
                      </div>
                      <span className="font-medium">{feature}</span>
                    </div>
                  ))}
                </div>
                <button className="bg-navy text-white px-10 py-4 rounded-full font-bold hover:bg-sky transition-all self-start shadow-lg shadow-navy/20">
                  Kontaktieren Sie uns!
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
