import React from 'react';
import '../../src/App.css'



const RecentOrders = () => {
  const orders = [
    { customer: 'John Doe', orderNo: '12345', amount: '$150', status: 'Completed' },
    { customer: 'Jane Smith', orderNo: '12346', amount: '$200', status: 'Not Completed' },
    { customer: 'Michael Brown', orderNo: '12347', amount: '$300', status: 'Completed' },
    { customer: 'Emily Davis', orderNo: '12348', amount: '$250', status: 'Completed' },
   
  ];

  return (
    <div className="p-6 text-white">
      <h2 className="text-xl font-semibold mb-4">Recent Orders</h2>
      <div className="space-y-4">
        <div className="hidden sm:flex justify-between p-4 bg-gray-700 rounded-lg font-semibold">
          <div className="w-1/4">Customer</div>
          <div className="w-1/4">Order No</div>
          <div className="w-1/4">Amount</div>
          <div className="w-1/4">Status</div>
        </div>
        {orders.map((order, index) => (
          <div key={index} className="flex flex-wrap justify-between items-center p-4 bg-gray-800 rounded-lg text-sm sm:text-base">
            <div className="w-full sm:w-1/4 flex items-center mb-2 sm:mb-0">
              <img
                src={`https://via.placeholder.com/50?text=${order.customer.charAt(0)}`}
                alt="Customer"
                className="w-12 h-12 rounded-full mr-4"
              />
              <div>
                <div className="font-semibold">{order.customer}</div>
              </div>
            </div>
            <div className="w-full sm:w-1/4 mb-2 sm:mb-0">
              <div className="sm:hidden text-gray-400">Order No:</div>
              {order.orderNo}
            </div>
            <div className="w-full sm:w-1/4 mb-2 sm:mb-0">
              <div className="sm:hidden text-gray-400">Amount:</div>
              {order.amount}
            </div>
            <div className="w-full sm:w-1/4 mb-2 sm:mb-0">
              <div className="sm:hidden text-gray-400">Status:</div>
              <div
                className={`px-3 py-1 rounded-full text-sm font-semibold ${
                  order.status === 'Completed' ? 'bg-green-500 text-white' : 'bg-red-500 text-white'
                }`}
              >
                {order.status}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};





const FeedbackSection = () => {
  const feedbacks = [
    { customer: 'John Doe', rating: 4, description: 'Great service!' },
    { customer: 'Jane Smith', rating: 5, description: 'Excellent food!' },
    { customer: 'Michael Brown', rating: 3, description: 'Good, but could be better.' },
    { customer: 'Emily Davis', rating: 4, description: 'Very satisfied with the meal.' },
    { customer: 'Daniel Wilson', rating: 2, description: 'Not happy with the service.' },
    { customer: 'Olivia Martinez', rating: 5, description: 'Fantastic experience!' },
  ];

  return (
    <div className="p-6 text-white overflow-y-scroll max-h-96 scrollbar-thin scrollbar-thumb-blue-500 scrollbar-track-gray-700">
      <h2 className="text-xl font-semibold mb-4 sticky top-0 bg-gray-800">Customer Feedback</h2>
      <div className="space-y-4">
        {feedbacks.map((feedback, index) => (
          <div key={index} className="flex items-start p-4 bg-gray-800 rounded-lg">
            <img
              src={`https://via.placeholder.com/50?text=${feedback.customer.charAt(0)}`}
              alt="Customer"
              className="w-12 h-12 rounded-full mr-4"
            />
            <div>
              <div className="font-semibold">{feedback.customer}</div>
              <div className="flex items-center">
                <div className="text-yellow-500">
                  {'★'.repeat(feedback.rating)}{' '}
                  <span className="text-gray-400">{'★'.repeat(5 - feedback.rating)}</span>
                </div>
              </div>
              <div className="text-sm text-gray-400">{feedback.description}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const NewRow = () => {
  return (
    <div className="lg:p-6   text-white">
      <div className="flex flex-col lg:flex-row gap-8 ">
        <div className=" bg-gray-800 rounded-lg custom-mt w-full lg:w-2/3">
          <RecentOrders />
        </div>
        <div className=" bg-gray-800 rounded-lg custom-mt w-full lg:w-1/3">
          <FeedbackSection />
        </div>
      </div>
    </div>
  );
};

export default NewRow;
