import React from 'react';
import {
  BrowserRouter as Router, Switch, Route, Redirect,
} from 'react-router-dom';
import Appointments from './components/Appointments/Appointments';
import Home from './components/Home';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/appointments" component={Appointments} />
        <Redirect to="/" />
      </Switch>
    </Router>
  );
}

export default App;
