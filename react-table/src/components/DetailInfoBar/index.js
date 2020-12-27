import { connect } from 'react-redux';

import './detali-info-style.css';

import { DetailInfoBar } from './DetailInfoBar';

import { selectedTableLineSelector } from '../../selectors';

const mapStateToProps = (state) => {
  console.log("state in mapState", state)
  return({
    selectedTableLine: selectedTableLineSelector(state.tableLines, state.selectedTableLineId ),
  })
};

export default connect(mapStateToProps, null)(DetailInfoBar);