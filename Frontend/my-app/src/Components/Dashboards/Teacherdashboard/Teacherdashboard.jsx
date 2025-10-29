import React, { useState, useEffect } from 'react';
import TeacherSidebar from './TeacherSidebar';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';

const Teacherdashboard = ({ user }) => {
  const [feedbackData, setFeedbackData] = useState(null);
  const [aiSummary, setAiSummary] = useState('');
  const [improvementAreas, setImprovementAreas] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTeacherStats = async () => {
      try {
        const token = localStorage.getItem('token');
        const response = await fetch('http://localhost:3001/api/feedback/teacher/stats', {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        });

        if (response.ok) {
          const data = await response.json();

          // Process data for charts
          const processedData = {
            sentiment: [
              { category: 'Teacher', positive: 80, negative: 20 }, // Mock data for teacher sentiment
            ],
          };

          setFeedbackData(processedData);
          setImprovementAreas(data.aggregatedImprovementAreas || []);

          // Generate AI summary based on actual data
          const topAreas = data.aggregatedImprovementAreas?.slice(0, 3).map(item => item.area).join(', ') || 'None identified';
          const summary = `
            Based on recent student feedback analysis for teachers:

            • ${data.totalTeacherFeedback} teacher feedback submissions received
            • Top areas for improvement: ${topAreas}
            • Overall teacher performance shows strong positive engagement
            • Recommendations: Focus on the identified areas for professional development
          `;

          setAiSummary(summary);
        } else {
          console.error('Failed to fetch teacher stats');
        }
      } catch (error) {
        console.error('Error fetching teacher stats:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchTeacherStats();
  }, []);

  return (
    <div className='flex min-h-screen bg-gray-100 dark:bg-gray-900'>
      <TeacherSidebar />

      <div className='flex-1 p-4 md:ml-0'>
        {/* Welcome Section */}
        <div className='bg-white dark:bg-gray-800 rounded-lg p-6 mb-6 shadow-md'>
          <h1 className='text-4xl font-bold mb-4 text-center text-gray-800 dark:text-white'>
            Welcome, {user || 'Teacher'}
          </h1>
          <p className='text-lg text-center text-gray-600 dark:text-gray-300'>
            Analyze student feedback with AI-powered insights and visualizations.
          </p>
        </div>

        {/* Charts Section */}
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6'>
          {/* Sentiment Analysis Bar Chart */}
          <div className='bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md'>
            <h2 className='text-2xl font-semibold mb-4 text-gray-800 dark:text-white'>
              Feedback Sentiment Analysis
            </h2>
            {feedbackData ? (
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={feedbackData.sentiment}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="category" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="positive" fill="#4CAF50" name="Positive" />
                  <Bar dataKey="negative" fill="#F44336" name="Negative" />
                </BarChart>
              </ResponsiveContainer>
            ) : (
              <div className='flex justify-center items-center h-64'>
                <div className='text-gray-500'>Loading chart...</div>
              </div>
            )}
          </div>

          {/* Areas for Improvement */}
          <div className='bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md'>
            <h2 className='text-2xl font-semibold mb-4 text-gray-800 dark:text-white'>
              Areas for Improvement
            </h2>
            {improvementAreas.length > 0 ? (
              <ul className='space-y-2'>
                {improvementAreas.slice(0, 5).map((item, index) => (
                  <li key={index} className='flex justify-between items-center p-2 bg-gray-50 dark:bg-gray-700 rounded'>
                    <span className='text-gray-700 dark:text-gray-300'>{item.area}</span>
                    <span className='text-sm text-gray-500 dark:text-gray-400'>Mentioned {item.count} times</span>
                  </li>
                ))}
              </ul>
            ) : (
              <div className='text-gray-500'>No improvement areas identified yet.</div>
            )}
          </div>
        </div>

        {/* AI Summary Section */}
        <div className='bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md'>
          <h2 className='text-2xl font-semibold mb-4 text-gray-800 dark:text-white flex items-center'>
            <span className='mr-2'>🤖</span> AI-Generated Summary
          </h2>
          {aiSummary ? (
            <div className='text-gray-700 dark:text-gray-300 whitespace-pre-line'>
              {aiSummary}
            </div>
          ) : (
            <div className='text-gray-500'>Generating AI summary...</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Teacherdashboard;
