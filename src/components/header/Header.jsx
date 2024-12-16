import React, { useState, useEffect } from 'react';

import HamburgerMenu from './HamMenu';
import ShoppingCart from './ShoppingCart';
import CategoriesBar from './CategoriesBar';




const Header = () =>  {
    return(
        <div >

            <div className='m-0 py-5 flex justify-evenly  align-middle items-center gap-16'>
                <HamburgerMenu />
                <div>
                    <a href="/"><span className='text-xl font-bold'>KASCHIK</span></a>
                </div>
                <ShoppingCart />
            </div>


            <div>
                <CategoriesBar />
            </div>

        </div>
    );
};


export default Header;