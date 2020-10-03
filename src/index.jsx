import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import reducer from './reducers';
import {
    fetchData,
  } from './actions';

  import App from './App';

const init = (appointmentsData) => {
    const store = configureStore({
        reducer,
        devTools: process.env.NODE_ENV !== 'production',
      });

      store.dispatch(fetchData(appointmentsData));

      ReactDOM.render(
        <Provider store={store}>
          <App />
        </Provider>,
        document.getElementById('root')
    );
}

export default init;