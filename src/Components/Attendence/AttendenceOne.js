import React from 'react';
import './AttendenceOne.css';

const AttendenceOne = ({ attendence }) => {
    const { day } = attendence;
    return (
        <div className="mb-3 text-start">
            <label htmlFor="formGroupExampleInput" className="form-label ps-1 my-1"><h4>{day}</h4></label>
            <div className='row d-flex align-items-center'>
                <div className="col-2 ps-3"><small>1st Attendence Time</small></div>
                {/* Time column/second column */}

                <div className='col-5 time-span'>
                    <input type="text" name="" className='rounded text-center' placeholder='12:15 PM' id="" /> <span className='d-flex justify-content-center align-items-center'><i className="far fa-clock text-white"></i></span>
                </div>
                <div className="col-4 mx-auto single-attendence"><small>Subject Name:</small> <input type="text" className='ms-3' /></div>
                <div className='col-1'></div>
            </div>
        </div>
    );
};

export default AttendenceOne;