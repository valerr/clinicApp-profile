import React, { useState } from 'react';
import AppointmentsPreview from './AppointmentsPreview';

const Navbar = () => {
    const [currentMenu, setCurrentMenu] = useState('profile');
return (
<>
        <nav class="navbar navbar-expand-lg navbar-light bg-light-blue border-bottom">
          <h2 class="text-white">Мой профиль</h2>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav ml-auto mt-lg-0">
              <li class="nav-item pt-2">
                <a class="nav-link" href="#"><img alt="profile" src="./images/search.svg"/></a>
              </li>
              <li class="nav-item pt-2">
                <a class="nav-link" href="#"><img alt="profile" src="./images/notifications.svg"/></a>
              </li>
              <li class="nav-item pt-2">
                <a class="nav-link" href="#"><img alt="profile" src="./images/eye.svg"/></a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#"><img alt="profile" src="./images/profilePhoto.png"/></a>
              </li>
              <li class="nav-item dropdown pt-2">
                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  <img alt="profile" src="./images/dropdown.svg"/>
                  Dropdown
                </a>
                <div class="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdown">
                  <a class="dropdown-item" href="#">Action</a>
                  <a class="dropdown-item" href="#">Another action</a>
                  <div class="dropdown-divider"></div>
                  <a class="dropdown-item" href="#">Something else here</a>
                </div>
              </li>
            </ul>
          </div>
        </nav>
    </>
    );
}

    export default Navbar;