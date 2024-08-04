import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faCog, faBell, faBars, faSearch } from '@fortawesome/free-solid-svg-icons';

const Navbar = ({ toggleSidebar }) => {
  return (
    <nav className="bg-gray-800 p-4 flex justify-between items-center rounded-tr-lg">
      <div className="flex items-center space-x-4">
        <button className="lg:hidden text-gray-300" onClick={toggleSidebar}>
          <FontAwesomeIcon icon={faBars} className="w-5 h-5" />
        </button>
        <div className="relative flex-1 max-w-[200px] lg:max-w-[250px]">
          <input 
            type="text" 
            placeholder="Search..." 
            className="bg-gray-700 text-white pl-10 pr-3 py-2 rounded-lg focus:outline-none w-full" 
          />
          <span className="absolute inset-y-0 left-0 flex items-center pl-3">
            <FontAwesomeIcon icon={faSearch} className="text-gray-400 w-5 h-5" />
          </span>
        </div>
      </div>
      <div className="flex items-center space-x-3">
        <button className="text-gray-300 relative">
          <FontAwesomeIcon icon={faEnvelope} className="w-5 h-5" />
        </button>
        <button className="text-gray-300 relative">
          <FontAwesomeIcon icon={faBell} className="w-5 h-5" />
          <span className="absolute top-0 right-0 inline-flex items-center justify-center px-1 py-0.5 text-xs font-bold leading-none text-red-100 bg-red-600 rounded-full translate-x-1/2 -translate-y-1/2">
            3
          </span>
        </button>
        <button className="text-gray-300">
          <FontAwesomeIcon icon={faCog} className="w-5 h-5" />
        </button>
        <button className="text-gray-300 flex items-center justify-center w-10 h-10 rounded-full overflow-hidden border border-gray-600">
          <img 
            src="https://via.placeholder.com/32/000000/FFFFFF?text=R" 
            alt="Profile" 
            className="w-full h-full object-cover rounded-full" 
          />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
