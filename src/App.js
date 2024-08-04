import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import DashboardHeader from './components/DashboardHeader';
import DashboardMetrics from './components/DashboardMetrics';
import ActivityAndGoals from './components/ActivityAndGoals';
import NewRow from './components/NewRow';

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="lg:flex w-full  bg-black">
      <Sidebar  isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} /> 
      <div className="flex-1 flex flex-col">
        <Navbar toggleSidebar={toggleSidebar} />
        <main className="flex-1 p-6">
          {/* Your main content goes here */}
          <DashboardHeader />
          <DashboardMetrics />
          <ActivityAndGoals/>
          <NewRow/>
        </main>
      </div>
    </div>
  );
}

export default App;
