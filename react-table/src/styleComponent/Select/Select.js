import React, { useState, useEffect } from 'react';

import arrowDown from '../../icon/arrow-down-solid.svg';
import arrowUp from '../../icon/arrow-up-solid.svg';

import './select-style.css';

export const Select = ({ isOpen = false, choosedText, onHandlerSelect, arrOptions = [], customStyle = {} }) => {
  const [isActive, setIsActive] = useState(false);
  const [seletedText, setSeletedText] = useState(choosedText);
  useEffect(() => {
    setIsActive(isOpen);//инициализация состояния селекта
  }, []);

  return (
    <div 
      className={`${customStyle.select  || ""} select `}
      onClick={() => setIsActive(!isActive)}
    >
      <div
        className={`select__choosed-elem flex justify-between items-center  ${customStyle.choosedElem || ""}`}
      >
        <span
          className={`select__choosed-text ${customStyle.choosedText || ""}`}
        >
          {seletedText}
        </span>
        <img src={isActive? arrowDown : arrowUp} className="custom-option" alt="fuck" />
      </div>
      <div className={isActive ? "select__drop-down_active flex flex-column items-center" : "select__drop-down"}>
        {
          isActive && arrOptions.map(option => {
            return (
              <div 
                key={option.id} 
                value={option.value} 
                className={`select__option ${customStyle.option || ""}`} 
                onClick={() => {
                  onHandlerSelect(option.value)
                  setSeletedText(option.text)
                }}>
                {option.text}
              </div>
            )
          })
        }
      </div>
    </div>
  )
}