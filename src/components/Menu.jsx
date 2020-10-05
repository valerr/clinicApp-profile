import React from 'react';

const Menu = () => (
    <>
        <div className="sidebar-heading">Логотип</div>
        <div className="list-group list-group-flush mt-4">
          <button className="list-group-item list-group-item-action bg-blue text-white"><img alt="profile" src="./images/profile.svg" />&nbsp;&nbsp;Профиль</button>
          <button className="list-group-item list-group-item-action bg-blue text-white"><img alt="profile" src="./images/doctors.svg" />&nbsp;&nbsp;Врачи и клиники</button>
          <button className="list-group-item list-group-item-action bg-blue text-white"><img alt="profile" src="./images/messages.svg" />&nbsp;&nbsp;Сообщения</button>
          <button className="list-group-item list-group-item-action bg-blue text-white"><img alt="profile" src="./images/test.svg" />&nbsp;&nbsp;Тестирование</button>
          <button className="list-group-item list-group-item-action bg-blue text-white"><img alt="profile" src="./images/note.svg" />&nbsp;&nbsp;Полезно знать</button>
          <button className="btn btn-primary w-75 mx-auto mt-3">Подать заявку</button>
          
        </div>
        
    </>
)

export default Menu;