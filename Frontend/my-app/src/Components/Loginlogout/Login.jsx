import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';

// User roles constant
const UserRole = {
  Student: 'Student',
  Teacher: 'Teacher',
  Admin: 'Admin'
};

// Simple Card component (if not available elsewhere)
const Card = ({ children }) => (
  <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6">
    {children}
  </div>
);

// Simple Button component (if not available elsewhere)
const Button = ({ children, type, className, variant, ...props }) => (
  <button
    type={type}
    className={`px-4 py-2 rounded-md font-medium transition-colors ${
      variant === 'primary'
        ? 'bg-blue-600 text-white hover:bg-blue-700'
        : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
    } ${className || ''}`}
    {...props}
  >
    {children}
  </button>
);

const Login = ({ onLogin, isDarkMode, toggleDarkMode }) => {
  const loginRef = useRef(null);

  const [username, setUsername] = useState('');
  const [role, setRole] = useState(UserRole.Student);

  const handleLoginFormSubmit = (e) => {
    e.preventDefault();
    if (!username) {
      alert('Please enter a username.');
      return;
    }

    if (onLogin) {
      onLogin(username, role);
    }

    // Instead of using navigate, we'll use window.location or rely on parent component
    // Since there's no Router context, we'll handle navigation differently
    console.log('Login successful:', { username, role });
    alert(`Login successful: ${username} as ${role}`);

    // Option 1: Use window.location (if you want to redirect)
    // window.location.href = '/dashboard';

    // Option 2: Let parent component handle navigation
    // Parent component should handle the navigation after onLogin
  };


  return (
    <div className=' w-max mx-auto'>
        <section ref={loginRef} className="py-20 bg-bkg-light dark:bg-bkg-dark">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="w-full max-w-md mx-auto">
              <Card>
                <div className="text-center">
                  <h2 className="text-3xl md:text-4xl font-bold    text-white    ">Access Your Dashboard</h2>
                  <p className="mt-2 text-lg text-gray-600 dark:text-gray-400">Login to continue to EduPulse.</p>
                </div>
                <form onSubmit={handleLoginFormSubmit} className="mt-8 space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-white dark:text-white">Username</label>
                    <input type="text" value={username} onChange={e => setUsername(e.target.value)} required className="mt-1 block w-full p-3  dark:bg-black  text-white border-red-300 rounded-md shadow-sm focus:ring-primary-500 focus:border-primary-500" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Role</label>
                    <select value={role} onChange={e => setRole(e.target.value)} className="mt-1 block w-full p-3 bg-white dark:bg-black text-white dark:border-gray-600 rounded-md shadow-sm focus:ring-primary-500 focus:border-primary-500">
                      <option value={UserRole.Student}>Student</option>
                      <option value={UserRole.Teacher}>Teacher</option>
                      <option value={UserRole.Admin}>Admin</option>
                    </select>
                  </div>
                  <p className="text-xs text-center text-gray-500 dark:text-gray-400">Hint: Use 'alice' (Student), 'carol' (Teacher), or 'admin' (Admin) for the username to log in.</p>
                  <div>
                    <Button type="submit" className="w-full py-3 text-lg" variant="primary">Login</Button>
                  </div>
                  <div className='flex items-center ml-4 text-xl text-white'>
                    <h1 className='ml-4'>Not Have an account </h1>
                    <Link
              to="/register"
              className="text-blue-600 hover:text-blue-500 ml-5"
              >
              Sign up 
            </Link>
                  </div>
                </form>
              </Card>
            </div>
          </div>
        </section>
    </div>
  )
}

export default Login
