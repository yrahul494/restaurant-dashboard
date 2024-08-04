import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faList, faCheck, faTimes, faDollarSign, faArrowUp, faArrowDown } from '@fortawesome/free-solid-svg-icons';
import '../../src/App.css'

const DashboardMetrics = () => {
  const radius = 45; 
  const circumference = 2 * Math.PI * radius;
  const progress = 0.7 * circumference; // 70% progress

  return (
    <div className="lg:p-6 bg-black text-white">
      {/* Single Row with Increased Gap Between Columns */}
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Column for Metrics */}
        <div className="flex flex-wrap gap-4 flex-grow w-full lg:w-2/3">
          <div className="flex-1 bg-gray-900 p-4 rounded-lg shadow-md flex flex-col justify-between relative">
            <div className="flex flex-col space-y-2">
              <div className="text-3xl">
                <FontAwesomeIcon icon={faList} />
              </div>
              <h3 className="text-lg font-semibold">Total Orders</h3>
              <p className="text-2xl font-bold">1,234</p>
            </div>
            <div className="absolute bottom-2 right-2 flex items-center text-green-400">
              <FontAwesomeIcon icon={faArrowUp} className="w-4 h-4 mr-1" />
              <span className="text-sm font-medium">+3%</span>
            </div>
          </div>
          <div className="flex-1 bg-gray-900 p-4 rounded-lg shadow-md flex flex-col justify-between relative">
            <div className="flex flex-col space-y-2">
              <div className="text-3xl">
                <FontAwesomeIcon icon={faCheck} />
              </div>
              <h3 className="text-lg font-semibold">Total Delivered</h3>
              <p className="text-2xl font-bold">1,100</p>
            </div>
            <div className="absolute bottom-2 right-2 flex items-center text-red-400">
              <FontAwesomeIcon icon={faArrowDown} className="w-4 h-4 mr-1" />
              <span className="text-sm font-medium">-1%</span>
            </div>
          </div>
          <div className="flex-1 bg-gray-900 p-4 rounded-lg shadow-md flex flex-col justify-between relative">
            <div className="flex flex-col space-y-2">
              <div className="text-3xl">
                <FontAwesomeIcon icon={faTimes} />
              </div>
              <h3 className="text-lg font-semibold">Total Canceled</h3>
              <p className="text-2xl font-bold">34</p>
            </div>
            <div className="absolute bottom-2 right-2 flex items-center text-green-400">
              <FontAwesomeIcon icon={faArrowUp} className="w-4 h-4 mr-1" />
              <span className="text-sm font-medium">+5%</span>
            </div>
          </div>
          <div className="flex-1 bg-gray-900 p-4 rounded-lg shadow-md flex flex-col justify-between relative">
            <div className="flex flex-col space-y-2">
              <div className="text-3xl">
                <FontAwesomeIcon icon={faDollarSign} />
              </div>
              <h3 className="text-lg font-semibold">Total Revenue</h3>
              <p className="text-2xl font-bold">$15,678</p>
            </div>
            <div className="absolute bottom-2 right-2 flex items-center text-red-400">
              <FontAwesomeIcon icon={faArrowDown} className="w-4 h-4 mr-1" />
              <span className="text-sm font-medium">-2%</span>
            </div>
          </div>
        </div>
        {/* Column for Net Profit */}
        <div className="w-full lg:w-1/3 bg-gray-900 p-4 rounded-lg shadow-md flex flex-col lg:flex-row items-center">
          <div className="flex flex-col items-center lg:items-start flex-grow">
            <h3 className="text-lg font-semibold mb-2">Net Profit</h3>
            <p className="text-2xl font-bold mb-2">$12,345</p>
            <div className="flex items-center text-green-400 mb-2">
              <FontAwesomeIcon icon={faArrowUp} className="w-4 h-4 mr-1" />
              <span className="text-sm font-medium">+3%</span>
            </div>
          </div>
          <div className="relative w-24 h-24 flex items-center justify-center ml-4">
            <svg className="absolute w-full h-full" viewBox="0 0 100 100">
              <circle
                className="text-gray-700"
                strokeWidth="10"
                stroke="currentColor"
                fill="transparent"
                r={radius}
                cx="50"
                cy="50"
              />
              <circle
                className="text-green-500"
                strokeWidth="10"
                strokeDasharray={circumference}
                strokeDashoffset={circumference - progress}
                strokeLinecap="round"
                stroke="currentColor"
                fill="transparent"
                r={radius}
                cx="50"
                cy="50"
              />
            </svg>
            <div className="absolute text-center">
              <span className="text-2xl font-semibold text-green-500">70%</span>
              <div className="text-gray-200 custom-font-small custom-font-medium custom-font-large">Goal Completed</div>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
};

export default DashboardMetrics;
