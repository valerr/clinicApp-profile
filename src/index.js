import './custom.scss'
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import init from './index.jsx';
import appointmentsData from './appointmentsData';

init(appointmentsData);

serviceWorker.unregister();
