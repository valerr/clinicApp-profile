import { createReducer } from '@reduxjs/toolkit';
import * as actions from '../actions';

const reducer = createReducer({}, {
  [actions.fetchData]: (state, action) => ({
    ...state,
    appointments: [...action.payload],
    currentMenu: 'profile',
  }),
  [actions.cancelAppointment]: (state, action) => {
    const { id } = action.payload;
    const filtered = state.appointments.filter((item) => item.id !== id);
    return {
      appointments: [...filtered],
    };
  },
  [actions.changeCurrentMenu]: (state, action) => ({
    ...state,
    currentMenu: action.payload,
  }),
});

export default reducer;
