import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import axios from 'axios';
import { useHistory } from 'react-router-dom'
import { useForm } from "react-hook-form";
import './Booking.css';
import useAuth from './../../../hooks/useAuth';

const Booking = () => {
    const { serviceId } = useParams();
    const { user } = useAuth();
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const history = useHistory()

    const onSubmit = data => {
        data = { ...data, package: service.name }
        axios.post('http://localhost:5000/booking', data)
            .then(res => {

                if (res.data) {
                    history.push('/mylist')
                }
                // console.log(res);
            })
    }
    const [service, setService] = useState({})
    const [services, setServices] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/services')
            .then(res => res.json())
            .then(data => setServices(data));
    }, [])

    useEffect(() => {
        if (services.length > 0) {
            console.log(services, serviceId)
            const data = services.find((obj) => obj._id === serviceId)
            console.log(data);
            setService(data)
        }

    }, [services])
    return (<>
        <div className="row">
            <div className="col-md-6">
                <h2>this is booking: {service?._id}</h2>
                <p className="font-weight-bold">Description:{service?.description}</p>
                <img style={{ width: "120px", height: "120px" }} src={service?.img} alt="" />
                <p> Fee:{service?.fee}</p>
            </div>
            <div className="col-md-6 addservice">
                <br /><br />
                <h5>Package booking</h5>
                <form onSubmit={handleSubmit(onSubmit)}>
                    {/* register your input into the hook by invoking the "register" function */}
                    <input type='text' defaultValue={user.displayName} {...register("name")} placeholder="name" />
                    <input type='text' defaultValue={user.email} {...register("email")} placeholder="email" />
                    <input type='text' value={service?.name} {...register("package")} placeholder="package name" />

                    <input type="text" {...register("address", { required: true })} placeholder="address" />
                    <input type="text" {...register("phn", { required: true })} placeholder="contact" />



                    <input type="submit" />
                </form>


                {/* <form >
                    <div className="col-4">

                    </div>

                </form> */}
            </div>


        </div>

        <br /> <br /> <br />
        <br /> <br /> <br />

        <br /> <br /> <br />

    </>
    );
};

export default Booking;