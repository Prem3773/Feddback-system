import React from 'react'
import { Link } from 'react-router-dom'; // Import Link for routing

const CTAsection = () => {
    return (
        <div>
           <section className="text-center py-2 md:py-32 px-2 animate-fade-in mb- ">
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-text-light dark:text-text-dark">
            <span className="block">Welcome to </span>
            <span className="block text-primary-500 dark:text-primary-400 mt-2">EduPulse</span>
          </h1>
          <p className="mt-6 max-w-2xl mx-auto text-lg md:text-xl text-gray-600 dark:text-gray-400">
            Real-time Insights for Educational Excellence. <br /> Empowering institutions with AI-driven feedback analysis.
          </p>
          <div className="mt-8">
            <Link to="/register" className="block text-teal-600 pl-4">
                            <a href="#" className="inline-flex items-center justify-center px-8 py-2 text-2xl font-large text-center text-blue-200 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-cyan-500 dark:border-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-600">

                                Get Started 
                            </a>
            </Link>
          </div>
        </section>
        </div>
    )
}

export default CTAsection