import React, { useState } from 'react';
import Menu from './Menu';
import Navbar from './Navbar';
import { useSelector } from 'react-redux';
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css';

const Appointments = () => {
  const appointments = useSelector((state) => state.appointments);

    const groupByDay = (appData) => {
        const result = new Map();
        for (let item of appData) {
          let dateWithTime = new Date(0);
          dateWithTime.setUTCSeconds(item.timestamp)
          const dateWithoutTime = new Date(dateWithTime.getFullYear(), dateWithTime.getMonth(), dateWithTime.getDate());
          const timestamp = dateWithoutTime.getTime()
          if(!result.has(timestamp)) {
            result.set(timestamp, [item])
          } else {
            result.get(timestamp).push(item);
          }
        }
        return result;
      }

  const grouped = groupByDay(appointments)
  const [value, onChange] = useState(new Date());
  const [filtered, setFiltered] = useState();

  const filterAppointments = (day) => {
      setFiltered(grouped.get(day.getTime()))
  }

  const renderAppointment = (item) => (<div>{item.dateHuman} {item.doctor.name}</div>)
        
    return (
    <div class="d-flex" id="wrapper">
        <div class="bg-blue border-right text-white" id="sidebar-wrapper">
            <Menu />
        </div>
        <div id="page-content-wrapper" className="bg-light">
            <Navbar />
            <div class="container-fluid" id="main-content">
                <div class="w-75">
                <Calendar onChange={onChange} value={value} onClickDay={(value) => filterAppointments(value)} grouped={grouped}
                tileContent={({ date, view }) => grouped.has(date.getTime()) && <span className="badge badge-secondary">{grouped.get(date.getTime()).length}</span>}
                >
                </Calendar>
                </div>
            </div>
            <div class="filtered mt-3">
              {filtered && filtered.map((item) => renderAppointment(item))}
            </div>
        </div>
    </div>
    )
};

export default Appointments;