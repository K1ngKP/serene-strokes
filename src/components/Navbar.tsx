import React from 'react';

interface NavbarProps {
  onViewChange: (view: 'grid' | 'carousel') => void;
  onThemeToggle: () => void;
  isDarkMode: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ onViewChange, onThemeToggle, isDarkMode }) => {
  return (
    <nav className="p-4 flex justify-between items-center bg-gray-800 text-white">
      <div>
        <button onClick={() => onViewChange('grid')} className="mr-4">
          Grid View
        </button>
        <button onClick={() => onViewChange('carousel')}>
          Carousel View
        </button>
      </div>
      <div>
        <button onClick={onThemeToggle} className="mr-4">
          {isDarkMode ? 'Light Mode' : 'Dark Mode'}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
