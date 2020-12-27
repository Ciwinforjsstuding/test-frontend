import React from 'react';

import './btn-style.css';

export const Button = ({ textBtn, customStyleBtn = "", onClickHanlder, disabled }) => (
  <button
    onClick={onClickHanlder}
    className={`btn ${customStyleBtn}`}
    disabled={disabled}
  >
      {textBtn}
    
  </button>
)