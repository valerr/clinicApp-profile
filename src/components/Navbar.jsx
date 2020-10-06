/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';

const Navbar = () => (
  <>
    <nav className="navbar navbar-expand-lg navbar-light bg-light-blue border-bottom p-0">
      <h3 className="text-white pl-4">Мой профиль</h3>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ml-auto mt-lg-0">
          <li className="nav-item pt-2">
            <a className="nav-link" href="#"><img alt="search" src="./images/search.svg" /></a>
          </li>
          <li className="nav-item pt-2">
            <a className="nav-link" href="#"><img alt="notifications" src="./images/notifications.svg" /></a>
          </li>
          <li className="nav-item pt-2">
            <a className="nav-link" href="#"><img alt="eye" src="./images/eye.svg" /></a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#"><img alt="profilePhoto" src="./images/profilePhoto.png" /></a>
          </li>
          <li className="nav-item dropdown pt-2">
            <a className="nav-link" href="#"><img alt="dropdown" src="./images/dropdown.svg" /></a>
          </li>
        </ul>
      </div>
    </nav>
  </>
);

export default Navbar;
