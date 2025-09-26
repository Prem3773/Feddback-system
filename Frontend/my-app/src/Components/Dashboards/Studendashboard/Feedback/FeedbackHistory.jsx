import React from 'react';
import { FaClipboardList } from 'react-icons/fa';

const FeedbackHistory = () => {
  // Mock data for demonstration
  const history = [
    {
      id: 1,
      type: 'Hostel',
      date: '2023-10-01',
      summary: 'Feedback on cleanliness and facilities.',
      status: 'Analyzed'
    },
    {
      id: 2,
      type: 'Teacher',
      date: '2023-09-15',
      summary: 'Comments on teaching quality and support.',
      status: 'Analyzed'
    },
    {
      id: 3,
      type: 'Campus',
      date: '2023-08-20',
      summary: 'Suggestions for infrastructure improvements.',
      status: 'Analyzed'
    }
  ];

  return (
    <div className='p-6 bg-gray-100 dark:bg-gray-800 min-h-screen'>
      <div className='max-w-6xl mx-auto bg-white dark:bg-gray-700 rounded-lg shadow-md p-6'>
        <div className='flex items-center mb-6'>
          <FaClipboardList className='text-3xl text-orange-500 mr-3' />
          <h1 className='text-3xl font-bold text-gray-800 dark:text-white'>Feedback History</h1>
        </div>
        <p className='text-gray-600 dark:text-gray-300 mb-6'>
          Review your previous feedback submissions. All feedback is analyzed by AI to drive improvements.
        </p>
        <div className='overflow-x-auto'>
          <table className='w-full table-auto border-collapse border border-gray-300 dark:border-gray-600'>
            <thead>
              <tr className='bg-gray-50 dark:bg-gray-600'>
                <th className='border border-gray-300 dark:border-gray-600 px-4 py-2 text-left text-gray-800 dark:text-white'>Type</th>
                <th className='border border-gray-300 dark:border-gray-600 px-4 py-2 text-left text-gray-800 dark:text-white'>Date</th>
                <th className='border border-gray-300 dark:border-gray-600 px-4 py-2 text-left text-gray-800 dark:text-white'>Summary</th>
                <th className='border border-gray-300 dark:border-gray-600 px-4 py-2 text-left text-gray-800 dark:text-white'>Status</th>
              </tr>
            </thead>
            <tbody>
              {history.map((item) => (
                <tr key={item.id} className='hover:bg-gray-50 dark:hover:bg-gray-600'>
                  <td className='border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300'>{item.type}</td>
                  <td className='border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300'>{item.date}</td>
                  <td className='border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300'>{item.summary}</td>
                  <td className='border border-gray-300 dark:border-gray-600 px-4 py-2 text-green-600 dark:text-green-400'>{item.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {history.length === 0 && (
          <p className='text-center text-gray-500 dark:text-gray-400 mt-6'>No feedback history available yet.</p>
        )}
      </div>
    </div>
  );
};

export default FeedbackHistory;
