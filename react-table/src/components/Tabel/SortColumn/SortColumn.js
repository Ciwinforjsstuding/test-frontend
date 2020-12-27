import React, { useState } from 'react';

import arrDown from '../../../icon/arrow-down-solid.svg';
import arrUp from '../../../icon/arrow-up-solid.svg';

export const SortColumn = ({ placePressing, ascendingHandler }) => {
  const [ascending, setAscending ] = useState(false);

  const arrowHandler = () => {
    setAscending(!ascending);
    ascendingHandler(placePressing, ascending);
  };
  
  return(
    <div
      className="wrapper-arrow-sort"
      onClick={arrowHandler}
    >
      <img
        className="arrow-sort"
        src={ascending ? arrUp : arrDown} 
        alt="arrow-sort"
      />
    </div>
  )
}
