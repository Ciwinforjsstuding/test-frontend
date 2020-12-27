import { connect } from 'react-redux';

import './form-add-style.css';

import { FormAddLineTable } from './FormAddLineTable';
import { 
  initialTabLeLine,
} from '../../action';

const mapDispatchToProps = { 
  initialTabLeLine,
};

export default connect(null, mapDispatchToProps)(FormAddLineTable);
