import React from 'react';
import { motion } from 'framer-motion'; // تأكد من استخدام الاسم الصحيح للمكتبة
import contact from '../assets/contact.jpg'

const ContactForm = () => {
  return (
    // تغيير لون الخلفية الأساسي إلى أزرق داكن غني
    <section className="relative py-24 px-6 bg-[#001f3f] overflow-hidden font-sans"> 
      
      {/* طبقة التراكب: إضافة لون أزرق شفاف ليتفاعل مع الصورة */}
      <div className="absolute inset-0 bg-blue-900 opacity-60 z-0"></div> 

      {/* الصورة: زيادة التعتيم قليلاً لجعل التراكب اللوني يبرز */}
      <div className="absolute inset-0 opacity-15"> 
        <img src={contact} className="w-full h-full object-cover" alt="Background" />
      </div>

      <div className="relative max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-start z-10">
        <div className="text-white space-y-6">
          <h2 className="text-4xl md:text-5xl font-bold">Kontaktieren Sie uns</h2>
          <div className="w-20 h-1 bg-sky-500"></div>
          <p className="text-slate-300 text-lg">
            Wir sind gerne für Sie da und beantworten Ihre Fragen.
          </p>
        </div>
        
        {/* تصميم النموذج */}
        <div className="bg-white/5 backdrop-blur-md p-8 rounded-2xl border border-white/10 shadow-2xl">
          <form className="space-y-4">
            <input type="text" placeholder="Ihr Name" className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white focus:ring-2 focus:ring-sky-500 outline-none" />
            <input type="tel" placeholder="Telefonnummer" className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white focus:ring-2 focus:ring-sky-500 outline-none" />
            <input type="email" placeholder="E-Mail" className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white focus:ring-2 focus:ring-sky-500 outline-none" />
            <textarea rows={4} placeholder="Ihre Mitteilung" className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white focus:ring-2 focus:ring-sky-500 outline-none resize-none"></textarea>
            <button className="w-full bg-sky-500 hover:bg-sky-600 text-white font-bold py-4 rounded-lg transition-all">Senden</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;