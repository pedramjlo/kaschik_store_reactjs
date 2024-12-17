import React from 'react';

import Header from './header/Header';
import CarouselBase from './hero/CarouselBase';
import GradiantText from './hero/GradiantText';
import Catalogue from './hero/Catalogue';


const  Home = () =>  {
    return(
        <div className='pb-10 flex flex-col'>
            <Header />
            <CarouselBase />
            <GradiantText />
            <Catalogue />


        </div>
    );
};


export default Home;