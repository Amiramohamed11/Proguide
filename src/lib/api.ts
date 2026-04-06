import axios from 'axios';
// نستورد البيانات الوهمية فقط كاحتياط (Backup)
import { mockServices, mockHeroSettings, mockTestimonials } from '../data/mockData';

// 1. ضعي هنا الرابط الأساسي الذي سيعطيه لكِ مبرمج الباك إند
const API_BASE_URL = 'https://proaktivphysio.de/api'; 

export const getServices = async () => {
  try {
    // 2. طلب البيانات الحقيقي
    const response = await axios.get(`${API_BASE_URL}/services`);
    
    // 3. إرجاع البيانات القادمة من السيرفر
    return response.data; 
  } catch (error) {
    console.error("خطأ في جلب الخدمات من السيرفر:", error);
    // في حال فشل السيرفر، يظهر الموقع بالبيانات القديمة بدلاً من أن يختفي
    return mockServices.data; 
  }
};

export const getSettings = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/settings`);
    return response.data;
  } catch (error) {
    console.error("خطأ في جلب إعدادات الهيرو:", error);
    return mockHeroSettings;
  }
};

export const getTestimonials = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/testimonials`);
    return response.data;
  } catch (error) {
    return mockTestimonials.data;
  }
};

// دالة إرسال البيانات (Contact Form) للسيرفر
export const submitContactForm = async (formData: any) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/contact`, formData);
    return response.data;
  } catch (error) {
    console.error("خطأ في إرسال النموذج:", error);
    throw error;
  }
};