import React, { useState, useEffect } from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './Components/Homepage/Navbar'
import Footer from './Components/Homepage/Footer'
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import Aboutpage from './pages/Aboutpage';
import { useDarkMode } from './Components/Hooks/useDarkmode'
import StudentFeedbackDashboard from './Components/Dashboards/Studendashboard/StudentFeedbackDashboard';
import Home from './Components/Dashboards/Studendashboard/Home';
import Sidebar from './Components/Dashboards/Studendashboard/Sidebar';
import FeedbackHostel from './Components/Dashboards/Studendashboard/Feedback/FeedbackHostel';
import FeedbackTeacher from './Components/Dashboards/Studendashboard/Feedback/FeedbackTeacher';
import FeedbackCampus from './Components/Dashboards/Studendashboard/Feedback/FeedbackCampus';
import FeedbackHistory from './Components/Dashboards/Studendashboard/Feedback/FeedbackHistory';

const ProtectedRoute = ({ isLoggedIn, role, requiredRole, children }) => {
  if (!isLoggedIn || role !== requiredRole) {
    return <Navigate to="/login" />;
  }
  return children;
};



const App = () => {
  const [isDarkMode, toggleDarkMode] = useDarkMode();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(null);
  const [role, setRole] = useState(null);

  useEffect(() => {
    const loggedIn = localStorage.getItem('isLoggedIn') === 'true';
    const storedUser = localStorage.getItem('user');
    const storedRole = localStorage.getItem('role');
    if (loggedIn && storedUser && storedRole) {
      setIsLoggedIn(true);
      setUser(storedUser);
      setRole(storedRole);
    }
  }, []);

  const handleLogin = (username, userRole) => {
    setIsLoggedIn(true);
    setUser(username);
    setRole(userRole);
    localStorage.setItem('isLoggedIn', 'true');
    localStorage.setItem('user', username);
    localStorage.setItem('role', userRole);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUser(null);
    setRole(null);
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('user');
    localStorage.removeItem('role');
  };

  return (
    // The main container that handles dark mode styling and page layout
    <div className={`min-h-screen flex flex-col transition-colors duration-300 ${
      isDarkMode ? 'dark bg-gray-900 text-white' : 'bg-white text-gray-900'
    }`}>
      {/* BrowserRouter is used to handle routing across the application */}
      <BrowserRouter>
        {/* Navbar is outside the Routes, so it appears on every page */}
        <Navbar isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} isLoggedIn={isLoggedIn} user={user} role={role} onLogout={handleLogout} />

        {/* The main content area will grow to fill available space, pushing the footer down */}
        <main className="flex-grow transition-colors duration-300">
          {/* Routes component defines the different pages (routes) of the application */}
          <Routes>
            {/* Route for the homepage, located at the root path "/" */}
            <Route path="/" element={<HomePage isDarkMode={isDarkMode} />} />

            {/* Route for the login page, located at the "/login" path */}
            <Route path="/login" element={<LoginPage isDarkMode={isDarkMode} onLogin={handleLogin} />} />
            
            {/* Route for the register page */}
            <Route path="/register" element={<RegisterPage isDarkMode={isDarkMode} />} />
            
            {/* Route for the about page */}
            <Route path="/Aboutpage" element={<Aboutpage isDarkMode={isDarkMode} />} />
        
            <Route path="/home" element={<Home isDarkMode={isDarkMode} />} />
            <Route path="/student/dashboard" element={<ProtectedRoute isLoggedIn={isLoggedIn} role={role} requiredRole="Student"><StudentFeedbackDashboard isDarkMode={isDarkMode} user={user} /></ProtectedRoute>} />
            <Route path="/feedback/hostel" element={<ProtectedRoute isLoggedIn={isLoggedIn} role={role} requiredRole="Student"><FeedbackHostel isDarkMode={isDarkMode} /></ProtectedRoute>} />
            <Route path="/feedback/teacher" element={<ProtectedRoute isLoggedIn={isLoggedIn} role={role} requiredRole="Student"><FeedbackTeacher isDarkMode={isDarkMode} /></ProtectedRoute>} />
            <Route path="/feedback/campus" element={<ProtectedRoute isLoggedIn={isLoggedIn} role={role} requiredRole="Student"><FeedbackCampus isDarkMode={isDarkMode} /></ProtectedRoute>} />
            <Route path="/feedback/history" element={<ProtectedRoute isLoggedIn={isLoggedIn} role={role} requiredRole="Student"><FeedbackHistory isDarkMode={isDarkMode} /></ProtectedRoute>} />

          </Routes>
        </main>

        {/* Footer is also outside the Routes, so it appears on every page */}
        <Footer isDarkMode={isDarkMode} />
      </BrowserRouter>
    </div>
  )
}

export default App
