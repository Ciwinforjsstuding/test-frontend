import React from 'react';

import './table-line.css';

export const TableLine = ({ getTableLineInfo, tableLine }) => (
  <tr
    className="table-line"
    key={tableLine._id}
    onClick={() => getTableLineInfo(tableLine._id)}
  >
  <td
    className="table-line-cell id"
  >
    { tableLine._id}
  </td>
    <td
      className="table-line-cell fistname"
    >
      { tableLine.SELECTED_FIRSTNAME}
    </td>
    <td
      className="lastname"
    >
      { tableLine.SELECTED_LASTNAME}
    </td>
    <td
      className="email"
    >
      { tableLine.SELECTED_EMAIL}
    </td>
    <td
      className="phone"
    >
      { tableLine.SELECTED_PHONE}
    </td>
    <td
      className="street-adress"
    >
      { tableLine.address.SELECTED_STREET_ADRESS}
    </td>
    <td
      className="city"
    >
      { tableLine.address.SELECTED_CITY}
    </td>
    <td
      className="state"
    >
      { tableLine.address.SELECTED_STATE}
    </td>
    <td
      className="zip"
    >
      { tableLine.address.SELECTED_ZIP}
    </td>
    <td
      className="decribe"
    >
      { tableLine.SELECTED_DESCRIPTION}
    </td>
  </tr>
)