import React, { useEffect } from 'react';

import SortColumn from './SortColumn';
import TemplateTableLine from './TemplateTableLine/TemplateTableLine';

export const Tabel = ({
  loadingShowTableLine,
  initialTabLeLine,
  handlerLoadingTableLine,
}) => {

  useEffect(() => {
    // я просто не хочу использовать Redux Thunk ради 2 запросов, поэтому приходится делать такой костыль
    async function getTableLine() {
      const respons = await fetch("http://localhost:5000/get_table_lines");
      const result = await respons.json();
    return result;
    }
    getTableLine()
      .then((result) => {
        initialTabLeLine(result);
        handlerLoadingTableLine(false);
      })
      .catch((err) => console.log("ERROR during get a table line", err));
      // eslint-disable-next-line
  }, [])
  return (
    <table
      className="table"
      border="1"
      >
      <tr>
        <td className="header-cell" rowSpan="2">
          <div className="table-column-id flex justify-center items-center">
            <span
              className="table-column-id__text margin-right"
            >
              ID
            </span>
            <SortColumn placePressing="_id" />
          </div>
        </td>
        <td className="header-cell" rowSpan="2">
          <div className="table-column-firstname flex justify-center items-center">
            <span
              className="table-column-firstname__text margin-right"
            >
              First Name
            </span>
            <SortColumn placePressing="SELECTED_FIRSTNAME" />
          </div>
        </td>
        <td className="header-cell" rowSpan="2">
          <div className="table-column-lastname flex justify-center items-center">
            <span
              className="table-column-lastname__text margin-right"
            >
              Last Name
            </span>
            <SortColumn placePressing="SELECTED_LASTNAME" />
          </div>
        </td>
        <td className="header-cell" rowSpan="2">
          <div className="table-column-email flex justify-center items-center">
            <span
              className="table-column-email__text margin-right"
            >
              Email
            </span>
            <SortColumn placePressing="SELECTED_EMAIL" />
          </div>
        </td>
        <td className="header-cell" rowSpan="2">
          <div className="table-column-photo flex justify-center items-center">
            <span
              className="table-column-photo__text margin-right"
            >
              Phone
            </span>
            <SortColumn placePressing="SELECTED_PHONE" />
          </div>
        </td>
        <td className="header-cell" rowSpan="1" colSpan="4">
          <div className="table-column-describe flex justify-center items-center">
            <span
              className="table-column-describe__text margin-right"
            >
              Describe
            </span>
          </div>
        </td>
        <td className="header-cell" rowSpan="2">
          <div className="table-column-describe flex justify-center items-center">
            <span
              className="table-column-describe__text margin-right"
            >
              Describe
            </span>
            <SortColumn placePressing="SELECTED_DESCRIPTION" />
          </div>
        </td>
      </tr>
      <tr>
        <td className="header-cell">
          <div className="table-column-streetAddress flex justify-center items-center">
            <span
              className="table-column-streetAddress__text margin-right"
            >
              Street Address
            </span>
            <SortColumn placePressing="SELECTED_STREET_ADRESS" />
          </div>
        </td>
        <td className="header-cell">
          <div className="table-column-city flex justify-center items-center">
            <span
              className="table-column-city__text margin-right"
            >
              City
            </span>
            <SortColumn placePressing="SELECTED_CITY" />
          </div>
        </td>
        <td className="header-cell">
          <div className="table-column-state flex justify-center items-center">
            <span
              className="table-column-state__text margin-right"
            >
              State
            </span>
            <SortColumn placePressing="SELECTED_STATE" />
          </div>
        </td>
        <td className="header-cell">
          <div className="table-column-zip flex justify-center items-center">
            <span
              className="table-column-zip__text margin-right"
            >
              Zip
            </span>
            <SortColumn placePressing="SELECTED_ZIP" />
          </div>
        </td>
        </tr>
        {
          loadingShowTableLine 
          ? <div>Loading...</div>
          : <TemplateTableLine />
        }
    </table>
  )
}
