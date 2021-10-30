import React from 'react';

const Exotic = ({ exoticplace }) => {
    const { name, img, rating } = exoticplace;
    return (
        <div className=" doc col-lg-4 col-sm-6 col-12">
            <img className=" img-fluid " style={{ height: "200px" }} src={img} alt="" />
            <h3>{name}</h3>
            <h5 className="text-danger">Rating:{rating}</h5>
        </div>
    );
};

export default Exotic;