import React, { useState, useEffect } from 'react';

import { Button } from '../../styleComponent/Button/Button';
import arrowLeft from '../../icon/arrow-left-solid.svg';


export const FormAddLineTable = ({ isOpen = false, formHandler, initialTabLeLine }) => {
  const [ SELECTED_FIRSTNAME, setSELECTED_FIRSTNAME ] = useState("");
  const [ SELECTED_LASTNAME, setSELECTED_LASTNAME ] = useState("");
  const [ SELECTED_EMAIL, setSELECTED_EMAIL ] = useState("");
  const [ SELECTED_PHONE, setSELECTED_PHONE ] = useState("");
  const [ SELECTED_STREET_ADRESS, setSELECTED_STREET_ADRESS ] = useState("");
  const [ SELECTED_CITY, setSELECTED_CITY ] = useState("");
  const [ SELECTED_STATE, setSELECTED_STATE ] = useState("");
  const [ SELECTED_ZIP, setSELECTED_ZIP ] = useState("");
  const [ SELECTED_DESCRIPTION, setSELECTED_DESCRIPTION ] = useState("");
  const [ disabled, setDisabled ] = useState(true);

  useEffect(() => {
    if (!((SELECTED_FIRSTNAME && SELECTED_LASTNAME && SELECTED_EMAIL && SELECTED_PHONE && SELECTED_STREET_ADRESS && SELECTED_CITY && SELECTED_STATE && SELECTED_ZIP && SELECTED_DESCRIPTION) == false)) {
      setDisabled(false);
    }
  },[ SELECTED_FIRSTNAME, SELECTED_LASTNAME, SELECTED_EMAIL, SELECTED_PHONE, SELECTED_STREET_ADRESS, SELECTED_CITY, SELECTED_STATE, SELECTED_ZIP, SELECTED_DESCRIPTION ]);

  const sendForm = async (event) => {
    event.preventDefault();
    const data = {
      SELECTED_FIRSTNAME,
      SELECTED_LASTNAME,
      SELECTED_EMAIL,
      SELECTED_PHONE,
      address: {
        SELECTED_STREET_ADRESS,
        SELECTED_CITY,
        SELECTED_STATE,
        SELECTED_ZIP: Number.parseInt(SELECTED_ZIP)
      },
      SELECTED_DESCRIPTION,
    };
    console.log("data",data)

    try {
      const response = await fetch("http://localhost:5000/add_table_line", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json;charset=utf-8',
        },
        body: JSON.stringify(data),
      });
      const result = await response.json();
      setSELECTED_FIRSTNAME("");
      setSELECTED_LASTNAME("");
      setSELECTED_EMAIL("");
      setSELECTED_PHONE("");
      setSELECTED_STREET_ADRESS("");
      setSELECTED_CITY("");
      setSELECTED_STATE("");
      setSELECTED_ZIP("");
      setSELECTED_DESCRIPTION("");
      setDisabled(true);
      const resopnsForUpdate = await fetch("http://localhost:5000/get_table_lines");
      const update = await resopnsForUpdate.json();
      initialTabLeLine(update);
      console.log("result", result);
    } catch (error) {console.log("ERROR druing in send tableLine", error)}
  }


  return(
    <form
      className={isOpen ? "form_active flex flex-column" : "form"}
    >
      <div className="form-header flex items-center">
        <img
          onClick={() => formHandler()}
          src={arrowLeft} 
          className="form-header__arrow" 
          alt="arrow left close"
        />
        <span
          className="form-header__text"
        >
          Add a new line in table
        </span>
      </div>
      <div className="form-body flex flex-column ">
      <div className="form-body-firstname flex items-center">
        <input 
        className="form-body-firstname__input margin-input input"
        onChange={(event) => setSELECTED_FIRSTNAME(event.target.value)}
        value={SELECTED_FIRSTNAME}
        />
        <label className="form-body-firstname__label-text label-text">
          Firstname
        </label>
      </div>
      <div className="form-body-lastname flex items-center">
        <input 
          className="form-body-lastname__input margin-input input"
          onChange={(event) => setSELECTED_LASTNAME(event.target.value)}
          value={SELECTED_LASTNAME}
        />
        <label className="form-body-lastname__label-text label-text">
          Lastname
        </label>
      </div>
      <div className="form-body-email flex items-center">
        <input 
        className="form-body-email__input margin-input input"
        onChange={(event) => setSELECTED_EMAIL(event.target.value)}
        value={SELECTED_EMAIL}
        />
        <label className="form-body-email__label-text label-text">
          Email
        </label>
      </div>
      <div className="form-body-phone flex items-center">
        <input 
          className="form-header-body-phone__input margin-input input"
          onChange={(event) => setSELECTED_PHONE(event.target.value)}
          value={SELECTED_PHONE}
        />
        <label className="form-header-body-phone__label-text label-text">
          Phone
        </label>
      </div>
      <div className="form-body-streetAddress  flex items-center">
        <input 
          className="form-body-choose-streetAddress__input margin-input input"
          onChange={(event) => setSELECTED_STREET_ADRESS(event.target.value)}
          value={SELECTED_STREET_ADRESS}
        />
        <label className="form-body-streetAddress__label-text label-text">
          StreetAddress
        </label>
      </div>
      <div className="form-body-city flex items-center">
        <input 
          className="form-header-body-city__input margin-input input"
          onChange={(event) => setSELECTED_CITY(event.target.value)}
          value={SELECTED_CITY}
        />
        <label className="form-header-body-city__label-text label-text">
          City
        </label>
      </div>
      <div className="form-body-state flex items-center">
        <input 
          className="form-header-body-state__input margin-input input"
          onChange={(event) => setSELECTED_STATE(event.target.value)}
          value={SELECTED_STATE}
        />
        <label className="form-header-body-state__label-tex label-text">
          State
        </label>
      </div>
      <div className="form-body-zip flex items-center">
        <input 
          className="form-header-body-zip__input margin-input input"
          onChange={(event) => setSELECTED_ZIP(event.target.value)}
          value={SELECTED_ZIP}
        />
        <label className="form-header-body-zip__label-text label-text">
          Zip
        </label>
      </div>
      <div className="form-body-describe flex items-center">
        <textarea
          className="form-body-describe__textarea margin-input"
          onChange={(event) => setSELECTED_DESCRIPTION(event.target.value)}
          value={SELECTED_DESCRIPTION}
        />
        <label className="form-body-describe__label-text label-text">
          Describe
        </label>
      </div>
      <Button
        onClickHanlder={sendForm}
        textBtn="Send"
        customStyleBtn="form-body__btn"
        disabled={disabled}
      />
      </div>
    </form>
  )
}