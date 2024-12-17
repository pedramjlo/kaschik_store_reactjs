import React, { useState } from 'react';

const Catalogue = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const handleMouseEnter = (index) => { 
        setActiveIndex(index); 
    }; 
    
    const handleMouseLeave = () => { 
        setActiveIndex(null); 
    };

    const catalogueOptions = [
        'Hot',
        'Popular',
        'Price'
    ];

    return (
        <div className='py-10 flex flex-col gap-5'>
            <ul className='flex gap-14 justify-center'>
                {catalogueOptions.map((option, index) => (
                    <li 
                        key={index} 
                        onMouseEnter={() => handleMouseEnter(index)}
                        onMouseLeave={handleMouseLeave}
                        className={activeIndex === index ? 'underline' : ''}
                    >
                        {option}
                    </li>
                ))}
            </ul>

            <div className='bg-custom-green h-80'>
                <div></div>
            </div>
        </div>
    );
};

export default Catalogue;
