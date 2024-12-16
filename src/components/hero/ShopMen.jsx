import React from 'react';

import ManModel from '../../static/images/hunters-race-MYbhN8KaaEc-unsplash.jpg'


const ShopMenImage = () => {
    return(
      <div>

        <img 
            src={ManModel} 
            alt="Man model" 
        />

        <button>
            Shop Men
        </button>

      </div>  
    );
};

export default ShopMenImage;
