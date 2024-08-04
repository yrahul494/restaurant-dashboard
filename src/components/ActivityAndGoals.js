

import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight, faStar, faUtensils, faList } from '@fortawesome/free-solid-svg-icons';

// Register Chart.js components
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const ActivityAndGoals = () => {
  // Data for the bar chart
  const data = {
    labels: ['5', '9', '11', '13', '15','17','19','21','23','25','27'],
    datasets: [
      {
        label: 'Activity',
        data: [15, 30, 45, 60, 34,85,10,23,35,15,60],
        backgroundColor: '#3b82f6', // Tailwind blue-500
        borderRadius: 4,
      },
    ],
  };

  // Options for the bar chart
  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        callbacks: {
          label: function (context) {
            return `${context.label}: ${context.raw}`;
          },
        },
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
        ticks: {
          color: 'white',
        },
      },
      y: {
        beginAtZero: true,
        ticks: {
          color: 'white',
          callback: function (value) {
            if (value === 0) return '0';
            if (value === 20) return '5k';
            if (value === 50) return '10k';
            if (value === 80) return '15k';

            return '';
          },
        },
        grid: {
          borderColor: 'rgba(255, 255, 255, 0.2)',
          borderWidth: 1,
          color: 'rgba(255, 255, 255, 0.1)', // Slightly visible grid lines
        },
      },
    },
  };

  return (
    <div className="lg:p-6 sm:pb-6  bg-black text-white">
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Activity Column */}
        <div className="flex flex-1 flex-col custom-mt gap-4 w-full lg:w-2/3 bg-gray-900 p-4 rounded-lg shadow-md">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-semibold">Activity</h2>
            <select className="bg-gray-800 text-white border border-gray-700 rounded-md py-1 px-2">
              <option>Weekly</option>
              <option>Monthly</option>
              <option>Yearly</option>
            </select>
          </div>
          <div className="relative h-60">
            <Bar data={data} options={options} />
          </div>
        </div>

        {/* Goals Column */}
        <div className="w-full lg:w-1/3 custom-mt bg-gray-900 p-4 rounded-lg shadow-md">
          <div className="flex flex-col gap-4">
            {[
              { name: 'Goals', icon: faStar, bgColor: 'bg-orange-300' },
              { name: 'Popular Dishes', icon: faUtensils, bgColor: 'bg-blue-300' },
              { name: 'Menus', icon: faList, bgColor: 'bg-green-300' },
            ].map((item) => (
              <div key={item.name} className="flex justify-between items-center p-2 rounded-md">
                <div className="flex items-center">
                  <div className={`w-8 h-8 ${item.bgColor} rounded-full flex items-center justify-center mr-2`}>
                    <FontAwesomeIcon icon={item.icon} className="text-white" />
                  </div>
                  <span className="text-lg font-medium">{item.name}</span>
                </div>
                <FontAwesomeIcon icon={faChevronRight} className="text-white" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ActivityAndGoals;


