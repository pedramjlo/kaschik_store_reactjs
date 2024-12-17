import React from 'react';

import Header from './header/Header';
import CarouselBase from './hero/CarouselBase';
import GradiantText from './hero/GradiantText';
import Hottests from './hero/Hottests';


const  Home = () =>  {
    return(
        <div className='pb-10 flex flex-col'>
            <Header />
            <CarouselBase />
            <GradiantText />
            <Hottests />


        </div>
    );
};


export default Home;