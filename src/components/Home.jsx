import React from 'react';
import Sidebar from './Sidebar';
import Navbar from './Navbar';
import AppointmentsPreview from './Appointments/AppointmentsPreview';
import MedicalRecords from './MedicalRecords';

const Home = () => (
    <div className="d-flex" id="wrapper">
        <div className="bg-blue border-right text-white" id="sidebar-wrapper">
            <Sidebar />
        </div>
        <div id="page-content-wrapper" className="bg-light">
            <Navbar />
            <div className="container-fluid">
                <AppointmentsPreview />
            </div>
            <div className="container-fluid">
               <MedicalRecords />
            </div>
        </div>
    </div>
);

export default Home;
