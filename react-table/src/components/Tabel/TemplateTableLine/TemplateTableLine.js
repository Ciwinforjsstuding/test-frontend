import React from 'react';
import { connect } from 'react-redux';

import { TableLine } from '../TableLine/TableLine';

import { 
  getTableLineInfo, 
} from '../../../action';

const mapStateToProps = (state) => {
  console.log("showTableLine", state.showTableLine);
  return {
    showTableLine: state.showTableLine,
  }
};

const mapDispatchToProps = {
  getTableLineInfo, 
};

const TemplateTableLine = ({
  getTableLineInfo,
  showTableLine,
}) => {
  return showTableLine.map(tableLine => {
    return (
      <TableLine 
        tableLine={tableLine} 
        getTableLineInfo={getTableLineInfo}
      />
    )
  })
}


export default connect(mapStateToProps, mapDispatchToProps)(TemplateTableLine);
