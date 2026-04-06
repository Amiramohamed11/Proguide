import axios from 'axios';
import { mockHeroSettings, mockServices, mockTestimonials, mockFaq } from '../data/mockData';

// جربي هذا الرابط (بدون v1) لأنه الأرجح في المواقع المرفوعة بنظام PHP/Laravel مثل موقعك
const API_BASE_URL = 'https://proaktivphysio.de/api'; 

export const getSettings = async (): Promise<any> => {
  try {
    const response = await axios.get(`${API_BASE_URL}/settings`);
    
    // هذه الجملة ستظهر في المتصفح وتكشف لنا المستور
    console.log("SUCCESS! Data received:", response.data);
    
    return response.data.data || response.data;
  } catch (error) {
    // لو فشل، سيخبرنا هنا لماذا فشل
    console.error("API Connection Failed. Using Mock Data. Error:", error);
    return mockHeroSettings;
  }
};

// كررنا نفس المنطق لبقية الدوال لضمان استقرار الموقع
export const getServices = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/services`);
    return response.data.data || response.data;
  } catch (error) {
    return mockServices.data;
  }
};

export const getTestimonials = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/testimonials`);
    return response.data.data || response.data;
  } catch (error) {
    return mockTestimonials.data;
  }
};

export const getFaq = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/faq`);
    return response.data.data || response.data;
  } catch (error) {
    return mockFaq.data;
  }
};