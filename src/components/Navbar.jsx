import React from 'react';

const Navbar = () => {
      return (
        <>
          <nav className="navbar navbar-expand-lg navbar-light bg-light-blue border-bottom p-0">
            <h3 className="text-white pl-4">Мой профиль</h3>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav ml-auto mt-lg-0">
                <li className="nav-item pt-2">
                  <a className="nav-link" href="#"><img alt="profile" src="./images/search.svg"/></a>
                </li>
                <li className="nav-item pt-2">
                  <a className="nav-link" href="#"><img alt="profile" src="./images/notifications.svg"/></a>
                </li>
                <li className="nav-item pt-2">
                  <a className="nav-link" href="#"><img alt="profile" src="./images/eye.svg"/></a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#"><img alt="profile" src="./images/profilePhoto.png"/></a>
                </li>
                <li className="nav-item dropdown pt-2">
                  <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    <img alt="profile" src="./images/dropdown.svg"/>
                    Dropdown
                  </a>
                  <div className="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdown">
                    <a className="dropdown-item" href="#">Action</a>
                    <a className="dropdown-item" href="#">Another action</a>
                    <div className="dropdown-divider"></div>
                    <a className="dropdown-item" href="#">Something else here</a>
                  </div>
                </li>
              </ul>
            </div>
          </nav>
        </>
      );
  }

    export default Navbar;