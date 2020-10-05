import React from 'react';
import { useDispatch } from 'react-redux';
import { cancelAppointment } from '../../actions';

const AppointmentCard = (item) => {
    const dispatch = useDispatch();

    const handleCancel = (id) => {
        dispatch(cancelAppointment({id}));
      }

    return (
        <div className="card m-1" key={item.id}>
          <div className="card-body">
            <h5 className="card-title font-weight-bold">{item.dateHuman}</h5>
              <p className="card-text">{item.address}</p>
                <div className="d-flex justify-content-between">
                  <div className="d-flex flex-row">
                    <img alt="profile" src={`${item.doctor.imgUrl}`} />
                      <div className="ml-2 d-inline-block my-auto"><p className="m-0 font-weight-bold">{item.doctor.name}</p>
                        <span className="text-muted">{item.doctor.specialty}</span>
                      </div>
                    </div>  
                    <button onClick={() => handleCancel(item.id)} className="btn btn-violet h-25 my-auto">Отменить</button>
                
                </div>
          </div>
        </div>
        )
}

export default AppointmentCard;