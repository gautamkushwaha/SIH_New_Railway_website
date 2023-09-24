import React, { useState } from 'react';

const CrowdManagement = () => {
  const [selectedTimeframe, setSelectedTimeframe] = useState('day');

  const handleTimeframeChange = (event) => {
    setSelectedTimeframe(event.target.value);
  };

  // Define an array of graphs for each timeframe
  const graphs = {
    day: <img src="https://ppcexpo.com/blog/wp-content/uploads/2022/09/best-chart-to-show-trends-over-time.jpg" alt="Graph for Expected People travelling Today" className='w-[900px] mx-auto my-[50px]' />,
    day: <img src="https://ppcexpo.com/blog/wp-content/uploads/2022/09/best-chart-to-show-trends-over-time.jpg" alt="Graph for Day" className='w-[900px] mx-auto my-[50px]' />,
    week: <img src="https://chartexpo.com/blog/wp-content/uploads/2022/11/best-charts-to-show-trends-over-time.jpg" alt="Graph for Week" 
    className='w-[1000px] mx-auto my-[50px]'/>,
    month: <img src="https://chartexpo.com/blog/wp-content/uploads/2022/08/types-of-charts-and-graphs.jpg" alt="Graph for Month" 
    className='w-[1000px] mx-auto my-[50px]'/>,
    specialEvents: <img src="https://ppcexpo.com/blog/wp-content/uploads/2022/10/types-of-business-charts.jpg" alt="Graph for Special Events"
    className='w-[1000px] mx-auto my-[50px]' />,
  };

  return (
    <section className="bg-white p-8 pt-[200px] mx-[100px]">
      <div className="container mx-auto">
        <h1 className="text-5xl font-semibold text-center mb-5">Crowd Management Data Analysis</h1>
        <p className="text-[18px] my-10">
          Let's dive into the data analysis we have done. Here you can find information for the selected timeframe: peak hours of the day, the number of people at the station every hour, week, month, and special events.
        </p>

        {/* Timeframe Selection Dropdown */}
        <div className="mb-5">
          <label className="text-lg font-semibold">Select Timeframe:</label>
          <select
            className="bg-white border border-gray-300 p-2 rounded-md"
            value={selectedTimeframe}
            onChange={handleTimeframeChange}
          >
             <option value="day">TodayExpection</option>
            <option value="day">Day</option>
            <option value="week">Week</option>
            <option value="month">Month</option>
            <option value="specialEvents">Special Events</option>
          </select>
        </div>
        {/* End Timeframe Selection Dropdown */}

        {/* Display the selected graph */}
        <div className="bg-gray-400 p-4 rounded-lg shadow-md">
          <p className="text-2xl font-bold text-center my-5">Graph for {selectedTimeframe}</p>
          {graphs[selectedTimeframe]}
        </div>
      </div>
    </section>
  );
};

export default CrowdManagement;
