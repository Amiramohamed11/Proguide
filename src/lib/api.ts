import axios from 'axios';
import { 
  mockServices, 
  mockHeroSettings, 
  mockTestimonials, 
  mockFaq 
} from '../data/mockData';

/**
 * الرابط الأساسي للـ API الحقيقي 
 * تم التعديل بناءً على رابط الموقع: https://proaktivphysio.de/
 */
const API_BASE_URL = 'https://proaktivphysio.de/api/v1'; 

// --- 1. تعريف أنواع البيانات (Interfaces) ---

export interface Service {
  id: number;
  title: string;
  description: string;
  features: string[];
  image: string | null;
  button_text: string;
  button_url: string | null;
  order: number;
}

export interface HeroSettings {
  hero: {
    title: string;
    subtitle: string;
    button_text: string;
    button_url: string;
    background_image: string | null;
  };
  home_visit: {
    title: string;
    description: string;
    button_text: string;
    button_url: string;
    image: string | null;
  };
}

// --- 2. الدوال البرمجية (Functions) لجلب البيانات ---

// جلب إعدادات الهيرو والقسم المنزلي
export const getSettings = async (): Promise<HeroSettings> => {
  try {
    const response = await axios.get(`${API_BASE_URL}/settings`);
    return response.data.data; 
  } catch (error) {
    console.error("Error fetching settings:", error);
    return mockHeroSettings; 
  }
};

// جلب قائمة الخدمات
export const getServices = async (): Promise<Service[]> => {
  try {
    const response = await axios.get(`${API_BASE_URL}/services`);
    return response.data.data;
  } catch (error) {
    console.error("Error fetching services:", error);
    return mockServices.data;
  }
};

// جلب آراء العملاء
export const getTestimonials = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/testimonials`);
    return response.data.data;
  } catch (error) {
    console.error("Error fetching testimonials:", error);
    return mockTestimonials.data;
  }
};

// جلب الأسئلة الشائعة
export const getFaq = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/faq`);
    return response.data.data;
  } catch (error) {
    console.error("Error fetching FAQ:", error);
    return mockFaq.data;
  }
};

// إرسال نموذج الاتصال (POST)
export const submitContactForm = async (formData: any) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/contact/submit`, formData);
    return response.data;
  } catch (error) {
    console.error("Error submitting form:", error);
    throw error;
  }
};