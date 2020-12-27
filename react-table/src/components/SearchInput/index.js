import { connect } from 'react-redux';

import './search-input-style.css';

import { SearchInput } from './SearchInput';

import { 
  selectorHandler,
  getSerachText,
} from '../../action';

const mapStateToProps = (state) => ({
  searchText: state.searchText,
})

const mapDispatchToProps = {
  selectorHandler,
  getSerachText,
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchInput);