import React from 'react';

const Card = ({ children, className = '' }) => {
  return (
    <div className={`bg-content-light dark:bg-content-dark p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 ${className}`}>
      {children}
    </div>
  );
};

export default Card;