import axios from 'axios';

const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:8080/api';

const apiClient = axios.create({
  baseURL: API_BASE_URL,
  timeout: 8000,
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
  },
});

export const apiService = {
  // Check backend & DB connectivity
  checkHealth: async () => {
    const response = await apiClient.get('/health');
    return response.data;
  },

  // Dynamic portfolio content
  getProjects: async () => {
    const response = await apiClient.get('/projects');
    return response.data;
  },

  getSkills: async () => {
    const response = await apiClient.get('/skills');
    return response.data;
  },

  getExperience: async () => {
    const response = await apiClient.get('/experience');
    return response.data;
  },

  getEducation: async () => {
    const response = await apiClient.get('/education');
    return response.data;
  },

  getAchievements: async () => {
    const response = await apiClient.get('/achievements');
    return response.data;
  },

  getCertifications: async () => {
    const response = await apiClient.get('/certifications');
    return response.data;
  },

  // Contact form submission -> persists to MySQL
  submitContact: async (payload) => {
    const response = await apiClient.post('/contact', payload);
    return response.data;
  },
};

export default apiClient;
