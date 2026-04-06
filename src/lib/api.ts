import axios from 'axios';
import { mockHeroSettings, mockServices, mockTestimonials, mockFaq } from '../data/mockData';

// الرابط المباشر لـ API الموقع
const API_BASE_URL = 'https://proaktivphysio.de/api'; 

export const getSettings = async (): Promise<any> => {
  try {
    const response = await axios.get(`${API_BASE_URL}/settings`);
    console.log("API Response Success:", response.data);
    // إرجاع البيانات سواء كانت داخل data أو مباشرة
    return response.data.data || response.data;
  } catch (error) {
    console.error("API Error - Settings:", error);
    return mockHeroSettings; // عرض البيانات الوهمية في حال الفشل
  }
};

export const getServices = async (): Promise<any[]> => {
  try {
    const response = await axios.get(`${API_BASE_URL}/services`);
    const data = response.data.data || response.data;
    return Array.isArray(data) ? data : (data.services || []);
  } catch (error) {
    console.error("API Error - Services:", error);
    return mockServices.data;
  }
};

// واجهات البيانات (Interfaces) لضمان عدم وجود أخطاء في الـ TypeScript
export interface HeroSettings {
  hero: {
    title: string;
    subtitle: string;
    button_text: string;
    button_url: string;
    background_image: string | null;
  };
}