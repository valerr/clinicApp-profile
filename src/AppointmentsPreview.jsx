import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const AppointmentsPreview = () => {
    const appointments = useSelector((state) => state.appointments);
    const first = appointments.slice(0, 2);
    const rest = appointments.length-2;

    return (
        <div className="p-3">
            <h3 className="mt-3 ml-4">Записи на прием</h3>
            <div className="d-flex">
                {first.map((item) => (
                    <div className="card w-50 m-3 p-3" key={item.id}>
                        <div className="card-body">
                            <h5 className="card-title font-weight-bold">{item.dateHuman}</h5>
                            <p className="card-text">{item.address}</p>
                            <img alt="profile" src={`${item.doctor.imgUrl}`} />
                            <span className="font-weight-bold mb-0 mt-2">{item.doctor.name}<br/>
                            <span className="text-muted">{item.doctor.specialty}</span></span>
                            
                        </div>
                    </div>))}
                {rest && <div>
                    <p class="font-weight-bold pt-5">Еще {rest} записи</p>
                    <Link to='/appointments'>Подробнее</Link>
                </div>
                }
        </div>
    </div>
    )
}

export default AppointmentsPreview;