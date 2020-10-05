import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Calendar from 'react-calendar';
import Sidebar from '../Sidebar';
import Navbar from '../Navbar';
import 'react-calendar/dist/Calendar.css';
import AppointmentCard from './AppointmentCard';

const Appointments = () => {
  const appointments = useSelector((state) => state.appointments);

  const groupByDay = (appData) => {
    const result = new Map();
    appData.forEach((item) => {
      const dateWithTime = new Date(0);
      dateWithTime.setUTCSeconds(item.timestamp);
      const dateWithoutTime = new Date(
        dateWithTime.getFullYear(), dateWithTime.getMonth(), dateWithTime.getDate(),
      );
      const timestamp = dateWithoutTime.getTime();
      if (!result.has(timestamp)) {
        result.set(timestamp, [item]);
      } else {
        result.get(timestamp).push(item);
      }
    });
    return result;
  };

  const grouped = groupByDay(appointments);
  const [value, setValue] = useState(null);

  const filterAppointments = () => {
    if (value === null) {
      return appointments.map((app) => <AppointmentCard item={app} key={app.id} />);
    }
    const filtered = grouped.get((new Date(value)).getTime());
    return filtered
      ? [...filtered].map((app) => <AppointmentCard item={app} key={app.id} />) : null;
  };

  return (
    <>
      <div className="d-flex" id="wrapper">
        <div className="bg-blue border-right text-white" id="sidebar-wrapper">
          <Sidebar />
        </div>
        <div id="page-content-wrapper" className="bg-light">
          <Navbar />
          <div className="mt-3">
            <h4 className="ml-4">
              <Link to="/"><img alt="back" src="./images/back.svg" /></Link>
              &nbsp;Мои записи
            </h4>
            <div className="d-block w-50 text-right">
              { value !== null
              && (
              <button
                type="button"
                className="btn btn-link"
                onClick={() => {
                  setValue(null);
                }}
              >
                Показать все записи
              </button>
              )}
            </div>
            <div className="container-fluid row">
              <div className="filtered col-6 mt-3 overflow-auto" style={{ maxHeight: '800px' }}>
                {filterAppointments(appointments)}
              </div>
              <div className="col">
                <Calendar
                  onChange={setValue}
                  value={value}
                  onClickDay={() => setValue(value)}
                  grouped={grouped}
                  tileContent={({ date }) => grouped.has(date.getTime()) && <span className="badge bg-light-blue rounded-circle">{grouped.get(date.getTime()).length}</span>}
                  className="mx-auto rounded"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Appointments;
