import { connect } from 'react-redux';

import './App.css';

import App from './App';

const mapStateToProps = (state) => ({
  loadingTableLine: state.loadingTableLine,
  selectedTableLineId: state.selectedTableLineId,
});

export default connect(mapStateToProps, null)(App);