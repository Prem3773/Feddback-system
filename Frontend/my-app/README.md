# EduPulse Frontend - Student Feedback System

[![React](https://img.shields.io/badge/React-18.2.0-blue.svg)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-4.4.5-646CFF.svg)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.3.0-38B2AC.svg)](https://tailwindcss.com/)

Frontend application for the EduPulse student feedback system, built with React and Vite.

## 🚀 Quick Start

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation & Setup

1. **Install dependencies**
   ```bash
   npm install
   ```

2. **Start development server**
   ```bash
   npm run dev
   ```

3. **Build for production**
   ```bash
   npm run build
   ```

4. **Preview production build**
   ```bash
   npm run preview
   ```

## 📁 Project Structure

```
src/
├── Components/
│   ├── Homepage/           # Landing page components
│   │   ├── Navbar.jsx      # Main navigation
│   │   ├── Footer.jsx      # Site footer
│   │   └── Carousel.jsx    # Homepage carousel
│   ├── Dashboards/         # Dashboard interfaces
│   │   └── Studendashboard/
│   │       ├── StudentFeedbackDashboard.jsx
│   │       ├── Sidebar.jsx
│   │       └── Feedback/   # Feedback form components
│   ├── Loginlogout/        # Authentication components
│   └── Hooks/              # Custom React hooks
├── pages/                  # Route-based page components
├── App.jsx                 # Main app component with routing
└── main.jsx               # Application entry point
```

## 🎯 Key Features

- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Dark Mode**: Complete theme switching support
- **Authentication**: Login/logout with role-based access
- **Feedback System**: Comprehensive student feedback collection
- **Modern UI**: Clean, intuitive interface with smooth animations

## 🛠️ Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

### Environment Variables

Create a `.env` file in the root directory for environment-specific configurations:

```env
VITE_API_URL=http://localhost:3001/api
VITE_APP_TITLE=EduPulse
```

## 🔧 Technologies

- **React 18** - UI framework with hooks
- **Vite** - Fast build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **React Router** - Client-side routing
- **React Icons** - Icon library
- **ESLint** - Code linting

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 🤝 Contributing

1. Follow the existing code style
2. Use meaningful commit messages
3. Test your changes thoroughly
4. Update documentation as needed

## 📄 License

This project is part of the EduPulse feedback system. See main README for license information.
