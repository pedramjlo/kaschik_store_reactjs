import React from 'react';

import HamburgerMenu from './HamMenu';





const Header = () =>  {
    return(
        <div className='flex'>

            

            <HamburgerMenu />

            <div>
                <span>KASCHIK</span>
            </div>

        </div>
    );
};


export default Header;