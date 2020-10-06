import './custom.scss';
import * as serviceWorker from './serviceWorker';
import init from './index.jsx';
import appointmentsData from './appointmentsData';

init(appointmentsData);

serviceWorker.unregister();
