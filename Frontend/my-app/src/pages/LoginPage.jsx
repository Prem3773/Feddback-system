import React from 'react';
import { useNavigate } from 'react-router-dom';
import Login from '../Components/Loginlogout/Login';

const LoginPage = ({ onLogin }) => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-green-700">
            Sign in to your account
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            Welcome back! Please sign in to continue
          </p>
        </div>


        {/* Using the existing Login component */}
        <Login
          onLogin={(username, role) => {
            onLogin(username, role);
            // Redirect based on role
            if (role === 'student') {
              navigate('/student/dashboard');
            } else if (role === 'teacher') {
              navigate('/teacher/dashboard');
            } else if (role === 'admin') {
              navigate('/admin/dashboard');
            } else {
              navigate('/');
            }
          }}
        />
      </div>
    </div>
  );
};

export default LoginPage;
