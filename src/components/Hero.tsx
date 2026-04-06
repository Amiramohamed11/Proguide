import React, { useEffect, useState } from 'react';
import { getSettings, HeroSettings } from '../lib/api';
import { mockHeroSettings } from '../data/mockData';

const Hero = () => {
  const [settings, setSettings] = useState<HeroSettings | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchHeroData = async () => {
      console.log("Attempting to fetch data from API...");
      try {
        const data = await getSettings();
        console.log("Data loaded into Hero:", data);
        setSettings(data);
      } catch (error) {
        console.error("Hero component fetch error:", error);
        setSettings(mockHeroSettings);
      } finally {
        setLoading(false);
      }
    };

    fetchHeroData();
  }, []);

  if (loading) return <div className="h-screen flex items-center justify-center">Loading...</div>;
  if (!settings) return null;

  return (
    <section 
      className="hero-section min-h-screen flex items-center bg-cover bg-center" 
      style={{ backgroundImage: `url(${settings.hero.background_image || '/default-bg.jpg'})` }}
    >
      <div className="container mx-auto px-4 text-white">
        <h1 className="text-5xl font-bold mb-4">{settings.hero.title}</h1>
        <p className="text-xl mb-8 max-w-2xl">{settings.hero.subtitle}</p>
        <a 
          href={settings.hero.button_url} 
          className="bg-sky-500 hover:bg-sky-600 text-white px-8 py-3 rounded-full transition"
        >
          {settings.hero.button_text}
        </a>
      </div>
    </section>
  );
};

export default Hero;