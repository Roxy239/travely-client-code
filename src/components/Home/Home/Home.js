import React from 'react';

import Banner from '../Banner/Banner';

import Exotics from '../Exotics/Exotics';

import Services from '../Services/Services';



const Home = () => {
    return (
        <div id='home'>
            <Banner></Banner>

            <Services></Services>
            <Exotics></Exotics>
        </div>
    );
};

export default Home;