# Feedback System

A comprehensive feedback management system with separate dashboards for students, teachers, and administrators.

## Project Structure

```
feedback-system/
├── Backend/                 # Node.js/Express backend
│   ├── src/
│   │   ├── models/         # Database models
│   │   ├── routes/         # API routes
│   │   └── server.js       # Main server file
│   └── package.json
├── Frontend/my-app/         # React frontend
│   ├── src/
│   │   ├── Components/     # React components
│   │   ├── pages/          # Page components
│   │   └── App.jsx         # Main app component
│   └── package.json
├── package.json             # Root package.json for concurrent running
└── README.md
```

## Features

- **Student Dashboard**: Submit feedback for teachers, hostels, and campus
- **Teacher Dashboard**: View feedback submitted by students
- **Admin Dashboard**: Manage users, view all feedback analytics
- **Authentication**: JWT-based authentication with role-based access
- **Real-time Updates**: Automatic data refresh every 30 seconds

## ✨ Features

### 🔐 Authentication System
- Secure login/logout functionality
- Role-based access (Student, Teacher, Admin)
- Protected routes with automatic redirects
- Persistent authentication state

### 📊 Student Dashboard
- Interactive dashboard with feedback categories
- Real-time theme switching (Light/Dark mode)
- Responsive sidebar navigation
- User-specific welcome messages

### 📝 Feedback Forms
- **Hostel Feedback**: Cleanliness, facilities, food quality, maintenance
- **Teacher Feedback**: Teaching quality, clarity, support, engagement
- **Campus Feedback**: Cleaning, water purity, infrastructure, safety
- **Feedback History**: Track previous submissions

### 🎨 User Experience
- Dark/Light mode toggle
- Mobile-responsive design
- Smooth animations and transitions
- Intuitive navigation

## 🚀 Getting Started

### Prerequisites
- Node.js (v14 or higher)
- MongoDB
- npm or yarn

### Quick Start

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd feedback-system
   ```

2. **Install all dependencies**
   ```bash
   npm run install-all
   ```

3. **Set up environment variables**

   Create `.env` file in Backend directory:
   ```
   MONGODB_URI=mongodb://localhost:27017/feedback-system
   JWT_SECRET=your-secret-key
   PORT=3001
   ```

4. **Start the application**
   ```bash
   npm start
   ```

   This will start both frontend (http://localhost:3000) and backend (http://localhost:3001) simultaneously.

### Manual Setup (Alternative)

If you prefer to run frontend and backend separately:

1. **Backend Setup**
   ```bash
   cd Backend
   npm install
   npm start
   ```

2. **Frontend Setup**
   ```bash
   cd Frontend/my-app
   npm install
   npm start
   ```

## 📱 Usage

### Authentication
- **Login**: Use 'alice' (Student), 'carol' (Teacher), or 'admin' (Admin)
- **Dashboard Access**: Automatically redirects based on user role
- **Logout**: Available in the navbar when authenticated

### Navigation
- **Home**: Landing page with system overview
- **About**: Information about EduPulse
- **Student Dashboard**: Feedback submission interface
- **Login/Register**: Authentication pages

### Feedback Submission
1. Navigate to Student Dashboard
2. Choose feedback category (Hostel, Teacher, Campus)
3. Fill out the detailed form
4. Submit for AI analysis
5. View history in Feedback History section

## 🏗️ Project Structure

```
Frontend/my-app/
├── src/
│   ├── Components/
│   │   ├── Homepage/
│   │   │   ├── Navbar.jsx          # Main navigation with auth state
│   │   │   ├── Footer.jsx          # Site footer
│   │   │   ├── CTAsection.jsx      # Call-to-action section
│   │   │   └── Carousel.jsx        # Homepage carousel
│   │   ├── Dashboards/
│   │   │   └── Studendashboard/    # Student feedback interface
│   │   │       ├── StudentFeedbackDashboard.jsx
│   │   │       ├── Sidebar.jsx     # Navigation sidebar
│   │   │       └── Feedback/       # Individual feedback forms
│   │   ├── Loginlogout/
│   │   │   ├── Login.jsx           # Login component
│   │   │   └── Register.jsx        # Registration component
│   │   └── Hooks/
│   │       └── useDarkMode.js      # Dark mode hook
│   ├── pages/                      # Route components
│   │   ├── HomePage.jsx
│   │   ├── LoginPage.jsx
│   │   ├── RegisterPage.jsx
│   │   └── Aboutpage.jsx
│   ├── App.jsx                     # Main app with routing
│   └── main.jsx                    # App entry point
```

## 🎯 Key Components

### Authentication Flow
- **LoginPage**: Handles user authentication
- **ProtectedRoute**: Guards dashboard routes
- **Navbar**: Conditional rendering based on auth state

### Dashboard System
- **StudentFeedbackDashboard**: Main dashboard interface
- **Sidebar**: Responsive navigation menu
- **Feedback Forms**: Specialized forms for different categories

### Theme System
- **useDarkMode Hook**: Manages theme state
- **Tailwind Dark Mode**: CSS-based theme switching
- **Persistent Theme**: Saves user preference

## 🔧 Technologies Used

- **Frontend Framework**: React 18 with Hooks
- **Build Tool**: Vite
- **Routing**: React Router v6
- **Styling**: Tailwind CSS
- **Icons**: React Icons (FontAwesome)
- **State Management**: React useState/useEffect
- **Form Handling**: Controlled components

## 📋 Features in Detail

### 🔐 Security Features
- Protected routes for authenticated users only
- Role-based access control
- Automatic logout on session end
- Secure form validation

### 📱 Responsive Design
- Mobile-first approach
- Adaptive sidebar for mobile devices
- Touch-friendly interface
- Optimized for all screen sizes

### 🎨 Design System
- Consistent color scheme
- Dark/Light mode support
- Smooth transitions and animations
- Accessible design patterns

## Available Scripts

- `npm start` - Start both frontend and backend concurrently
- `npm run dev` - Start both in development mode
- `npm run install-all` - Install dependencies for all parts

## API Endpoints

### Authentication
- `POST /api/auth/register` - Register new user
- `POST /api/auth/login` - User login
- `GET /api/auth/users` - Get all users (admin only)

### Feedback
- `POST /api/feedback` - Submit feedback
- `GET /api/feedback` - Get all feedback (teachers/admins)
- `GET /api/feedback/my` - Get user's own feedback
- `GET /api/feedback/admin/stats` - Admin statistics
- `GET /api/feedback/teacher/stats` - Teacher statistics

## User Roles

- **Student**: Can submit feedback
- **Teacher**: Can view feedback submitted to them
- **Admin**: Full access to all features and user management

## Technologies Used

- **Frontend**: React, Tailwind CSS, Recharts
- **Backend**: Node.js, Express.js, MongoDB, JWT
- **Development**: Concurrently for running multiple services

## License

This project is licensed under the MIT License.

## 🤝 Contributing

1. Fork the repository
