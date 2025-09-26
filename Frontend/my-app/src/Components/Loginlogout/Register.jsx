import React, { useState } from 'react';

// Simple register component - same structure as login
const Register = ({ onRegister, isDarkMode }) => {
  // State for form fields
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('Student');

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic validation
    if (!username || !email || !password) {
      alert('Please fill in all fields');
      return;
    }

    // Call parent function with user data
    if (onRegister) {
      onRegister(username, email, role);
    }

    console.log('Registration successful:', { username, email, role });
    alert(`Registration successful: ${username} as ${role}`);

    // Redirect to login page
    window.location.href = '/login';
  };

  return (
    <div className="max-w-md mx-auto">
      <div className={`bg-white dark:bg-gray-800 shadow-lg rounded-lg p-8`}>
        <h2 className={`text-2xl font-bold text-center mb-6 ${
          isDarkMode ? 'text-white' : 'text-white'
        }`}>
          Create Account
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Username Input */}
          <div>
            <label className={`block text-sm font-medium mb-1 ${
              isDarkMode ? 'text-gray-300' : 'text-white'
            }`}>
              Username
            </label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className={`w-full p-3 border rounded-md ${
                isDarkMode
                  ? 'bg-gray-700 border-gray-600 text-white'
                  : 'bg-white border-gray-300 text-gray-900'
              }`}
              placeholder="Enter username"
              required
            />
          </div>

          {/* Email Input */}
          <div>
            <label className={`block text-sm font-medium mb-1 ${
              isDarkMode ? 'text-gray-300' : 'text-white'
            }`}>
              Email
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={`w-full p-3 border rounded-md ${
                isDarkMode
                  ? 'bg-gray-700 border-gray-600 text-white'
                  : 'bg-white border-gray-300 text-gray-900'
              }`}
              placeholder="Enter email"
              required
            />
          </div>

          {/* Password Input */}
          <div>
            <label className={`block text-sm font-medium mb-1 ${
              isDarkMode ? 'text-white' : 'text-white'
            }`}>
              Password
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className={`w-full p-3 border rounded-md ${
                isDarkMode
                  ? 'bg-gray-700 border-gray-600 text-white'
                  : 'bg-white border-gray-300 text-gray-900'
              }`}
              placeholder="Enter password"
              required
            />
          </div>

          {/* Role Selection */}
          <div>
            <label className={`block text-sm font-medium mb-1 ${
              isDarkMode ? 'text-gray-300' : 'text-whiteelcome'
            }`}>
              I am a
            </label>
            <select
              value={role}
              onChange={(e) => setRole(e.target.value)}
              className={`w-full p-3 border rounded-md ${
                isDarkMode
                  ? 'bg-gray-700 border-gray-600 text-white'
                  : 'bg-white border-gray-300 text-gray-900'
              }`}
            >
              <option value="Student">Student</option>
              <option value="Teacher">Teacher</option>
              <option value="Admin">Admin</option>
            </select>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-md hover:bg-blue-700 transition-colors"
          >
            Create Account
          </button>

          {/* Login Link */}
          <p className={`text-center text-sm ${
            isDarkMode ? 'text-gray-400' : 'text-gray-600'
          }`}>
            Already have an account?{' '}
            <a href="/login" className="text-blue-600 hover:text-blue-500">
              Sign in here
            </a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Register;
