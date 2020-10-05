import { createReducer } from '@reduxjs/toolkit';
import * as actions from '../actions';

const reducer = createReducer({}, {
  [actions.fetchData]: (state, action) => {
    return {
      ...state,
    appointments: [...action.payload],
    };
  },
  [actions.cancelAppointment]: (state, action) => {
    const { id } = action.payload;
    const filtered = state.appointments.filter((item) => item.id !== id)
    return {
      appointments: [...filtered],
    }
  }
});

export default reducer;