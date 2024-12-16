import React from 'react';

const CategoriesBar = () =>  {
  const categories = [
    "Women's shoes",
    "Men's shoes",
    "Women's dress",
    "Men's suit",
    "Women's accessories",
    "Men's accessories",
    "Couples"
  ];

  return (
    <div className='h-16 bg-custom-gray'>
      <ul className="px-8 py-5 flex space-x-10 text-balanced overflow-x-auto whitespace-nowrap hide-scrollbar">
        {categories.map((item, index) => (
          <li key={index} className='inline-block break-all text-sm font-semibold'><a href="#">{item}</a></li>
        ))}
      </ul>
    </div>
  );
};

export default CategoriesBar;
