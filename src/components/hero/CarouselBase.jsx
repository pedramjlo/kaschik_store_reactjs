import React, { useState, useEffect } from 'react';

import ShopWomenImage from '../../static/images/woman-7107038_1280.jpg';
import ShopMenImage from '../../static/images/man.jpg';
import ShopCoupleImage from '../../static/images/couple.jpg';

const CarouselBase = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [
    { src: ShopWomenImage, alt: 'Woman model', buttonText: 'Shop Women' },
    { src: ShopMenImage, alt: 'Man model', buttonText: 'Shop Men' },
    { src: ShopCoupleImage, alt: 'Couple model', buttonText: 'Shop Couples' }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 7000); // Change slide every 7  seconds

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="carousel">
      <div className="carousel-inner" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
        {images.map((image, index) => (
          <div className={`carousel-item ${index === currentIndex ? 'active' : ''}`} key={index}>
            <img src={image.src} alt={image.alt} className="carousel-image" />
            <button className="carousel-button w-10/12 font-semibold shadow-md">{image.buttonText}</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CarouselBase;
