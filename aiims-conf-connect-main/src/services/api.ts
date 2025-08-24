
import axios from 'axios';

// Create an axios instance
const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

const api = axios.create({
  baseURL: API_URL,
  withCredentials: true
});

// Types
export interface Registrant {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  organization: string;
  designation: string;
  registrationType: 'regular' | 'student' | 'earlyBird';
  specialization: string;
  dietaryRestrictions?: string;
  emergencyContact: string;
  additionalNotes?: string;
  registrationDate: string;
}

export interface LoginCredentials {
  username: string;
  password: string;
}

export interface User {
  id: string;
  username: string;
  email: string;
  role: string;
}

export interface AuthResponse {
  success: boolean;
  token: string;
  user: User;
}

// API functions
export const apiService = {
  // Auth
  login: async (credentials: LoginCredentials): Promise<AuthResponse> => {
    try {
      const response = await api.post('/auth/login', credentials);
      return response.data;
    } catch (error) {
      console.error('Login error:', error);
      throw error;
    }
  },
  
  logout: async () => {
    try {
      const response = await api.get('/auth/logout');
      return response.data;
    } catch (error) {
      console.error('Logout error:', error);
      throw error;
    }
  },
  
  getCurrentUser: async (): Promise<User | null> => {
    try {
      const response = await api.get('/auth/me');
      return response.data.user;
    } catch (error) {
      console.error('Get current user error:', error);
      return null;
    }
  },
  
  // Registration
  submitRegistration: async (data: Omit<Registrant, 'id' | 'registrationDate'>) => {
    try {
      const response = await api.post('/registrations', data);
      return response.data;
    } catch (error) {
      console.error('Submit registration error:', error);
      throw error;
    }
  },
  
  // Get registrations
  getRegistrations: async () => {
    try {
      const response = await api.get('/registrations');
      return response.data;
    } catch (error) {
      console.error('Get registrations error:', error);
      throw error;
    }
  },
  
  // Export to CSV
  exportToCSV: async () => {
    try {
      // Using window.open for direct download
      window.open(`${API_URL}/registrations/export`, '_blank');
      return { success: true };
    } catch (error) {
      console.error('Export to CSV error:', error);
      throw error;
    }
  }
};
