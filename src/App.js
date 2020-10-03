import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Menu from './Menu';
import Navbar from './Navbar';

function App() {

  return (
    <div className="App">
       <div class="d-flex" id="wrapper">
       <div class="bg-blue border-right text-white" id="sidebar-wrapper"><Menu /></div>
       <div id="page-content-wrapper"><Navbar /></div>
      </div>
    </div>
  );
}

export default App;
