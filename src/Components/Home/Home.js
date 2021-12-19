import React, { useState } from 'react';
import { useEffect } from 'react';
import AttendenceOne from '../Attendence/AttendenceOne';
import Service from '../Service/Service';
import './Home.css';

const Home = () => {
    const [services, setServices] = useState([]);
    const [attendence, setAttendence] = useState([]);

    //Get service collection
    useEffect(() => {
        fetch("./services.json")
            .then(res => res.json())
            .then(data => setServices(data));
    }, []);

    //Get attendence collection
    useEffect(() => {
        fetch("./attendence.json")
            .then(res => res.json())
            .then(data => setAttendence(data))
    }, []);

    return (
        <div className='container bg-light home-container'>
            <section className='home-body'>
                {/* Heading area */}
                <div className='row d-flex align-items-center arrow-sign'>
                    <div className='col-1'> <i className="fas fa-arrow-left"></i> </div>
                    <div className='col-11'><h1 className='my-3 rasel-academy'>Rasel Academy</h1></div>
                </div>

                {/* Service collection area */}
                <div className="row row-cols-1 row-cols-md-4 g-3 my-2">
                    {
                        services.map(service => <Service
                            key={service.id}
                            service={service}
                        />)
                    }
                </div>

                {/* Attendence area */}
                <div className='attendence-container mt-5'>
                    {
                        attendence.map(attendence => <AttendenceOne
                            key={attendence.id}
                            attendence={attendence}
                        ></AttendenceOne>)
                    }
                </div>

                {/* Button area */}
                <div className='row mt-5 mb-4'>
                    <div className='col-3'></div>
                    <div className='col-7 d-flex justify-content-end'>
                        <button className='create-btn me-2'>Create Now</button>
                        <button className='cancel-btn ms-2'>Cancel</button>
                    </div>
                    <div className='col-2'></div>
                </div>
            </section>
        </div>
    );
};

export default Home;