import React, { useState, useEffect } from 'react';
import Cdata from './Cdata';

const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = Cdata;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000); // Change slide every 3 seconds

    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <div className="w-full ">
      <div className="grid lg:grid-cols-2 gap-12 items-center w-full">
        <div className="relative w-full rounded-lg shadow-2xl overflow-hidden h-[450px]">
          <div
            className="flex transition-transform ease-in-out duration-700 h-full"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {slides.map((slide, index) => (
              <div key={index} className="w-full flex-shrink-0 h-full">
                <img src={slide.image} alt={slide.title} className="w-full h-full object-cover" />
              </div>
            ))}
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
        </div>

        <div className="relative w-full">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`transition-opacity duration-700 ${
                currentSlide === index ? 'opacity-100' : 'opacity-0 absolute top-0'
              }`}
            >
              <h3 className="text-3xl md:text-4xl font-bold">{slide.title}</h3>
              <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">{slide.description}</p>
            </div>
          ))}

          <div className="mt-8 flex space-x-3">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                  currentSlide === index
                    ? 'bg-blue-500'
                    : 'bg-gray-300 dark:bg-gray-600 hover:bg-blue-300'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Carousel;