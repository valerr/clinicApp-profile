import React, { useState } from 'react';

const Menu = () => (
    <>
        <div class="sidebar-heading">Логотип</div>
        <div class="list-group list-group-flush mt-4">
          <a href="#" class="list-group-item list-group-item-action bg-blue text-white"><img alt="profile" src="./images/profile.svg" />&nbsp;&nbsp;Профиль</a>
          <a href="#" class="list-group-item list-group-item-action bg-blue text-white"><img alt="profile" src="./images/doctors.svg" />&nbsp;&nbsp;Врачи и клиники</a>
          <a href="#" class="list-group-item list-group-item-action bg-blue text-white"><img alt="profile" src="./images/messages.svg" />&nbsp;&nbsp;Сообщения</a>
          <a href="#" class="list-group-item list-group-item-action bg-blue text-white"><img alt="profile" src="./images/test.svg" />&nbsp;&nbsp;Тестирование</a>
          <a href="#" class="list-group-item list-group-item-action bg-blue text-white"><img alt="profile" src="./images/note.svg" />&nbsp;&nbsp;Полезно знать</a>
          <button href="#" class="btn btn-primary w-75 mx-auto mt-3">Подать заявку</button>
          
        </div>
        
    </>
)

export default Menu;