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

  const categories = [
    "Women",
    "Men",
    "Women's accessories",
    "Men's accessories",
    "Couples",
    "All collections"
  ];

  return (
    <div className="relative" ref={menuRef}>
        
      <button
        className="block md:hidden p-2 rounded focus:outline-none"
        onClick={toggleMenu}
      >
        <svg
          className="w-6 h-6 transform rotate-180"
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


      <div className={`fixed top-0 left-0 w-full h-full bg-white shadow-md ${isOpen ? 'block' : 'hidden'} md:hidden`}>
        <button
          className="absolute top-4 right-4 p-2 rounded focus:outline-none"
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
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

      


        <ul className="list-outside pt-16 flex flex-col p-4 h-full justify-start items-center gap-8 font-bold bg-custom-beige ">
          {categories.map((item, index) => (
              <li key={index} className='break-words'>{item}</li>
          ))}
        </ul>

          
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M14.4399 19.05L15.9599 20.57L18.9999 17.53" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M12.16 10.87C12.06 10.86 11.94 10.86 11.83 10.87C9.44997 10.79 7.55997 8.84 7.55997 6.44C7.54997 3.99 9.53997 2 11.99 2C14.44 2 16.43 3.99 16.43 6.44C16.43 8.84 14.53 10.79 12.16 10.87Z" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M11.99 21.8101C10.17 21.8101 8.36004 21.3501 6.98004 20.4301C4.56004 18.8101 4.56004 16.1701 6.98004 14.5601C9.73004 12.7201 14.24 12.7201 16.99 14.5601" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>

        <hr class="border-gray-800 dark:border-black"></hr>

        <h2>account</h2>




       


      </div>
    </div>
  );
};

export default HamburgerMenu;
