import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { cancelAppointment } from '../../actions';

const AppointmentCard = ({ item }) => {
  const [modal, setModal] = useState({ type: null, id: null });
  const hideModal = () => setModal({ type: null });
  const dispatch = useDispatch();

  const handleCancel = (id) => {
    dispatch(cancelAppointment({ id }));
  };

  const renderModal = () => {
    if (modal.type === null) return null;
    return (
      <div className="modal d-block text-left">
        <section className="modal-main rounded">
          <div className="m-3 pl-3">
            <h4 className="d-inline mr-5 mt-2">Отменить запись?</h4>
            <button type="button" onClick={hideModal} className="close">x</button>
            <br />
            <div className="d-flex justify-content-around mt-5">
              <button
                onClick={() => {
                  handleCancel(modal.id);
                  setModal({ type: null });
                }}
                className="btn btn-primary"
                type="submit"
              >
                Да
              </button>
              <button onClick={hideModal} className="btn btn-primary" type="submit">Нет</button>
            </div>
          </div>
        </section>
      </div>
    );
  };

  return (
    <div className="card m-1" key={item.id}>
      {renderModal()}
      <div className="card-body">
        <h5 className="card-title font-weight-bold">{item.dateHuman}</h5>
        <p className="card-text">{item.address}</p>
        <div className="d-flex justify-content-between">
          <div className="d-flex flex-row">
            <img alt="doctorPhoto" src={`${item.doctor.imgUrl}`} />
            <div className="ml-2 d-inline-block my-auto">
              <p className="m-0 font-weight-bold">{item.doctor.name}</p>
              <span className="text-muted">{item.doctor.specialty}</span>
            </div>
          </div>
          <button
            onClick={() => setModal({ type: 'remove', id: item.id })}
            type="button"
            className="btn btn-violet h-25 my-auto"
          >
            Отменить
          </button>
        </div>
      </div>
    </div>
  );
};

export default AppointmentCard;
