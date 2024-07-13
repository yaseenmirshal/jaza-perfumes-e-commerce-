'use client'
import { useState } from 'react';

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
      <div  style={{ backgroundColor: '#F7F3E9' }} className="w-full md:w-1/2 h-screen bg-green-900 flex items-center justify-center pt-0 px-0 md:px-0">
      <img className='w-[]500px h-[500px]' src="https://i.pinimg.com/564x/1d/64/7e/1d647e898e538634379366ef24f572ce.jpg" alt="" />
      </div>
    </div>
  );
};

export default Home;
