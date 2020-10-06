import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { changeCurrentMenu } from '../actions';

const Sidebar = () => {
  const dispatch = useDispatch();
  return (
    <>
      <div className="sidebar-heading">Логотип</div>
      <div className="list-group list-group-flush mt-1">
        <Link to="/" onClick={() => dispatch(changeCurrentMenu('profile'))} className="list-group-item list-group-item-action bg-blue text-white">
          <img alt="profile" src="./images/profile.svg" />
          &nbsp;&nbsp;Профиль
        </Link>
        <Link to="/" onClick={() => dispatch(changeCurrentMenu('doctors'))} className="list-group-item list-group-item-action bg-blue text-white">
          <img alt="doctors" src="./images/doctors.svg" />
          &nbsp;&nbsp;Врачи и клиники
        </Link>
        <Link to="/" onClick={() => dispatch(changeCurrentMenu('messages'))} className="list-group-item list-group-item-action bg-blue text-white">
          <img alt="messages" src="./images/messages.svg" />
          &nbsp;&nbsp;Сообщения
        </Link>
        <Link to="/" onClick={() => dispatch(changeCurrentMenu('testing'))} className="list-group-item list-group-item-action bg-blue text-white">
          <img alt="test" src="./images/test.svg" />
          &nbsp;&nbsp;Тестирование
        </Link>
        <Link to="/" onClick={() => dispatch(changeCurrentMenu('note'))} className="list-group-item list-group-item-action bg-blue text-white">
          <img alt="note" src="./images/note.svg" />
          &nbsp;&nbsp;Полезно знать
        </Link>
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
};

export default Sidebar;
