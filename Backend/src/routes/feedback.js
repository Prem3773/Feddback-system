const express = require('express');
const jwt = require('jsonwebtoken');
const Feedback = require('../models/Feedback');
const OpenAI = require('openai');
const { GoogleGenerativeAI } = require('@google/generative-ai');

const openai = process.env.OPENAI_API_KEY ? new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
}) : null;

const genAI = process.env.GOOGLE_GEMINI_API_KEY ? new GoogleGenerativeAI(process.env.GOOGLE_GEMINI_API_KEY) : null;

const router = express.Router();

// Middleware to verify JWT token
const authenticateToken = (req, res, next) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];

  if (!token) {
    return res.status(401).json({ message: 'Access token required' });
  }

  jwt.verify(token, process.env.JWT_SECRET || 'your-secret-key', (err, user) => {
    if (err) {
      return res.status(403).json({ message: 'Invalid token' });
    }
    req.user = user;
    next();
  });
};

// Submit feedback
router.post('/', authenticateToken, async (req, res) => {
  try {
    const { category, responses, teacherId } = req.body;
    const userId = req.user.userId;

    const feedback = new Feedback({
      userId,
      category,
      responses,
      ...(category === 'teacher' && teacherId && { teacherId })
    });

    await feedback.save();

    res.status(201).json({
      message: 'Feedback submitted successfully',
      feedback
    });
  } catch (error) {
    console.error('Feedback submission error:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

// Get all feedback (for teachers/admins)
router.get('/', authenticateToken, async (req, res) => {
  try {
    if (req.user.role !== 'teacher' && req.user.role !== 'admin') {
      return res.status(403).json({ message: 'Access denied' });
    }

    const feedback = await Feedback.find().populate('userId', 'username role');
    res.json(feedback);
  } catch (error) {
    console.error('Get feedback error:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

// Get user's own feedback
router.get('/my', authenticateToken, async (req, res) => {
  try {
    const feedback = await Feedback.find({ userId: req.user.userId });
    res.json(feedback);
  } catch (error) {
    console.error('Get user feedback error:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

// Get feedback by ID
router.get('/:id', authenticateToken, async (req, res) => {
  try {
    const feedback = await Feedback.findById(req.params.id).populate('userId', 'username role');
    if (!feedback) {
      return res.status(404).json({ message: 'Feedback not found' });
    }

    // Check if user owns the feedback or is teacher/admin
    if (feedback.userId._id.toString() !== req.user.userId && req.user.role !== 'teacher' && req.user.role !== 'admin') {
      return res.status(403).json({ message: 'Access denied' });
    }

    res.json(feedback);
  } catch (error) {
    console.error('Get feedback by ID error:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

// Get admin stats
router.get('/admin/stats', authenticateToken, async (req, res) => {
  try {
    if (req.user.role !== 'admin') {
      return res.status(403).json({ message: 'Access denied' });
    }

    // Count unique students who have given feedback
    const uniqueStudents = await Feedback.distinct('userId');
    const studentCount = uniqueStudents.length;

    // Get all feedback with user details
    const feedback = await Feedback.find().populate('userId', 'username role');

    // Group feedback by category
    const teacherFeedback = feedback.filter(f => f.category === 'teacher');
    const hostelFeedback = feedback.filter(f => f.category === 'hostel');
    const campusFeedback = feedback.filter(f => f.category === 'campus');

    res.json({
      totalStudentsWithFeedback: studentCount,
      totalFeedback: feedback.length,
      teacherFeedback: teacherFeedback,
      hostelFeedback: hostelFeedback,
      campusFeedback: campusFeedback
    });
  } catch (error) {
    console.error('Get admin stats error:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

// Get teacher stats (only teacher feedback)
router.get('/teacher/stats', authenticateToken, async (req, res) => {
  try {
    if (req.user.role !== 'teacher') {
      return res.status(403).json({ message: 'Access denied' });
    }

    // Get only teacher feedback directed to the logged-in teacher
    const teacherFeedback = await Feedback.find({ category: 'teacher', teacherId: req.user.userId }).populate('userId', 'username role');

    // Perform AI analysis if not already done
    const analyzedFeedback = await Promise.all(teacherFeedback.map(async (feedback) => {
      if (!feedback.aiAnalysis || Object.keys(feedback.aiAnalysis).length === 0) {
        const responses = feedback.responses;
        const feedbackText = `
          Teaching Quality: ${responses.teachingQuality || ''}
          Clarity: ${responses.clarity || ''}
          Support: ${responses.support || ''}
          Engagement: ${responses.engagement || ''}
          Additional Comments: ${responses.additionalComments || ''}
        `.trim();

        if (feedbackText) {
          try {
            const prompt = `Analyze the following student feedback on a teacher and identify key areas for improvement. Provide a concise list of 3-5 improvement areas based on the content. Also perform sentiment analysis on the feedback. Feedback:\n\n${feedbackText}\n\nImprovement Areas and Sentiment Analysis:`;

            let aiResponse;
            if (genAI) {
              const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' });
              const result = await model.generateContent(prompt);
              const response = await result.response;
              aiResponse = response.text().trim();
            } else if (openai) {
              const completion = await openai.chat.completions.create({
                model: 'gpt-3.5-turbo',
                messages: [{ role: 'user', content: prompt }],
                max_tokens: 200,
                temperature: 0.5,
              });
              aiResponse = completion.choices[0].message.content.trim();
            } else {
              // Mock AI analysis when neither API is configured
              const mockAreas = [
                'Enhance interactive teaching methods',
                'Improve clarity in explanations',
                'Increase student engagement',
                'Provide better support for questions',
                'Incorporate modern teaching tools'
              ];
              aiResponse = mockAreas.slice(0, Math.floor(Math.random() * 3) + 3).join('\n') + '\n\nSentiment: Positive';
            }

            const improvementAreas = aiResponse.split('\n').filter(line => !line.toLowerCase().includes('sentiment')).map(line => line.replace(/^\d+\.\s*/, '').trim()).filter(line => line);
            const sentiment = aiResponse.toLowerCase().includes('positive') ? 'Positive' : aiResponse.toLowerCase().includes('negative') ? 'Negative' : 'Neutral';

            feedback.aiAnalysis = {
              improvementAreas: improvementAreas,
              summary: aiResponse,
              sentiment: sentiment
            };

            await feedback.save();
          } catch (aiError) {
            console.error('AI analysis error:', aiError);
            feedback.aiAnalysis = { improvementAreas: [], summary: 'AI analysis failed', sentiment: 'Unknown' };
          }
        } else {
          feedback.aiAnalysis = { improvementAreas: [], summary: 'No feedback content', sentiment: 'Neutral' };
        }
      }
      return feedback;
    }));

    // Aggregate improvement areas
    const areaCounts = {};
    analyzedFeedback.forEach(feedback => {
      if (feedback.aiAnalysis && feedback.aiAnalysis.improvementAreas) {
        feedback.aiAnalysis.improvementAreas.forEach(area => {
          areaCounts[area] = (areaCounts[area] || 0) + 1;
        });
      }
    });

    const aggregatedAreas = Object.entries(areaCounts)
      .sort(([,a], [,b]) => b - a)
      .map(([area, count]) => ({ area, count }));

    // Calculate overall sentiment
    const sentiments = analyzedFeedback.map(f => f.aiAnalysis?.sentiment).filter(s => s);
    const positiveCount = sentiments.filter(s => s === 'Positive').length;
    const negativeCount = sentiments.filter(s => s === 'Negative').length;
    const neutralCount = sentiments.filter(s => s === 'Neutral').length;

    res.json({
      teacherFeedback: analyzedFeedback,
      totalTeacherFeedback: analyzedFeedback.length,
      aggregatedImprovementAreas: aggregatedAreas,
      sentimentAnalysis: {
        positive: positiveCount,
        negative: negativeCount,
        neutral: neutralCount,
        total: sentiments.length
      }
    });
  } catch (error) {
    console.error('Get teacher stats error:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;
