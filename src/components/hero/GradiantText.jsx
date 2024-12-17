import React from 'react';



const GradiantText = () => {
    return(
        <div className='my-5 py-2 min-w-full h-56 gradiant-text flex flex-col justify-center text-center gap-10'>
            
            <div>
                <p className='text-2xl font-bold'>We Sell Art</p>
            </div>

            <div className='px-2 flex flex-col gap-2'>
                <p>and <b>yes</b>, it can be bought...</p>
                <p>and <b>no</b>, it is not for everyone...</p>
                <p>but, there is always something for <b>you</b>.</p>
            </div>

        </div>
    )
};


export default GradiantText;