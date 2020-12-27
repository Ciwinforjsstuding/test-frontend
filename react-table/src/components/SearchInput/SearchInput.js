import React from 'react';

// import Selector from '../Selector';
import { Select } from '../../styleComponent/Select/Select';
import { Button } from '../../styleComponent/Button/Button';

import { SELECTED_EMAIL, SELECTED_FIRSTNAME, SELECTED_ID, SELECTED_LASTNAME, SELECTED_PHONE, SELECTED_DESCRIPTION, SELECTED_STREET_ADRESS, SELECTED_CITY, SELECTED_STATE, SELECTED_ZIP,  } from '../../types';

const options = [
  { id: 1, value: SELECTED_ID, text: "Id"},
  { id: 2, value: SELECTED_FIRSTNAME, text: "Firstname"},
  { id: 3, value: SELECTED_LASTNAME, text: "Lastname"},
  { id: 4, value: SELECTED_EMAIL, text: "Email"},
  { id: 5, value: SELECTED_PHONE, text: "Phone"},
  { id: 6, value: SELECTED_STREET_ADRESS, text: "Street Adress"},
  { id: 7, value: SELECTED_CITY, text: "City"},
  { id: 8, value: SELECTED_STATE, text: "State"},
  { id: 8, value: SELECTED_ZIP, text: "Zip"},
  { id: 9, value: SELECTED_DESCRIPTION, text: "Describe"},
]

const customStyleSelect = {
  select: "custom-select",

}

export const SearchInput = ({ selectorHandler, getSerachText, searchText }) => {

  return (
    <header className="header-search flex justify-center items-center">
      <div className="header-search__wrapper flex items-center justify-around">
        { /**/ }
        <Select
          arrOptions={options} 
          onHandlerSelect={selectorHandler}
          choosedText="Id"
          customStyle={customStyleSelect}
        />
        <input
          className="header-search__input"
          onChange={(event) => getSerachText(event.target.value)}
          value={searchText}
          placeholder="Type the serach text"
        />
        <Button textBtn="Найти" onClickHanlder={null} className="header__btn" />
      </div>
    </header>
  )
}