import { 
  mockServices, 
  mockHeroSettings, 
  mockTestimonials, 
  mockGallery, 
  mockFaq, 
  mockContactInfo 
} from '../data/mockData';

// Helper for simulating network delay
const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

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
    button_url: string | null;
    background_image: string | null;
  };
  home_visit: {
    title: string;
    description: string;
    button_text: string;
    button_url: string | null;
    image: string | null;
  };
}

export interface Testimonial {
  id: number;
  patient_name: string;
  content: string;
  image: string | null;
  rating: number;
  order: number;
}

export interface GalleryItem {
  id: number;
  image: string | null;
  caption: string;
  order: number;
}

export interface FaqItem {
  id: number;
  question: string;
  answer: string;
  order: number;
}

export const api = {
  getSettings: async (): Promise<{ data: HeroSettings }> => {
    await delay(600);
    return mockHeroSettings;
  },

  getServices: async (): Promise<{ data: Service[] }> => {
    await delay(700);
    return mockServices;
  },

  getTestimonials: async (): Promise<{ data: Testimonial[] }> => {
    await delay(500);
    return mockTestimonials;
  },

  getGallery: async (): Promise<{ data: GalleryItem[] }> => {
    await delay(500);
    return mockGallery;
  },

  getFaq: async (): Promise<{ data: FaqItem[] }> => {
    await delay(400);
    return mockFaq;
  },

  submitContactForm: async (data: any): Promise<{ message: string }> => {
    await delay(1000);
    // Simulate success
    return { message: "Your message has been sent successfully." };
  }
};
