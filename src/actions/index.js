import { createAction } from '@reduxjs/toolkit';

export const fetchData = createAction('fetchData');

// here should be a request. e.g.:
// export const cancelAppointment = (appointmentId) => async () => {
//    const path = routes.appointmentPath(appointmentId);
//    await axios.delete(path);
//  };

// if server responds 200/204 reducer updates state

export const cancelAppointment = createAction('cancelAppointment');

export const changeCurrentMenu = createAction('changeCurrentMenu');
