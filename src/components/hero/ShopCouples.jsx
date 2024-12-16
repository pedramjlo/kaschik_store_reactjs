import React from 'react';

import Couples from '../../static/images/bailey-alexander-Ms2AGDRcOLo-unsplash.jpg';


const ShopCouplesImage = () => {
    return(
      <div>

        <img 
            src={Couples} 
            alt="Couple model" 
        />

        <button>
            Shop Couples
        </button>

      </div>  
    );
};

export default ShopCouplesImage;
