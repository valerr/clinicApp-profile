import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import AppointmentCard from './AppointmentCard';

const AppointmentsPreview = () => {
    const appointments = useSelector((state) => state.appointments);
    const first = appointments.slice(0, 2);
    const rest = appointments.length-2;

    return (
        <>
            <h4 className="m-3 ml-4">Записи на прием</h4>
            <div className="p-1">
                <div className="d-flex">
                    {first.map((item) => AppointmentCard(item))}
                    {rest && <div>
                        <p className="font-weight-bold pt-5">Еще {rest} записи</p>
                        <Link to='/appointments'>Подробнее</Link>
                    </div>
                    }
            </div>
        </div>
    </>
    )
}

export default AppointmentsPreview;