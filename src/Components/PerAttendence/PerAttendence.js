import React, { useState } from 'react';
import './PerAttendence.css';

const PerAttendence = ({ Day }) => {
    const [count, setCount] = useState(1);
    const [isActive, setActive] = useState(false);

    const handleSelect = event => {
        setActive(!isActive);
    }

    const handleIncrease = event => {
        const newCount = count + 1;
        setCount(newCount);
        event.preventDefault();
    }

    const handleDecrease = event => {
        if (count > 0) {
            const newCount = count - 1;
            setCount(newCount);
            event.preventDefault();
        }
    }

    return (
        <div className={isActive ? null : 'disabled-button'}>
            <div className='me-2 my-4 d-flex align-items-center justify-content-between'>
                <div>
                    <input className='me-2' type="checkbox" name="" id="" onClick={handleSelect} /> <span className='every-day'>{Day}</span>
                </div>
                <div className='per-attendence-span rounded ms-2'>
                    <div className='time-counter d-flex justify-content-center align-items-center'><span>{count}</span> Time</div>
                    <div className='upDown-arrow d-flex justify-content-center align-items-center'>
                        <i className="fas fa-chevron-up up-arrow" onClick={handleIncrease}></i>
                        <hr />
                        <i className="fas fa-chevron-down down-arrow" onClick={handleDecrease}></i>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PerAttendence;