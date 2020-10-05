import React from 'react';

const Sidebar = () => (
  <>
    <div className="sidebar-heading">Логотип</div>
    <div className="list-group list-group-flush mt-1">
      <button className="list-group-item list-group-item-action bg-blue text-white" type="button">
        <img alt="profile" src="./images/profile.svg" />
        &nbsp;&nbsp;Профиль
      </button>
      <button className="list-group-item list-group-item-action bg-blue text-white" type="button">
        <img alt="profile" src="./images/doctors.svg" />
        &nbsp;&nbsp;Врачи и клиники
      </button>
      <button className="list-group-item list-group-item-action bg-blue text-white" type="button">
        <img alt="profile" src="./images/messages.svg" />
        &nbsp;&nbsp;Сообщения
      </button>
      <button className="list-group-item list-group-item-action bg-blue text-white" type="button">
        <img alt="profile" src="./images/test.svg" />
        &nbsp;&nbsp;Тестирование
      </button>
      <button className="list-group-item list-group-item-action bg-blue text-white" type="button">
        <img alt="profile" src="./images/note.svg" />
        &nbsp;&nbsp;Полезно знать
      </button>
      <button className="btn btn-violet w-75 mx-auto mt-3" type="button">Подать заявку</button>
    </div>
    <div className="fixed-bottom m-4">
      <img alt="help" src="./images/help.svg" />
      <span>&nbsp;Помощь</span>
      <br />
      <img alt="logo" className="mt-3" src="./images/logo.png" />
    </div>
  </>
);

export default Sidebar;
