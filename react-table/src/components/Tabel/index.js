import { connect } from 'react-redux';

import './table-style.css';

import { Tabel } from './Tabel';
import { 
  initialTabLeLine,
  handlerLoadingTableLine,
} from '../../action';

import { getLoadingShowTableLine } from '../../selectors';

const mapStateToProps = (state) => ({
  loadingShowTableLine: getLoadingShowTableLine(state.showTableLine),
});

const mapDispatchToProps = {
  initialTabLeLine,
  handlerLoadingTableLine,
};

export default connect(mapStateToProps, mapDispatchToProps)(Tabel);