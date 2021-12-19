import React from 'react';
import './Service.css';

const Service = ({ service }) => {
    const { name, image, serviceId } = service;

    return (
        <div className="singleService">
            <div className="card image-container" id={serviceId}>
                <img src={image} className="card-img-top img-fluid" alt="..." />
                <div className="card-body">
                    <p className="card-title">{name}</p>
                </div>
            </div>
        </div>
    );
};

export default Service;