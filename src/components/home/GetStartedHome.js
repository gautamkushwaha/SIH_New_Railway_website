import React, { useState } from 'react';
import  Link  from 'next/link';

const dataArray = [
 

  {
    
    id: 1,
    subHeading: 'Shared Hosting',
    heading: 'Reliable Shared Hosting Services for Seamless Website Performance',
    description: "Elevate your website's performance with our trusted shared hosting services. Experience unparalleled reliability and lightning-fast loading speeds. Our robust infrastructure ensures optimal uptime, while our expert support team is available 24/7 to address any concerns. Seamlessly deliver a smooth browsing experience to your visitors and watch your online presence thrive",
    image: 'GetStarted/buttons/globe.png',
    imaged: '/GetStarted/buttonAssociate/shared-thumb-hosting.png',
  },
  {
    id: 2,
    subHeading: 'Cloud Hosting',
    heading: 'Take Your Website to New Heights with Our Trusted Cloud Hosting Solutions',
    description: 'Step into the future of hosting with our reliable cloud solutions. Seamlessly scale your resources as your website grows, ensuring unmatched performance and stability. Join thousands of satisfied customers who have experienced the transformative power of cloud hosting.',
    image: '/GetStarted/buttons/cloud-hosting.png',
    imaged: '/GetStarted/buttonAssociate/cloud-thumb-updated.png',
  },
  {
    id: 3,
    subHeading: 'Wordpress Hosting',
    heading: 'Boost Your Online Presence with our Trusted WordPress Hosting Services',
    description: 'Discover the power of our WordPress hosting solutions designed to supercharge your website. Enjoy blazing-fast speeds, rock-solid security, and hassle-free management, allowing you to focus on creating exceptional content and growing your online presence.',
    image: '/GetStarted/buttons/wp-hosting.png',
    imaged: '/GetStarted/buttonAssociate/wp-thumb.png',
  },
  {
    id: 4,
    subHeading: 'Google Workspace',
    heading: "Simplify Communication and Collaboration with Google Workspace's Integrated Solutions",
    description: 'Give your team the tools they need to succeed. Google Workspace streamlines workflows, providing a suite of integrated applications for email, document editing, video conferencing, and more. Empower your team to work smarter and achieve their best results.',
    image: '/GetStarted/buttons/vps-hosting.png',
    imaged: 'GetStarted/buttonAssociate/vps-thumb.png',
  },
  
];


// javascript to implement break in the description 
const createMarkup = (htmlString) => {
  return { __html: htmlString };
};

const App = () => {
  const [selectedId, setSelectedId] = useState(dataArray[0].id);

  const handleClick = (id) => {
    setSelectedId(id);
  };

  const selectedElement = dataArray.find((element) => element.id === selectedId)

  return (
    <div className="w-full mx-auto my-[50px] xs:my-[75px]">
      <h2 className="text-center text-4xl xs:text-5xl md:text-6xl font-bold mb-5 sm:mb-12 p-6 font-serif text-[#2D4356]">Get Started With India #1 Web Hosting</h2>


{/* four buttons here */}
      <div className="flex flex-wrap pl-5 sm:justify-center  gap-2 md:gap-3  space-x-5 sm:space-x-7 md:space-x-9">
        {dataArray.map((element, index) => (
          <button
            key={element.id}
            onClick={() => handleClick(element.id)}
            className={`flex items-center justify-content px-2 sm:px-4 md:px-6 py-2 sm:py-4 md:py-5 rounded-2xl text-[15px] md:text-[20px] font-bold ${
              element.id === selectedId ? 'bg-[#CBF1F5] text-[#2D4356]' : 'bg-[#71C9CE]'
            }`}
            // style={index === 0 && window.innerWidth < 640 ? { marginBottom: '-4px' } : null}
            
          >
            <img src={element.image} alt={element.subHeading} className="w-9 md:w-10 mr-0 sm:mr-3 md:mr-5 rounded-3xl text-[#CBF1F5]  bg-[#CBF1F5] font-bold" />
            {element.subHeading}
          </button>
        ))}
      </div>


{/* here we are going to write the subheading, headingm, description, and image on the right side */}
      {selectedElement && (

        // image parf to the div

        <div className="xs:w-[90%] sm:w-[80%] mx-auto my-[20px]  xs:my-[40px] sm:my-[50px] md:my-[100px] flex flex-col sm:flex-row-reverse ">
          <div className="w-full sm:w-1/2 sm:ml-0 md:ml-4 my-auto">
            <img src={selectedElement.imaged} alt={selectedElement.heading} className="w-[400px] xs:ml-2 sm:ml-4 md:ml-[100px] mx-auto text-center text-[#CBF1F5]" />
          </div>


          {/* heading, description part  */}
          <div className="w-full sm:w-1/2 ">
            <h3 className="text-[17pxm] md:text-[18px] font-bold  mb-1 text-[#7868E5] pt-2 mx-[10px] font-Open my-5">{selectedElement.subHeading}</h3>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-1 sm:mb-2 md:mb-4 text-[#2D4356] mx-[10px] font-Open">{selectedElement.heading}</h2>
            <p className='text-[12px] sm:text-[14px] md:text-[15px] text-gray-500 font-Open  mx-[10px] my-5'>{selectedElement.description}</p>

            <div className=" w-[70%] xs:w-[70%] sm:w-[50%] md:w-[100%] flex flex-col xs:flex-row gap-3 sm:gap-4 md:gap-6 items-center font-Open">
            <Link href="#pricing">
              <button className="px-4 md:px-5 lg:px-8 py-3 font-bold text-[#2D4356] rounded-xl border transition-transform hover:scale-105">
                Choose Plan
              </button>
            </Link>
        </div>
          </div>
          
        </div>
      )}
    </div>
  );
};

export default App;
