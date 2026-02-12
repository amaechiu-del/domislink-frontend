import HealthStatus from '../components/HealthStatus';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 to-blue-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <svg
                className="h-8 w-8 text-primary-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                />
              </svg>
              <h1 className="text-2xl font-bold text-gray-900">DomisLink</h1>
            </div>
            <HealthStatus />
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center">
          <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-4">
            Welcome to{' '}
            <span className="text-primary-600">DomisLink</span>
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            A modern React frontend microservice ready for Cloudflare Pages deployment.
            Built with React 18, Vite, and Tailwind CSS.
          </p>
          <div className="flex gap-4 justify-center">
            <button className="btn-primary">
              Get Started
            </button>
            <button className="btn-secondary">
              Learn More
            </button>
          </div>
        </div>

        {/* Features Section */}
        <div className="mt-20 grid md:grid-cols-3 gap-8">
          <div className="card hover:shadow-lg transition-shadow">
            <div className="flex items-center justify-center h-12 w-12 rounded-md bg-primary-500 text-white mb-4">
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              Lightning Fast
            </h3>
            <p className="text-gray-600">
              Built with Vite for instant hot module replacement and optimized production builds.
            </p>
          </div>

          <div className="card hover:shadow-lg transition-shadow">
            <div className="flex items-center justify-center h-12 w-12 rounded-md bg-primary-500 text-white mb-4">
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
                />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              Modern Design
            </h3>
            <p className="text-gray-600">
              Beautiful UI components styled with Tailwind CSS for a modern, responsive design.
            </p>
          </div>

          <div className="card hover:shadow-lg transition-shadow">
            <div className="flex items-center justify-center h-12 w-12 rounded-md bg-primary-500 text-white mb-4">
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"
                />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              Cloudflare Ready
            </h3>
            <p className="text-gray-600">
              Configured for seamless deployment to Cloudflare Pages with optimal performance.
            </p>
          </div>
        </div>

        {/* API Status Section */}
        <div className="mt-16 card max-w-2xl mx-auto">
          <h3 className="text-xl font-semibold text-gray-900 mb-4 text-center">
            System Status
          </h3>
          <div className="flex flex-col items-center space-y-4">
            <HealthStatus />
            <p className="text-sm text-gray-600 text-center">
              Backend API: <code className="bg-gray-100 px-2 py-1 rounded">
                {import.meta.env.VITE_API_URL || 'Not configured'}
              </code>
            </p>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <p className="text-center text-gray-500 text-sm">
            © 2024 DomisLink. Built with React 18, Vite, and Tailwind CSS.
          </p>
        </div>
      </footer>
    </div>
  );
}
