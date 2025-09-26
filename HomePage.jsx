import React from 'react';
import CTAsection from '../Components/Homepage/CTAsection';
import Carousel from '../Components/Homepage/Carousel';
import SectionCard from '../Components/SectionCard';

// This component holds all the sections for the homepage.
const HomePage = ({ isDarkMode }) => {
  return (
    // A fragment is used to group the homepage sections together
    <>
      <CTAsection isDarkMode={isDarkMode} />
      <Carousel isDarkMode={isDarkMode} />
      <SectionCard isDarkMode={isDarkMode} />
    </>
  );
};

export default HomePage;

