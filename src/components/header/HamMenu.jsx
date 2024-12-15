import React, { useState, useEffect, useRef } from 'react';

const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleClickOutside = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="relative" ref={menuRef}>
      <button
        className="block md:hidden p-2 rounded focus:outline-none"
        onClick={toggleMenu}
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h16m-7 6h7"
          />
        </svg>
      </button>

      <div className={`absolute left-0 w-full bg-white shadow-md ${isOpen ? 'block' : 'hidden'} md:hidden`} style={{ minHeight: '50vh', minWidth: '100vw' }}>
        <ul className="flex flex-col p-4">
          <li className="py-2"><a href="#home">Home</a></li>
          <li className="py-2"><a href="#about">About</a></li>
          <li className="py-2"><a href="#services">Services</a></li>
          <li className="py-2"><a href="#contact">Contact</a></li>
        </ul>
      </div>

    </div>
  );
};

export default HamburgerMenu;
