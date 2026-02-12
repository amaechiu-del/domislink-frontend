import api from './api';

export const healthService = {
  checkHealth: async () => {
    try {
      const response = await api.get('/api/health');
      return { success: true, data: response.data };
    } catch (error) {
      return { 
        success: false, 
        error: error.message,
        status: error.response?.status || 'unknown'
      };
    }
  },
};

export const apiService = {
  hello: async () => {
    try {
      const response = await api.get('/api/hello');
      return { success: true, data: response.data };
    } catch (error) {
      return { 
        success: false, 
        error: error.message 
      };
    }
  },
};
