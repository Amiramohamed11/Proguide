import React from 'react';
import { motion, Variants } from 'framer-motion';

// استيراد الصور
import img1 from '../assets/gallery1.png';
import img2 from '../assets/gallery2.png';
import img3 from '../assets/gallery3.png';
import img4 from '../assets/gallery4.png';
import img5 from '../assets/gallery5.png';

// تعريف مصفوفة الصور مع تحديد النوع كـ string
const images: string[] = [img1, img3, img4, img2, img5];

// إضافة الأنواع (Variants) لإصلاح أخطاء TypeScript في Framer Motion
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1, 
    },
  },
};

const itemVariants: Variants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.5, ease: 'easeOut' },
  },
};

const Gallery: React.FC = () => {
  return (
    <section className="py-24 bg-slate-50 px-6 font-sans">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-slate-800">
          Bildergalerie
        </h2>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-[250px]"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {images.map((src, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
              className={`overflow-hidden rounded-xl shadow-md ${
                index === 1 ? 'md:row-span-2' : 'md:col-span-1'
              }`}
            >
              <img
                src={src}
                alt={`Gallery image ${index + 1}`}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Gallery;