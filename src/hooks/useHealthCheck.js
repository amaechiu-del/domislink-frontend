import { useState, useEffect } from 'react';
import { healthService } from '../services/healthService';

export const useHealthCheck = () => {
  const [health, setHealth] = useState({
    status: 'checking',
    message: null,
    error: null,
    loading: true,
  });

  useEffect(() => {
    const checkHealth = async () => {
      setHealth(prev => ({ ...prev, loading: true }));
      
      const result = await healthService.checkHealth();
      
      if (result.success) {
        setHealth({
          status: 'healthy',
          message: result.data?.message || 'Backend is healthy',
          error: null,
          loading: false,
        });
      } else {
        setHealth({
          status: 'unhealthy',
          message: null,
          error: result.error || 'Failed to connect to backend',
          loading: false,
        });
      }
    };

    checkHealth();
    
    // Check health every 30 seconds
    const interval = setInterval(checkHealth, 30000);
    
    return () => clearInterval(interval);
  }, []);

  return health;
};
