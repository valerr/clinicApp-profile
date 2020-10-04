import React from 'react';
import Menu from './Menu';
import Navbar from './Navbar';
import AppointmentsPreview from './AppointmentsPreview';
import MedicalRecords from './MedicalRecords';

const Home = () => (
    <div class="d-flex" id="wrapper">
        <div class="bg-blue border-right text-white" id="sidebar-wrapper">
            <Menu />
        </div>
        <div id="page-content-wrapper" className="bg-light">
            <Navbar />
            <div class="container-fluid" id="main-content">
                <AppointmentsPreview />
            </div>
            <div class="container-fluid" id="main-content">
                {/* <MedicalRecords /> */}
            </div>
        </div>
    </div>
);

export default Home;
