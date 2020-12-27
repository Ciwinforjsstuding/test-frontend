import React, { useEffect } from 'react';

import { spredNumberAndGiveMass } from '../../utils/spredNumber';
import arrowRight from '../../icon/arrow-right-solid.svg';
import arrowLeft from '../../icon/arrow-left-solid.svg';

export const Paginator = ({ 
  tableLines,
  currnetPageInPaginator,
  getShowTabLine, 
  getCurrentPageInPagintor,
  howMuchShowPage = 5,
}) => {
  //странный баг с обрезанием потом пофикси
  let start = (currnetPageInPaginator - 1) * howMuchShowPage;
  let end = start + howMuchShowPage;
  const howMuchNeedPage = Math.ceil(tableLines.length /howMuchShowPage);
  const arrNumbersForPaginsCell = spredNumberAndGiveMass(howMuchNeedPage);
  const showTableLine = tableLines.slice(start, end);

  useEffect(() => {
    getShowTabLine(showTableLine);
  // eslint-disable-next-line
  }, [])
  const PaginCell = ({number, getShowTabLine, getCurrentPageInPagintor, showTableLine}) => {
    return(
    <button
      key={number}
      className="paginator-cell__btn"
      onClick={() => {
        getShowTabLine(showTableLine);
        getCurrentPageInPagintor(number);
      }}
    >
      <span
        className="paginator-cell__text"
      >
        {`${number}`}
      </span>
    </button>
  )}

  return (
    <div
      className="paginator flex justify-between items-center"
    >
    <img
      className="paginator__left-arrow"
      src={arrowLeft}
      alt="для переключения в левую сторону" 
    />
    {
      arrNumbersForPaginsCell.map((number) => {
        return (
          <PaginCell
            className="paginator-cell"
            number={number}
            getShowTabLine={getShowTabLine}
            getCurrentPageInPagintor={getCurrentPageInPagintor}
            showTableLine={showTableLine}
          />
        )
      })
    }
    <img
      className="paginator__right-arrow"
      src={arrowRight}
      alt="для переключения в правую сторону"
      onClick={() => {
        getShowTabLine(showTableLine);
        getCurrentPageInPagintor(++currnetPageInPaginator);
      }}
    />
    </div>
  )
}
