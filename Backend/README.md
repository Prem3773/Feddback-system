# EduPulse Backend - API Server

[![Node.js](https://img.shields.io/badge/Node.js-18.x-green.svg)](https://nodejs.org/)
[![Express](https://img.shields.io/badge/Express-4.x-blue.svg)](https://expressjs.com/)

Backend API server for the EduPulse student feedback system.

## 🚀 Quick Start

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn
- MongoDB (for data persistence)

### Installation

1. **Install dependencies**
   ```bash
   npm install
   ```

2. **Environment Setup**
   Create a `.env` file:
   ```env
   PORT=3001
   MONGODB_URI=mongodb://localhost:27017/edupulse
   JWT_SECRET=your-secret-key
   ```

3. **Start the server**
   ```bash
   npm start
   ```

## 📋 API Endpoints

### Authentication
- `POST /api/auth/login` - User login
- `POST /api/auth/register` - User registration
- `POST /api/auth/logout` - User logout

### Feedback
- `GET /api/feedback` - Get all feedback
- `POST /api/feedback` - Submit feedback
- `GET /api/feedback/:id` - Get specific feedback
- `PUT /api/feedback/:id` - Update feedback
- `DELETE /api/feedback/:id` - Delete feedback

### Analytics
- `GET /api/analytics/summary` - Feedback analytics summary
- `GET /api/analytics/trends` - Feedback trends over time

## 🏗️ Architecture

- **Framework**: Express.js
- **Database**: MongoDB with Mongoose
- **Authentication**: JWT tokens
- **Validation**: Joi schema validation
- **Security**: Helmet, CORS, rate limiting

## 📁 Project Structure

```
Backend/
├── src/
│   ├── controllers/     # Route controllers
│   ├── models/         # Database models
│   ├── routes/         # API routes
│   ├── middleware/     # Custom middleware
│   ├── utils/          # Utility functions
│   └── config/         # Configuration files
├── tests/              # Test files
├── package.json
└── server.js          # Application entry point
```

## 🔧 Development

### Available Scripts
- `npm start` - Start production server
- `npm run dev` - Start development server with nodemon
- `npm test` - Run tests
- `npm run lint` - Run ESLint

### Environment Variables
- `PORT` - Server port (default: 3001)
- `MONGODB_URI` - MongoDB connection string
- `JWT_SECRET` - JWT signing secret
- `NODE_ENV` - Environment (development/production)

## 📊 Data Models

### User
```javascript
{
  username: String,
  email: String,
  password: String, // hashed
  role: String, // 'student', 'teacher', 'admin'
  createdAt: Date
}
```

### Feedback
```javascript
{
  userId: ObjectId,
  category: String, // 'hostel', 'teacher', 'campus'
  responses: Object, // form responses
  aiAnalysis: Object, // AI analysis results
  createdAt: Date
}
```

## 🔒 Security Features

- Password hashing with bcrypt
- JWT authentication
- Input validation and sanitization
- Rate limiting
- CORS configuration
- Helmet security headers

## 🤝 Contributing

1. Follow existing code style
2. Write tests for new features
3. Update API documentation
4. Use meaningful commit messages

## 📄 License

This project is part of the EduPulse feedback system. See main README for license information.
