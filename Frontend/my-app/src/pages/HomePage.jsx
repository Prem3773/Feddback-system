import React from 'react';
import CTAsection from '../Components/Homepage/CTAsection';
import Carousel from '../Components/Homepage/Carousel';
import SectionCard from '../Components/SectionCard';

const HomePage = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-2 bg-gray-50">
        <div className=" ">
          <div className="text-center">
            <section className="">
        <div className="container mx-auto px-4">
          <CTAsection />
        </div>
      </section>
          </div>
        </div>
      </section>

      {/* Carousel Section */}
      <section className="py-16 px-6">
        <div className="container mx-auto px-4">
          <Carousel />
        </div>
      </section>

      {/* CTA Section */}
      <SectionCard />

    </div>
  );
};

export default HomePage;
