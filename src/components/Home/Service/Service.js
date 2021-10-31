import React from 'react';
import { Link } from 'react-router-dom';
import './Service.css';

const Service = ({ service }) => {

    const { _id, name, fee, description, img } = service;
    return (
        <div className="service pb-3">
            <img src={img} alt="" />
            <h3>{name}</h3>
            <h6>Price:${fee}/per person</h6>
            <p className="px-3">{description}</p>
            <Link to={`/booking/${_id}`}>
                <button className=" btn btn-dark">Book now</button>
            </Link>
        </div>
    );
};

export default Service;