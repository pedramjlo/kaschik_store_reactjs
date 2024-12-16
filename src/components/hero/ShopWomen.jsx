import React from 'react';

import WomanModel from '../../static/images/jennifer-marquez-NYMDlpfum1Q-unsplash.jpg'


const ShopWomenImage = () => {
    return(
      <div>

        <img 
            src={WomanModel} 
            alt="Woman model" 
        />

        <button>
            Shop Women
        </button>

      </div>  
    );
};

export default ShopWomenImage;
