import { connect } from 'react-redux';

import './paginator-style.css';

import { Paginator } from './Paginator';
import { 
  getCurrentPageInPagintor,
  getShowTabLine
} from '../../action';

const mapStateToProps = (state) => ({
  tableLines: state.tableLines,
  currnetPageInPaginator: state.currnetPageInPaginator,
});

const mapDispatchToProps = {
  getCurrentPageInPagintor, 
  getShowTabLine,
}

export default connect(mapStateToProps, mapDispatchToProps)(Paginator);