import React from 'react';

const GridComponent = () => {
  return (
    <div className='mx-[100px] pt-[200px]'>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 px-4 py-8 sm:px-8 sm:py-12">
        {/* First Column */}
        <div className="sm:order-last my-auto">
          <img
            src="https://s01.sgp1.digitaloceanspaces.com/large/669579-a68b3508-1798-42fb-8e56-db8848807fe4.jpg"
            alt="Logo"
            className="w-full h-auto  my-auto"
          />
        </div>

        {/* Second Column */}
        <div className="sm:order-first">
          <div className="text-center sm:text-left">
            <h3 className="text-4xl font-bold pb-2">Our Vision</h3>
            <p className="text-xl text-gray-600">To use AI and ML technology to improve the <span>safety</span> , <span>security</span>, and <span>efficiency</span> of the Indian Railways</p>
          </div>
          <div className="mt-4">
            <h2 className="text-6xl font-bold pb-2">Our Mission</h2>
            <p className="text-2xl text-gray-600">To develop and implement AI and ML-based solutions to address the challenges of crowd management, crime prevention, and work monitoring on the Indian Railways.</p>
          </div>
          <div className="mt-10 bg-gray-100">
            <blockquote className="italic text-gray-800 text-3xl">
              "Life Line of Nation"
            </blockquote>
            <p className='text-gray-800 text-3xl'>-Slogan of Indian Railway</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GridComponent;
