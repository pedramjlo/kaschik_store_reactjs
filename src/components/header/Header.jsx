import React from 'react';

import HamburgerMenu from './HamMenu';
import ShoppingCart from './ShoppingCart';




const Header = () =>  {
    return(
        <div className='m-0 py-5 flex justify-evenly  align-middle items-center gap-16'>

            <HamburgerMenu />

            <div>
                <a href="/"><span className='text-xl font-bold'>KASCHIK</span></a>
            </div>

            <ShoppingCart />

        </div>
    );
};


export default Header;