import React from 'react';
import "./Service.css"

const Service = ({ service }) => {
    const { name, price, img, description } = service
    return (
        <div className='service-container'>
            <img className='img-fluid' src={img} alt="" />
            <h2>{name}</h2>
            <h5>$ {price}</h5>
            <p>{description}</p>
        </div>
    );
};

export default Service;