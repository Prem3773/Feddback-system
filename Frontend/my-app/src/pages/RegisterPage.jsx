import React from 'react';
import Register from '../Components/Loginlogout/Register';

const RegisterPage = ({}) => {
  return (
    <div className="min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Create your account
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            Join EduPulse
          </p>
        </div>

        {/* Using the Register component */}
        <Register
          onRegister={(username, email, role) => {
            console.log('Registration successful:', { username, email, role });
            // Handle successful registration - redirect to login
            window.location.href = '/login';
          }}
        />
      </div>
    </div>
  );
};

export default RegisterPage;
