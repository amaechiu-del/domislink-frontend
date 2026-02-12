# DomisLink Frontend

A modern, production-ready React frontend microservice built with React 18, Vite, and Tailwind CSS. Optimized for deployment on Cloudflare Pages.

## 🚀 Features

- **React 18**: Latest React features with concurrent rendering
- **Vite**: Lightning-fast development and optimized production builds
- **Tailwind CSS**: Utility-first CSS framework for rapid UI development
- **React Router v6**: Client-side routing with modern API
- **Axios**: Promise-based HTTP client for API integration
- **Zustand**: Lightweight state management (if needed)
- **Error Boundaries**: Graceful error handling throughout the app
- **Health Checks**: Real-time backend API status monitoring
- **SEO Optimized**: Meta tags for better search engine visibility
- **Responsive Design**: Mobile-first approach with Tailwind CSS

## 📋 Prerequisites

- Node.js >= 20.x
- npm or yarn

## 🛠️ Installation

1. Clone the repository:
```bash
git clone https://github.com/amaechiu-del/domislink-frontend.git
cd domislink-frontend
```

2. Install dependencies:
```bash
npm install
```

3. Create environment configuration:
```bash
cp .env.example .env
```

4. Update `.env` with your configuration:
```env
VITE_API_URL=http://localhost:3000
VITE_APP_NAME=DomisLink
VITE_APP_VERSION=1.0.0
```

## 🏃 Development

Start the development server:
```bash
npm run dev
```

The app will be available at `http://localhost:3000`

## 🏗️ Build

Create a production build:
```bash
npm run build
```

Preview the production build:
```bash
npm run preview
```

## 🌐 Deployment

### Cloudflare Pages

#### Option 1: Using Wrangler CLI

1. Install Wrangler (if not already installed):
```bash
npm install -g wrangler
```

2. Build and deploy:
```bash
npm run deploy
```

Or manually:
```bash
npm run build
npx wrangler pages deploy dist
```

#### Option 2: Using Cloudflare Dashboard

1. Build your project:
```bash
npm run build
```

2. Go to [Cloudflare Dashboard](https://dash.cloudflare.com/)
3. Navigate to **Workers & Pages** > **Create application** > **Pages**
4. Connect your GitHub repository or upload the `dist` folder
5. Configure build settings:
   - **Build command**: `npm run build`
   - **Build output directory**: `dist`
   - **Environment variables**: Add your `VITE_API_URL` and other variables

#### Option 3: Automatic Deployment with GitHub

Connect your repository to Cloudflare Pages for automatic deployments on every push:

1. Go to Cloudflare Dashboard > Workers & Pages
2. Click **Create application** > **Pages** > **Connect to Git**
3. Select your repository
4. Configure:
   - **Production branch**: `main`
   - **Build command**: `npm run build`
   - **Build output directory**: `dist`
5. Add environment variables in the dashboard

## 📁 Project Structure

```
domislink-frontend/
├── public/              # Static assets
├── src/
│   ├── components/      # Reusable UI components
│   │   ├── ErrorBoundary.jsx
│   │   ├── HealthStatus.jsx
│   │   ├── LoadingSpinner.jsx
│   │   └── SkeletonLoader.jsx
│   ├── hooks/           # Custom React hooks
│   │   ├── useHealthCheck.js
│   │   └── useFetch.js
│   ├── pages/           # Page components
│   │   └── Home.jsx
│   ├── services/        # API service layer
│   │   ├── api.js
│   │   └── healthService.js
│   ├── styles/          # Global styles
│   │   └── index.css
│   ├── utils/           # Utility functions
│   │   └── helpers.js
│   ├── App.jsx          # Main app component
│   └── main.jsx         # Entry point
├── .env.example         # Environment variables template
├── .gitignore           # Git ignore rules
├── index.html           # HTML entry point
├── package.json         # Dependencies and scripts
├── postcss.config.js    # PostCSS configuration
├── tailwind.config.js   # Tailwind CSS configuration
├── vite.config.js       # Vite configuration
├── wrangler.toml        # Cloudflare Pages configuration
└── README.md            # This file
```

## 🔧 Configuration

### Environment Variables

All environment variables must be prefixed with `VITE_` to be accessible in the application:

- `VITE_API_URL`: Backend API base URL
- `VITE_APP_NAME`: Application name
- `VITE_APP_VERSION`: Application version

### Vite Configuration

The `vite.config.js` file includes:
- React plugin
- Build optimizations
- Code splitting configuration
- Development server settings

### Tailwind Configuration

The `tailwind.config.js` includes:
- Custom color palette
- Extended theme configuration
- Content paths for JIT compilation

## 🧪 API Integration

The frontend connects to a backend API. Configure the API URL in your `.env` file:

```env
VITE_API_URL=http://localhost:3000
```

The health check endpoint is monitored at: `${VITE_API_URL}/api/health`

## 🎨 Styling

This project uses Tailwind CSS with custom utilities:

- `.btn-primary`: Primary button style
- `.btn-secondary`: Secondary button style
- `.card`: Card container style
- `.input-field`: Input field style

## 🔒 Error Handling

The app includes:
- Global error boundary for React errors
- API error handling with axios interceptors
- Network error detection
- User-friendly error messages

## 🔐 Security

### Security Measures
- Environment variables for sensitive configuration
- Axios interceptors for secure API communication
- Error boundaries prevent app crashes and information leakage
- CodeQL scanning: ✅ No vulnerabilities detected

### Known Development Dependencies Advisories
The project has moderate severity advisories in development dependencies (esbuild/vite):
- **Impact**: Development server only (does not affect production builds)
- **Mitigation**: Production builds are not affected; vulnerability only exists in local development
- **Resolution**: Monitoring for non-breaking security updates

## 📱 Responsive Design

The application is fully responsive and works on:
- Desktop (1024px+)
- Tablet (768px - 1023px)
- Mobile (< 768px)

## 🚦 Health Monitoring

Real-time backend health check with:
- Visual status indicators
- Automatic 30-second refresh
- Connection error handling

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License.

## 🆘 Support

For issues and questions, please open an issue on GitHub.

## 🙏 Acknowledgments

- React Team for React 18
- Evan You for Vite
- Tailwind Labs for Tailwind CSS
- Cloudflare for Pages deployment

---

Built with ❤️ by the DomisLink Team
