import { connect } from 'react-redux';

import './sort-column.css';

import { SortColumn } from './SortColumn';

import { ascendingHandler } from '../../../action';

const mapDispatchToProps = {
  ascendingHandler,
}

export default connect(null, mapDispatchToProps)(SortColumn);