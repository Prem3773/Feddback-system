import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaHome, FaChartBar, FaRobot, FaBars, FaTimes } from 'react-icons/fa';

const TeacherSidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* Mobile menu button */}
      <button
        onClick={toggleSidebar}
        className='md:hidden fixed top-4 left-4 z-50 bg-gray-200 dark:bg-gray-800 p-2 rounded-md shadow-md'
      >
        {isOpen ? <FaTimes className='text-gray-800 dark:text-white' /> : <FaBars className='text-gray-800 dark:text-white' />}
      </button>

      {/* Sidebar */}
      <div className={`overflow-y-scroll sticky top-0 left-0 h-screen p-5 bg-gray-200 dark:bg-gray-800 transition-transform duration-300 ease-in-out ${
        isOpen ? 'translate-x-0' : '-translate-x-full'
      } md:translate-x-0 md:static md:w-64 z-40`}>
        <h1 className='text-xl font-bold mb-6 text-gray-800 dark:text-white'>
          Teacher Dashboard
        </h1>
        <nav className='space-y-4'>
          <Link
            to='/teacher/dashboard'
            className='flex items-center p-3 rounded-md hover:bg-gray-300 dark:hover:bg-gray-700 transition-colors text-gray-800 dark:text-white'
            onClick={() => setIsOpen(false)}
          >
            <FaHome className='mr-3' />
            Dashboard Overview
          </Link>
          <Link
            to='/teacher/analytics'
            className='flex items-center p-3 rounded-md hover:bg-gray-300 dark:hover:bg-gray-700 transition-colors text-gray-800 dark:text-white'
            onClick={() => setIsOpen(false)}
          >
            <FaChartBar className='mr-3' />
            Feedback Analytics
          </Link>
          <Link
            to='/teacher/ai-insights'
            className='flex items-center p-3 rounded-md hover:bg-gray-300 dark:hover:bg-gray-700 transition-colors text-gray-800 dark:text-white'
            onClick={() => setIsOpen(false)}
          >
            <FaRobot className='mr-3' />
            AI Insights
          </Link>
        </nav>
      </div>

      {/* Overlay for mobile */}
      {isOpen && (
        <div
          className='fixed inset-0 bg-black bg-opacity-50 z-30 md:hidden'
          onClick={toggleSidebar}
        ></div>
      )}
    </>
  );
};

export default TeacherSidebar;
