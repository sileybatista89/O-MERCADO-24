
import React, { useState } from 'react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    "Home", "Breaking News", "Markets", "Forex", "Indices", 
    "Prop Firms", "Economy", "Portugal", "Opinion"
  ];

  return (
    <nav className="bg-white border-b border-m24-border sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="bg-m24-red text-white font-oswald text-3xl px-3 py-1 font-bold tracking-tighter">
              MERCADO 24
            </div>
            <div className="hidden md:block h-10 w-[2px] bg-m24-border mx-4"></div>
            <div className="hidden md:block text-xs font-bold text-m24-dark tracking-[0.2em] uppercase">
              Financial Broadcast Network
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-8">
            {menuItems.map((item) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase().replace(' ', '-')}`}
                className="text-[13px] font-bold uppercase hover:text-m24-red transition-colors duration-200"
              >
                {item}
              </a>
            ))}
          </div>

          {/* Search & Action */}
          <div className="hidden md:flex items-center space-x-6">
             <button className="text-m24-dark hover:text-m24-red">
               <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
               </svg>
             </button>
             <button className="bg-m24-dark text-white text-xs font-bold uppercase px-4 py-2 hover:bg-black transition-colors">
               Live TV
             </button>
          </div>

          {/* Mobile Menu Toggle */}
          <button className="lg:hidden p-2" onClick={() => setIsOpen(!isOpen)}>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden pb-6 space-y-4">
            {menuItems.map((item) => (
              <a 
                key={item} 
                href="#"
                className="block text-[14px] font-bold uppercase border-b border-m24-gray py-2"
                onClick={() => setIsOpen(false)}
              >
                {item}
              </a>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
