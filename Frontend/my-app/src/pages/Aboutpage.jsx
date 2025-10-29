import React from 'react'

const Aboutpage = () => {
  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8 transition-colors duration-300 bg-gray-50 text-gray-900">
      <div className="max-w-4xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">About EduPulse Feedback System</h1>
          <p className="text-xl opacity-80">
            Revolutionizing educational feedback collection and analysis
          </p>
        </div>

        {/* Mission Section */}
        <div className="mb-12">
          <h2 className="text-3xl font-semibold mb-6">Our Mission</h2>
          <p className="text-lg leading-relaxed mb-4">
            EduPulse is designed to bridge the communication gap between students, educators, and 
            administrators by providing a comprehensive, real-time feedback collection and analysis 
            platform. We believe that constructive feedback is the cornerstone of educational 
            excellence and continuous improvement.
          </p>
        </div>

        {/* System Overview */}
        <div className="mb-12">
          <h2 className="text-3xl font-semibold mb-6">System Overview</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-6 rounded-lg bg-white shadow-lg">
              <h3 className="text-xl font-semibold mb-3">Real-Time Feedback Collection</h3>
              <p className="mb-4">
                Our system enables instant feedback submission through multiple channels including 
                web forms, mobile applications, and QR code scanning. Students can provide 
                anonymous or identified feedback on courses, instructors, facilities, and overall 
                educational experience.
              </p>
            </div>
            
            <div className="p-6 rounded-lg bg-white shadow-lg">
              <h3 className="text-xl font-semibold mb-3">Advanced Analytics Dashboard</h3>
              <p className="mb-4">
                Powerful analytics engine processes feedback data to generate actionable insights. 
                Visual reports, trend analysis, and predictive modeling help administrators make 
                data-driven decisions for continuous improvement.
              </p>
            </div>
            
            <div className="p-6 rounded-lg bg-white shadow-lg">
              <h3 className="text-xl font-semibold mb-3">Multi-Stakeholder Platform</h3>
              <p className="mb-4">
                Designed for students, faculty, staff, and administrators with role-based access 
                control. Each stakeholder group has tailored interfaces and permissions to ensure 
                relevant and secure interactions.
              </p>
            </div>
            
            <div className="p-6 rounded-lg bg-white shadow-lg">
              <h3 className="text-xl font-semibold mb-3">AI-Powered Insights</h3>
              <p className="mb-4">
                Machine learning algorithms analyze feedback patterns to identify emerging issues, 
                predict potential problems, and suggest proactive interventions before they become 
                critical concerns.
              </p>
            </div>
          </div>
        </div>

        {/* Key Features */}
        <div className="mb-12">
          <h2 className="text-3xl font-semibold mb-6">Key Features</h2>
          <div className="space-y-6">
            <div className="flex items-start">
              <div className="flex-shrink-0 w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center mr-4">
                <span className="text-white font-bold">1</span>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Anonymous & Identified Feedback</h3>
                <p>Flexible feedback options allowing both anonymous submissions for sensitive topics 
                and identified submissions for follow-up communications.</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="flex-shrink-0 w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center mr-4">
                <span className="text-white font-bold">2</span>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Multi-Channel Access</h3>
                <p>Accessible via web browsers, mobile apps, email integration, and SMS for maximum 
                accessibility across different user preferences and technological capabilities.</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="flex-shrink-0 w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center mr-4">
                <span className="text-white font-bold">3</span>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Real-Time Notifications</h3>
                <p>Instant alerts for critical feedback, scheduled digest reports, and customizable 
                notification preferences for different stakeholder groups.</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="flex-shrink-0 w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center mr-4">
                <span className="text-white font-bold">4</span>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Comprehensive Reporting</h3>
                <p>Detailed analytics including sentiment analysis, trend identification, comparative 
                benchmarking, and customizable report generation for different time periods.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Technical Architecture */}
        <div className="mb-12">
          <h2 className="text-3xl font-semibold mb-6">Technical Architecture</h2>
          <div className="p-6 rounded-lg bg-white shadow-lg">
            <h3 className="text-xl font-semibold mb-4">Modern Technology Stack</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold mb-2">Frontend</h4>
                <ul className="list-disc list-inside space-y-1">
                  <li>React.js with TypeScript for robust user interfaces</li>
                  <li>Tailwind CSS for responsive and modern design</li>
                  <li>Dark mode support for accessibility and user preference</li>
                  <li>Progressive Web App (PWA) capabilities</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Backend</h4>
                <ul className="list-disc list-inside space-y-1">
                  <li>Node.js with Express.js for scalable API services</li>
                  <li>MongoDB for flexible and scalable data storage</li>
                  <li>JWT authentication for secure user sessions</li>
                  <li>RESTful API design for system integration</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Data Security & Privacy */}
        <div className="mb-12">
          <h2 className="text-3xl font-semibold mb-6">Data Security & Privacy</h2>
          <div className="p-6 rounded-lg bg-white shadow-lg">
            <p className="mb-4">
              EduPulse prioritizes data security and user privacy with enterprise-grade encryption, 
              GDPR compliance, and regular security audits. All feedback data is encrypted at rest 
              and in transit, with role-based access control ensuring users only access 
              appropriate information.
            </p>
            <ul className="list-disc list-inside space-y-2">
              <li>End-to-end encryption for all communications</li>
              <li>Regular security audits and penetration testing</li>
              <li>GDPR and privacy law compliance</li>
              <li>Data retention policies with automatic purging</li>
              <li>Anonymous feedback options to protect user identity</li>
            </ul>
          </div>
        </div>

        {/* Future Roadmap */}
        <div className="mb-12">
          <h2 className="text-3xl font-semibold mb-6">Future Roadmap</h2>
          <div className="space-y-4">
            <div className="p-4 rounded-lg bg-white shadow-lg">
              <h3 className="text-xl font-semibold mb-2">Phase 2: Advanced Analytics</h3>
              <p>Integration of natural language processing for deeper sentiment analysis and 
              predictive modeling for proactive issue identification.</p>
            </div>
            
            <div className="p-4 rounded-lg bg-white shadow-lg">
              <h3 className="text-xl font-semibold mb-2">Phase 3: Mobile App</h3>
              <p>Native mobile applications for iOS and Android with offline capabilities and 
              push notifications for enhanced user engagement.</p>
            </div>
            
            <div className="p-4 rounded-lg bg-white shadow-lg">
              <h3 className="text-xl font-semibold mb-2">Phase 4: Integration Hub</h3>
              <p>Seamless integration with existing Learning Management Systems (LMS), 
              Student Information Systems (SIS), and other educational technology platforms.</p>
            </div>
          </div>
        </div>

        {/* Contact Information */}
        <div className="text-center">
          <h2 className="text-3xl font-semibold mb-6">Get In Touch</h2>
          <p className="text-lg mb-4">
            Have questions or want to learn more about EduPulse? We'd love to hear from you!
          </p>
          <div className="flex justify-center space-x-4">
            <a href="mailto:info@edupulse.com" className="text-blue-500 hover:underline">
              contact@edupulse.com
            </a>
            <span className="opacity-50">|</span>
            <a href="tel:+1-555-EDU-PULSE" className="text-blue-500 hover:underline">
              +234-567-8901
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Aboutpage
