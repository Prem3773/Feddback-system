import React from 'react';
import CTAsection from '../Components/Homepage/CTAsection';
import Carousel from '../Components/Homepage/Carousel';
import SectionCard from '../Components/SectionCard';

const HomePage = ({ isDarkMode }) => {
  return (
    <div className={`min-h-screen ${isDarkMode ? 'bg-gray-900' : 'bg-white'}`}>
      {/* Hero Section */}
      <section className={`py-2  ${isDarkMode ? 'bg-gray-800' : 'bg-gray-50'}`}>
        <div className=" ">
          <div className="text-center">
            <section className="">
        <div className="container mx-auto px-4">
          <CTAsection isDarkMode={isDarkMode} />
        </div>
      </section>
          </div>
        </div>
      </section>

      {/* Carousel Section */}
      <section className="py-16 px-6">
        <div className="container mx-auto px-4">
          <Carousel isDarkMode={isDarkMode} />
        </div>
      </section>

      {/* CTA Section */}
      <SectionCard isDarkMode={isDarkMode} />
      
    </div>
  );
};

export default HomePage;
