import React from 'react';

export const DetailInfoBar = ({ selectedTableLine }) => {
  console.log("selectedTableLine", selectedTableLine);
  return (
    <div
      className="detail-info flex flex-column justify-around"
    >
      <p
        className="detail-info__full-name"
      >
        <span
          className="title"
        >
          Имя Фамилия:
        </span>
        <span className="">
          {selectedTableLine.SELECTED_FIRSTNAME}
        </span>
        <span>
          {selectedTableLine.SELECTED_LASTNAME}
        </span>
      </p>
      <p
        className="detail-info__description"
      >
        <span
          className="title"
        >
          Описание:
        </span>
          {selectedTableLine.SELECTED_DESCRIPTION}
      </p>
      <p
        className="detail-info__address"
      >
        <p>
          <span
            className="title"
          >
            Адрес проживания:
          </span>
          <span>{selectedTableLine.address.SELECTED_STREET_ADRESS}</span>
        </p>
        <p>
          <span
            className="title"
          >
            Город: 
          </span>
          <span>{selectedTableLine.address.SELECTED_CITY}</span>
        </p>
        <p>
          <span
            className="title"
          >
            Провинция/штат:
          </span>
          <span>{selectedTableLine.address.SELECTED_STATE}</span>
        </p>
        <p>
          <span
            className="title"
          >
          Индекс:
          </span>
          <span>{selectedTableLine.address.SELECTED_ZIP}</span>
        </p>
      </p>
    </div>
  )
}
