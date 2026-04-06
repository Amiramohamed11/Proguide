import React, { useEffect, useState } from 'react';
import { getSettings, HeroSettings } from '../lib/api'; // استدعاء الدالة من ملف api.ts
import { mockHeroSettings } from '../data/mockData';

const Hero = () => {
  // 1. تعريف الحالة (State) لتخزين البيانات القادمة من السيرفر
  const [settings, setSettings] = useState<HeroSettings | null>(null);
  const [loading, setLoading] = useState(true);

  // 2. استخدام useEffect لمناداة السيرفر بمجرد فتح الصفحة
  useEffect(() => {
    const fetchHeroData = async () => {
      try {
        const data = await getSettings();
        setSettings(data); // تخزين البيانات الحقيقية
      } catch (error) {
        console.error("Failed to load hero settings", error);
        setSettings(mockHeroSettings); // كخطة بديلة لو فشل السيرفر
      } finally {
        setLoading(false);
      }
    };

    fetchHeroData();
  }, []);

  // 3. حالة الانتظار (لو لسه البيانات مجتش)
  if (loading || !settings) return <div>Loading...</div>;

  // 4. عرض البيانات الديناميكية
  return (
    <section 
      className="hero-section" 
      style={{ backgroundImage: `url(${settings.hero.background_image || '/default-bg.jpg'})` }}
    >
      <div className="container">
        {/* هنا نضع العنوان الذي غيرتيه في لوحة التحكم */}
        <h1>{settings.hero.title}</h1> 
        <p>{settings.hero.subtitle}</p>
        <a href={settings.hero.button_url} className="btn">
          {settings.hero.button_text}
        </a>
      </div>
    </section>
  );
};

export default Hero;