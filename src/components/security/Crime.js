// components/CrimePrevention.js

import React from 'react';

const CrimePrevention = () => {
  return (
    <section className="bg-[#b0afaf] p-8 my-[100px] py-[100px] px-[100px]" >
      <div className="container mx-auto">
        <h1 className="text-5xl font-semibold text-center mb-5">Crime Prevention</h1>

        {/* Overview of Crime Prevention */}
        <div className="mb-8">
          <h2 className="text-3xl font-semibold mt-[50px]">Overview of Crime Prevention</h2>
          <p className='text-[18px], m-3'>
            One of the main aim of this project is to prevent crime related issues on the railway station. We are very dedicated to our works and efforts to prevent crime in railway station. We are very confident that our this project will reduce the crime in railway station totally. We are also very sure that this will be a game changing infrastructure not only int the railway industry but for the whole country and an exemplery thing for the whole world.
          </p>
        </div>

        {/* Types of Crimes Addressed */}
        <div className="mb-8">
          <h2 className="text-3xl font-semibold mb-2">Types of Crimes Addressed</h2>
          <p className='text-[18px], m-3'>
            Our project focuses on preventing various types of crimes, including 
            <ul>
            <li>1.Theft</li>
            <li>2.Vandalism</li>
            <li>3.Trespassing</li>
            <li>4.And more</li>
          </ul>
            We aim to create a secure environment for everyone,in your journey for the train.
          </p>
        </div>

        {/* Crime Statistics */}
        <div className="mb-8">
          <h2 className="text-3xl font-semibold mb-2">Crime Statistics</h2>
          <p className='text-[18px], m-3'>
            To understand the need for crime prevention, it's essential to consider relevant crime statistics and trends.
            Below are some key insights into crime data:
            <div className='flex '>  
            <h3> <p className='text-center text-2xl font-bold py-5'>Crime Rate Every year</p> <img src="https://cdn.statcdn.com/Infographic/images/normal/30152.jpeg" className='w-[500px] px-5 pb-10'/></h3>
           
           <h3> <p className='text-center text-2xl font-bold py-5'>Crime Rate Every year</p><img src="https://factly.in/wp-content/uploads//2015/08/indian-railway-accidents-statistics_cause-of-accidents-2009-15.png" className='w-full px-5 pb-10'/></h3>
            </div>
         <h4> Sources: hindustan Times</h4>
          </p>
          {/* Insert crime statistics charts or graphs here */}
        </div>

        {/* Project's Role in Crime Prevention */}
        <div className="my-[20px]">
          <h2 className="text-3xl font-semibold mb-2">Our Project's Role</h2>
          <p className='p-3'>
            Our project utilizes advanced technologies and strategies to enhance crime prevention efforts.
            We employ  
            <ul>
            <li>1.facial recognition</li>
            <li>2.object detection</li>
            <li>3.surveillance</li>
            <li>4.And more</li>
          </ul>
          to identify potential security threats.
          </p>
          {/* Include details about facial recognition and object detection */}
        </div>

        {/* Security Enhancements */}
        <div className="mb-8">
          <h2 className="text-3xl font-semibold mb-2">Security Enhancements</h2>
          <p>
            Our project implements various security enhancements, including access
            <ul>
            <li>1.control</li>
            <li>2.alarms</li>
            <li>3.continuous monitoring</li>
            <li>4.And more</li>
          </ul>
            We are dedicated to maintaining a safe environment for all.
            
          </p>
          {/* Add more details about security features */}
        </div>
      </div>
    </section>
  );
};

export default CrimePrevention;
