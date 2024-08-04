import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faWallet, faClipboardList, faBars } from '@fortawesome/free-solid-svg-icons';

const Sidebar = ({ isOpen, toggleSidebar }) => {
  return (
    <aside className={`bg-gray-800 text-white w-16 space-y-6 py-7 px-2 absolute inset-y-0 left-0 transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} lg:relative lg:translate-x-0 transition duration-200 ease-in-out rounded-tr-lg z-10 lg:z-auto`}>
      <div className="flex items-center justify-center lg:hidden mb-4">
        <button className="text-white" onClick={toggleSidebar}>
          <FontAwesomeIcon icon={faBars} className="w-6 h-6" />
        </button>
      </div>
      <nav className="flex flex-col items-center space-y-4">
        <button className="flex items-center py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700">
          <FontAwesomeIcon icon={faHome} className="w-6 h-6" />
        </button>
        <button className="flex items-center py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700">
          <FontAwesomeIcon icon={faWallet} className="w-6 h-6" />
        </button>
        <button className="flex items-center py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700">
          <FontAwesomeIcon icon={faClipboardList} className="w-6 h-6" />
        </button>
      </nav>
    </aside>
  );
};

export default Sidebar;


