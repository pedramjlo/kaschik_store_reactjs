import React, { useState, useEffect } from 'react';

import ShopWomenImage from '../../static/images/woman-7107038_1280.jpg';
import ShopMenImage from '../../static/images/man.jpg';
import ShopCoupleImage from '../../static/images/couple.jpg';



const CarouselBase = () => { 
    const [currentIndex, setCurrentIndex] = useState(0); 
    const images = [ShopWomenImage, ShopMenImage, ShopCoupleImage]; 

    useEffect(() => { 
        const interval = setInterval(() => { 
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length); }, 
        3000); // Change slide every 3 seconds 
    
        return () => 
            clearInterval(interval); }, [images.length]); 
        
        return ( 
            <div className="carousel"> 
                <div className="carousel-inner" style={{ transform: `translateX(-${currentIndex * 100}%)` }}> 
                    {images.map((image, index) => ( 
                        <div className={`carousel-item ${index === currentIndex ? 'active' : ''}`} key={index}> 
                        <img src={image} alt={`Slide ${index + 1}`} /> </div> ))
                    } 
                </div> 
            </div> 
); }; 


export default CarouselBase;