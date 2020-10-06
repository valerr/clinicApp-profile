import React from 'react';
import { useSelector } from 'react-redux';
import Sidebar from './Sidebar';
import Navbar from './Navbar';
import Profile from './Profile';

const Home = () => {
  const currentMenu = useSelector((state) => state.currentMenu);
  return (
    <div className="d-flex" id="wrapper">
      <div className="bg-blue border-right text-white" id="sidebar-wrapper">
        <Sidebar />
      </div>
      <div id="page-content-wrapper" className="bg-light">
        <Navbar />
        {currentMenu === 'profile'
        && <Profile />}
      </div>
    </div>
  );
};

export default Home;
