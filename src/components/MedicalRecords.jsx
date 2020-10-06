import React from 'react';

const MedicalRecords = () => (
  <>
    <h4 className="ml-4 m-3">Электронная карта</h4>
    <div className="row row-cols-1 row-cols-md-2">

      <div className="col mb-4">
        <div className="card mb-3 border-blue">
          <div className="row no-gutters">
            <div className="col-md-4 bg-light-blue d-flex">
              <img src="./images/card.svg" className="card-img h-25 my-auto" alt="card" />
            </div>
            <div className="col-md-8 d-flex">
              <div className="card-body my-auto">
                <h3 className="card-title">Информация о пациенте</h3>
                <hr className="border-blue" />
                <p className="card-text">Ваши личные данные</p>
                <p className="card-text">Рекомендации врачей</p>
                <p className="card-text">История болезней</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="col mb-4">
        <div className="card mb-3">
          <div className="row no-gutters">
            <div className="col-md-4 d-flex">
              <img src="./images/results.svg" className="card-img my-auto h-25" alt="results" />
            </div>
            <div className="col-md-8 d-flex">
              <div className="card-body my-auto">
                <h3 className="card-title">Результаты анализов</h3>
                <hr />
                <p className="card-text">Вы можете узнать здесь результаты своих анализов</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="col mb-4">
        <div className="card mb-3">
          <div className="row no-gutters">
            <div className="col-md-4 d-flex">
              <img src="./images/addinfo.svg" className="card-img my-auto h-25" alt="addinfo" />
            </div>
            <div className="col-md-8 d-flex">
              <div className="card-body my-auto">
                <h3 className="card-title">Добавить информацию</h3>
                <hr />
                <p className="card-text">Добавляйте в свою электронную медицинскую карту новые данные</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="col mb-4">
        <div className="card mb-3">
          <div className="row no-gutters">
            <div className="col-md-4 d-flex">
              <img src="./images/history.svg" className="card-img my-auto h-25" alt="history" />
            </div>
            <div className="col-md-8 d-flex">
              <div className="card-body my-auto">
                <h3 className="card-title">История приемов</h3>
                <hr />
                <p className="card-text">Вся информация о полученных услугах за все время хранится здесь</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </>
);

export default MedicalRecords;
