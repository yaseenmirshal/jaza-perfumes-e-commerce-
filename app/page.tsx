'use client'
import { useState } from 'react';
import { Carousel } from "@material-tailwind/react";

const Home = () => {
  const [activeIndex, setActiveIndex] = useState<number>(0);

  return (
    <div className="flex flex-col md:flex-row">
      {/* Left Column */}
      <div style={{ backgroundColor: '#F7F3E9' }} className="w-full md:w-1/2 h-screen flex items-center justify-start pt-10 px-6 md:px-16">
        <div className="text-left">
          <h1 style={{ color: '#3E2723' }} className="text-4xl md:text-6xl font-bold leading-tight mb-6">
            Discover Your Signature Scent
          </h1>
          <p style={{ color: '#36454F' }} className="text-lg md:text-2xl leading-relaxed mb-8">
            Indulge in our exclusive collection of captivating fragrances
          </p>
          <button
            style={{ backgroundColor: '#3E2723' }}
            className="text-white text-lg md:text-xl font-semibold py-3 px-8 rounded-md shadow-md transition duration-300 transform hover:scale-105 hover:bg-green-800 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50"
          >
            Explore
          </button>
        </div>
      </div>

      {/* Right Column */}
      <div style={{ backgroundColor: '#F7F3E9' }} className="w-full md:w-1/2 h-screen bg-green-900 flex items-center justify-center pt-0 px-0 md:px-0">
        <Carousel
          className="rounded-xl w-[500px] h-[500px]"
          onChange={setActiveIndex}
          activeIndex={activeIndex}
          navigation={({ setActiveIndex, activeIndex, length }) => (
            <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2">
              {new Array(length).fill("").map((_, i) => (
                <span
                  key={i}
                  className={`block h-1 cursor-pointer rounded-2xl transition-all ${
                    activeIndex === i ? "w-8 bg-white" : "w-4 bg-white/50"
                  }`}
                  onClick={() => setActiveIndex(i)}
                />
              ))}
            </div>
          )}
        >
          <img
            src="https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2560&q=80"
            alt="image 1"
            className="h-full w-full object-cover"
          />
          <img
            src="https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80"
            alt="image 2"
            className="h-full w-full object-cover"
          />
          <img
            src="https://images.unsplash.com/photo-1518623489648-a173ef7824f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2762&q=80"
            alt="image 3"
            className="h-full w-full object-cover"
          />
        </Carousel>
      </div>
    </div>
  );
};

export default Home;
