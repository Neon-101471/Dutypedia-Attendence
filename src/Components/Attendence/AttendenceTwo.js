import React from 'react';
import { useState, useEffect } from 'react';
import PerAttendence from '../PerAttendence/PerAttendence';
import Service from '../Service/Service';
import './AttendenceTwo.css';

const AttendenceTwo = () => {
    const [services, setServices] = useState([]);

    //Get service collection
    useEffect(() => {
        fetch("./services.json")
            .then(res => res.json())
            .then(data => setServices(data));
    }, []);

    const allDays = ['Saturday', 'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thirsday', 'Friday'];

    return (
        <div className='container bg-light home-container'>
            <section className='home-body'>
                {/* Heading area */}
                <div className='row d-flex align-items-center arrow-sign'>
                    <div className='col-1'> <i className="fas fa-arrow-left"></i> </div>
                    <div className='col-11'><h1 className='my-3'>Rasel Academy</h1></div>
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

                {/* Attendence system area */}
                <div className='attendence-system my-4'>
                    <h4 className='text-start mt-5 ms-2'>Attendence System</h4>
                    <div className="row">
                        <div className='col-4 ms-2 d-flex justify-content-between'>
                            <p><input type="checkbox" name="" id="" className='me-2' checked="checked" /> Point</p>
                            <p><input type="checkbox" name="" id="" className='me-2' /> Percent</p>
                            <p><input type="checkbox" name="" id="" className='me-2' checked="checked" /> Fine</p>
                        </div>
                    </div>
                </div>

                {/* Attendence date */}
                <div className='row'>
                    <div className="col-md-6 d-flex justify-content-between align-items-center text-start attendence-date">
                        <div className="row">
                        <div className='col-md-6'>
                            <p className='ms-2'>Attendence Starting Date</p>
                            <div className='attendence-span ms-2'>
                                <input type="text" name="" className='rounded-start' placeholder='Saturday 15th August 2021' id="" /> <span className='d-flex justify-content-center align-items-center'><i className="far fa-calendar-alt"></i></span>
                            </div>
                        </div>
                        <div className='col-md-6'>
                            <p className='ms-2'>Attendence Ending Date</p>
                            <div className='attendence-span ms-2'>
                                <input type="text" name="" className='rounded-start' placeholder='Saturday 15th August 2021' id="" /> <span className='d-flex justify-content-center align-items-center'><i className="far fa-calendar-alt"></i></span>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>

                {/* Select per day attendence */}
                <div className='mt-4'>
                    <h5 className='ms-2 text-start mb-3'>Select How Many Attendence Per Day</h5>
                    <div className='row attendence-counter text-start ms-2'>
                        <div className='col-md-4'>
                            {
                                allDays.map(Day => <PerAttendence
                                    Day={Day}
                                ></PerAttendence>)
                            }
                        </div>
                        <div className='col-md-8'></div>
                    </div>
                </div>

                {/* Button area */}
                <div className='row mt-5 mb-4'>
                    <div className='col-md-2'></div>
                    <div className='col-md-4 text-end d-flex justify-content-end'>
                        <button className='create-btn me-2'>Next</button>
                        <button className='cancel-btn ms-2'>Cancel</button>
                    </div>
                    <div className='col-md-6'></div>
                </div>
            </section>
        </div>
    );
};

export default AttendenceTwo;