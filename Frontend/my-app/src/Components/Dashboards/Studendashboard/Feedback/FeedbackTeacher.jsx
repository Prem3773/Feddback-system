import React, { useState } from 'react';
import { FaUser } from 'react-icons/fa';

const FeedbackTeacher = () => {
  const [feedback, setFeedback] = useState({
    teachingQuality: '',
    clarity: '',
    support: '',
    engagement: '',
    additionalComments: ''
  });

  const handleChange = (e) => {
    setFeedback({ ...feedback, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Teacher Feedback Submitted:', feedback);
    alert('Feedback submitted successfully! It will be analyzed by AI for improvements.');
    // Reset form
    setFeedback({
      teachingQuality: '',
      clarity: '',
      support: '',
      engagement: '',
      additionalComments: ''
    });
  };

  return (
    <div className='p-6 bg-gray-100 dark:bg-gray-800 min-h-screen'>
      <div className='max-w-4xl mx-auto bg-white dark:bg-gray-700 rounded-lg shadow-md p-6'>
        <div className='flex items-center mb-6'>
          <FaUser className='text-3xl text-green-500 mr-3' />
          <h1 className='text-3xl font-bold text-gray-800 dark:text-white'>Teacher Feedback</h1>
        </div>
        <p className='text-gray-600 dark:text-gray-300 mb-6'>
          Provide detailed feedback on your teachers. Your input helps enhance teaching quality and will be analyzed by AI.
        </p>
        <form onSubmit={handleSubmit} className='space-y-6'>
          <div>
            <label className='block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2'>
              Teaching Quality
            </label>
            <textarea
              name='teachingQuality'
              value={feedback.teachingQuality}
              onChange={handleChange}
              placeholder='Describe the overall quality of teaching methods and effectiveness.'
              className='w-full p-3 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 dark:bg-gray-600 dark:text-white'
              rows='3'
              required
            />
          </div>
          <div>
            <label className='block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2'>
              Clarity
            </label>
            <textarea
              name='clarity'
              value={feedback.clarity}
              onChange={handleChange}
              placeholder='Comment on how clearly concepts are explained and understood.'
              className='w-full p-3 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 dark:bg-gray-600 dark:text-white'
              rows='3'
              required
            />
          </div>
          <div>
            <label className='block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2'>
              Support
            </label>
            <textarea
              name='support'
              value={feedback.support}
              onChange={handleChange}
              placeholder='Share experiences with teacher support for questions, guidance, and help.'
              className='w-full p-3 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 dark:bg-gray-600 dark:text-white'
              rows='3'
              required
            />
          </div>
          <div>
            <label className='block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2'>
              Engagement
            </label>
            <textarea
              name='engagement'
              value={feedback.engagement}
              onChange={handleChange}
              placeholder='Describe how engaging the classes are and student participation.'
              className='w-full p-3 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 dark:bg-gray-600 dark:text-white'
              rows='3'
              required
            />
          </div>
          <div>
            <label className='block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2'>
              Additional Comments
            </label>
            <textarea
              name='additionalComments'
              value={feedback.additionalComments}
              onChange={handleChange}
              placeholder='Any other feedback or suggestions for teachers.'
              className='w-full p-3 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 dark:bg-gray-600 dark:text-white'
              rows='3'
            />
          </div>
          <button
            type='submit'
            className='w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-6 rounded-md transition-colors'
          >
            Submit Feedback
          </button>
        </form>
      </div>
    </div>
  );
};

export default FeedbackTeacher;
