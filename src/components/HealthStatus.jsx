import { useHealthCheck } from '../hooks/useHealthCheck';

const HealthStatus = () => {
  const { status, message, error, loading } = useHealthCheck();

  const statusConfig = {
    checking: {
      color: 'bg-yellow-100 text-yellow-800 border-yellow-200',
      icon: '🔄',
      text: 'Checking backend status...',
    },
    healthy: {
      color: 'bg-green-100 text-green-800 border-green-200',
      icon: '✓',
      text: message || 'Backend is healthy',
    },
    unhealthy: {
      color: 'bg-red-100 text-red-800 border-red-200',
      icon: '✗',
      text: error || 'Backend is unavailable',
    },
  };

  const config = statusConfig[status] || statusConfig.checking;

  return (
    <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-lg border ${config.color}`}>
      <span className="text-lg">{config.icon}</span>
      <span className="font-medium">{config.text}</span>
      {loading && (
        <svg
          className="animate-spin h-4 w-4"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          ></circle>
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
          ></path>
        </svg>
      )}
    </div>
  );
};

export default HealthStatus;
