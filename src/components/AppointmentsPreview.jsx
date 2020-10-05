import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const AppointmentsPreview = () => {
    const appointments = useSelector((state) => state.appointments);
    const first = appointments.slice(0, 2);
    const rest = appointments.length-2;

    return (
        <>
            <h4 className="m-3 ml-4">Записи на прием</h4>
            <div className="p-1">
                <div className="d-flex">
                    {first.map((item) => (
                        <div className="card w-50 m-3" key={item.id}>
                            <div className="card-body">
                                <h5 className="card-title font-weight-bold">{item.dateHuman}</h5>
                                <p className="card-text">{item.address}</p>
                                <div className="d-flex flex-row">
                                    <img alt="profile" src={`${item.doctor.imgUrl}`} />
                                    <div className="ml-2 d-inline-block my-auto"><p className="m-0 font-weight-bold">{item.doctor.name}</p>
                                        <span className="text-muted">{item.doctor.specialty}</span>
                                    </div>
                                </div>
                            </div>
                        </div>))}
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