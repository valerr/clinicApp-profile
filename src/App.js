import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Menu from './components/Menu';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import { getNodeText } from '@testing-library/react';
import Appointments from './components/Appointments';
import Home from './components/Home';

function App() {
  return (
    <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path='/appointments' component={Appointments}/>
          <Redirect to="/"/>
        </Switch>
    </Router>
  )
}

export default App;
