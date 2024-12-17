import React, { useState } from 'react';

import CoupleDarkSet from '../../static/images/couple-collection/pexels-cottonbro-7299452.jpg';
import BlackDress from '../../static/images/women-dress/61XEByJmCWL._AC_SY879_.jpg';
import ManSuit from '../../static/images/man-catalogue/samuel-lopes-SyPk4FxjTXQ-unsplash.jpg';


const Catalogue = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const handleFocus = (index) => { 
        setActiveIndex(index); 
    }; 

    const catalogueOptions = [
        'Hot',
        'Popular',
        'Price'
    ];

    return (
        <div className='py-8 flex flex-col gap-10 items-center bg-custom-green'>
            <ul className='flex gap-14 justify-center'>
                {catalogueOptions.map((option, index) => (
                    <li 
                        key={index} 
                        onMouseEnter={() => handleFocus(index)}
                        className={activeIndex === index ? 'underline font-semibold -translate-y-1 text-white' : 'text-white'}
                    >
                        {option}
                    </li>
                ))}
            </ul>

            <div className='px-8  h-90 flex flex-col  gap-4 hide-scrollbar'>
                {/* EACH AND EVERY PRODUCT CARD WITHIN THE CONTAINER */}
                <a href="#">
                    <img 
                        className='overflow-ellipsisn rounded-md'
                        src={CoupleDarkSet}
                        alt="Couple in black" 
                    />
                </a>

                <a href="#">
                    <img 
                        className='overflow-ellipsisn rounded-md'
                        src={BlackDress}
                        alt="Black dress" 
                    />
                </a>

                <a href="#">
                    <img 
                        className='overflow-ellipsisn rounded-md'
                        src={ManSuit}
                        alt="Couple in black" 
                    />
                </a>
            </div>
        </div>
    );
};

export default Catalogue;
