import React from 'react';
import About from '../About/About';
import Banner from '../Banner/Banner';

const Home = () => {
    return (
        <div>
             <hr className='text-white' />
            <Banner></Banner>
            <About></About>
        </div>
    );
};

export default Home;