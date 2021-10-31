import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';
import './Services.css';

const Services = () => {
    const [services, setServices] = useState([]);

    const [searchText, setSearchText] = useState("");



    useEffect(() => {
        if (searchText !== "") {
            let filter_data = services.filter(obj => obj.name.includes(searchText));
            setServices(filter_data)
        } else {
            fetch('https://travely222.herokuapp.com/services')
                .then(res => res.json())
                .then(data => setServices(data));
        }
    }, [searchText])



    const handleChange = (e) => {
        // const searchText = e.target.value;
        setSearchText(e.target.value);
    };


    return (
        <div id="services">

            <div className="course-container p-3 m-5">

                <div className="srarch-box ">
                    <input onChange={handleChange} type="text" className="p-2" placeholder="enter package name" />
                    <button className="btn btn-danger m-3">Search</button>
                </div>
            </div>
            <h2 className="text-primary mt-5">Our Travel Packages</h2>
            <div className="service-container">
                {
                    services.map(service => <Service
                        key={service.key}
                        service={service}
                    ></Service>)
                }
            </div>
        </div>
    );
};

export default Services;
