import React, { useState } from 'react';

import CoupleDarkSet from '../../static/images/couple-collection/pexels-cottonbro-7299452.jpg';
import BlackDress from '../../static/images/women-dress/61XEByJmCWL._AC_SY879_.jpg';
import ManSuit from '../../static/images/man-catalogue/samuel-lopes-SyPk4FxjTXQ-unsplash.jpg';

const Catalogue = () => {
    const [activeIndex, setActiveIndex] = useState(null);
    const [activeOption, setActiveOption] = useState('');

    const catalogueOptions = [
        'Hot',
        'Popular',
        'Price'
    ];

    const handleFocus = (index, option) => { 
        setActiveIndex(index); 
        setActiveOption(option.toLowerCase());
    };

    return (
        <div className='my-8 py-8 flex flex-col gap-10 items-center bg-almond'>
            <ul className='flex gap-14 justify-center'>
                {catalogueOptions.map((option, index) => (
                    <li 
                        key={index} 
                        onMouseEnter={() => handleFocus(index, option)}
                        className={activeIndex === index ? 'underline font-semibold -translate-y-1' : ''}
                    >
                        {option}
                    </li>
                ))}
            </ul>

            <div className='px-8 h-90 flex flex-col gap-10 hide-scrollbar text-black text-center text-2xl font-semibold'>
                {/* EACH AND EVERY PRODUCT CARD WITHIN THE CONTAINER */}
                <a href="#" className='flex flex-col gap-3'>
                    <img 
                        className='overflow-ellipsis rounded-md'
                        src={CoupleDarkSet}
                        alt="Couple in black" 
                    />
                    <div className='flex flex-col gap-2'> 
                        <h2>Black set of 1940's</h2>
                        <p className='text-sm font-normal'>Shine bright like diamonds with partner in crime of love 1940's style</p>
                        <span>$890.0</span>
                    </div>
                </a>

                <a href="#" className='flex flex-col gap-3'>
                    <img 
                        className='overflow-ellipsis rounded-md'
                        src={BlackDress}
                        alt="Black dress" 
                    />
                    <div className='flex flex-col gap-2'> 
                        <h2>Independent Lady Boss</h2>
                        <p className='text-sm font-normal'>Who needs a man's attention when you wear this</p>
                        <span>$890.0</span>
                    </div>
                </a>

                <a href="#" className='flex flex-col gap-3'>
                    <img 
                        className='overflow-ellipsis rounded-md'
                        src={ManSuit}
                        alt="Black dress" 
                    />
                    <div className='flex flex-col gap-2'> 
                        <h2>CEOs leaving for Dubai</h2>
                        <p className='text-sm font-normal'>We will make them give you the contract at that crucial meeting</p>
                        <span>$890.0</span>
                    </div>
                </a>

                <a href="#" className='text-dark-brown pt-4 text-lg font-extrabold'>view all products by {activeOption}</a>
            </div>
        </div>
    );
};

export default Catalogue;
