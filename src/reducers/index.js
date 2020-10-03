import { createReducer } from '@reduxjs/toolkit';
import * as actions from '../actions';

const reducer = createReducer({}, {
  [actions.fetchData]: (state, action) => {
    const { appointmentsData } = action.payload;
    return {
      ...state,
    appointments: [...action.payload],
    };
  },
});

export default reducer;