import React from 'react';


import exotic1 from '../../../images/exotic/exotic-1.jpg'
import exotic2 from '../../../images/exotic/exotic-2.jpg';
import exotic3 from '../../../images/exotic/exotic-3.jpg';
import exotic4 from '../../../images/exotic/exotic-4.jpg';
import exotic5 from '../../../images/exotic/exotic-5.jpg';



import Exotic from '../Exotic/Exotic';




const exoticplaces = [
    {
        img: exotic1,
        name: 'Spain',
        rating: 5.0
    },
    {
        img: exotic2,
        name: 'Italy',
        rating: 4.5
    },
    {
        img: exotic3,
        name: 'France',
        rating: 4.8
    },
    {
        img: exotic4,
        name: 'Switzerland',
        rating: '4.9'
    },
    {
        img: exotic5,
        name: 'Bulgeria',
        rating: 4.9
    }
]

const Exotics = () => {
    return (
        <div id='experts' className="container">
            <h2 className="text-primary mt-5">GO Exotic  Places </h2>
            <div className="row">
                {
                    exoticplaces.map(exoticplace => <Exotic
                        key={exoticplace.name}
                        exoticplace={exoticplace}
                    >

                    </Exotic>)
                }
            </div>
        </div>
    );
};

export default Exotics;