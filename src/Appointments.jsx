import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { fetchData } from './actions';

const Appointments = () => {
    const appointments = useSelector((state) => state.appointments);

    return (
        <div>
            <h2 class="mt-3">Записи на прием</h2>
            <div class="d-flex">
                
                    {appointments.map((item) => (
                        
                <div class="card w-75 m-3" key={item.id}>
                    <div class="card-body">
                        <h5 class="card-title">{item.date}</h5>
                        <p class="card-text">{item.address}</p>
                        <span>{item.doctor}</span>
                        <span>{item.doctorType}</span>
                    </div>
                </div>))}
                </div>
                <div>
                    
                </div>
        </div>
    )
}

export default Appointments;