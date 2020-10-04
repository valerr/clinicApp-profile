import React, { useState } from 'react';
import Menu from './Menu';
import Navbar from './Navbar';
import { useSelector } from 'react-redux';
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css';
import { Link } from 'react-router-dom';

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
  const [filtered, setFiltered] = useState([appointments[0]]);

  const filterAppointments = (day) => {
      setFiltered(grouped.get(day.getTime()))
  }

  const renderAppointment = (item) => (
    <div className="card mb-2" key={`${item.id}app`}>
      <div className="card-body">
        <h5 className="card-title font-weight-bold">{item.dateHuman}</h5>
          <p className="card-text">{item.address}</p>
            <div className="d-flex flex-row">
              <img alt="profile" src={`${item.doctor.imgUrl}`} />
                <div className="ml-2 d-inline-block my-auto"><p className="m-0 font-weight-bold">{item.doctor.name}</p>
                  <span className="text-muted">{item.doctor.specialty}</span>
                </div>
            </div>
      </div>
    </div>
  )
        
    return (
      <>
        <div className="d-flex" id="wrapper">
          <div className="bg-blue border-right text-white" id="sidebar-wrapper">
              <Menu />
          </div>
          <div id="page-content-wrapper" className="bg-light">
            <Navbar />
            <div className="mt-3">
            <h4 className="ml-4"><Link to='/'><img alt="back" src='./images/back.svg' /></Link>&nbsp;Мои записи</h4>
              <div className="container-fluid row">
              <div className="filtered col-6 mt-3 overflow-auto" style={{maxHeight: '800px'}}>
                {filtered && filtered.map((item) => renderAppointment(item))}
              </div>
                <div className="col">
                  <Calendar 
                  onChange={onChange} 
                  value={value} 
                  onClickDay={(value) => filterAppointments(value)} 
                  grouped={grouped}
                  tileContent={({ date, view }) => grouped.has(date.getTime()) && <span className="badge bg-light-blue rounded-circle">{grouped.get(date.getTime()).length}</span>}
                  className="mx-auto rounded"
                  >
                  </Calendar>
                  </div>
                </div>
            </div>
          </div>
      </div>
    </>
    )
};

export default Appointments;