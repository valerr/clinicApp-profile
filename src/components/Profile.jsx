import React from 'react';
import AppointmentsPreview from './Appointments/AppointmentsPreview';
import MedicalRecords from './MedicalRecords';

const Profile = () => (
  <>
    <div className="container-fluid">
      <AppointmentsPreview />
    </div>
    <div className="container-fluid">
      <MedicalRecords />
    </div>
  </>
);

export default Profile;
