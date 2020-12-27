import { combineReducers  } from 'redux';
import { 
  SERACH_TEXT, 
  SELECTED_ID, 
  SELECTED_FIRSTNAME, 
  SELECTED_LASTNAME, 
  SELECTED_EMAIL, 
  SELECTED_PHONE, 
  SELECTED_DESCRIPTION, 
  INITIAL_TABLE_LINE, 
  SELECTED_STRETAD_ADRESS, 
  SELECTED_CITY, 
  SELECTED_STATE, 
  SELECTED_ZIP, 
  GET_TABLE_LINE_INFO, 
  ASCENDING_HANDLER, 
  LOADING_TABLE_LINE, 
  CURRENT_PAGE_IN_PAGINATOR,
  SHOW_TABLE_LINE
} from '../types';

const selectedItemReducer = (state = "", { type }) => {
  //возвращаем type, потому что type такой же как и value у option seletora
  if (type === SELECTED_ID) return type;
  if (type === SELECTED_FIRSTNAME) return type;
  if (type === SELECTED_LASTNAME) return type;
  if (type === SELECTED_EMAIL) return type;
  if (type === SELECTED_PHONE) return type;
  if (type === SELECTED_STRETAD_ADRESS) return type;
  if (type === SELECTED_CITY) return type;
  if (type === SELECTED_STATE) return type;
  if (type === SELECTED_ZIP) return type;
  if (type === SELECTED_DESCRIPTION) return type;
  return state;
}

const searchTextReducer = (state = "", action) => {
  if (action.type === SERACH_TEXT) return action.payload;
  return state;
}

const tableLineReducer = (state = [], { type, payload }) => {
  if (type === INITIAL_TABLE_LINE) return payload;
  return state;
}

const selectedTableLineIdReducer = (state = "", action) => {
  if (action.type === GET_TABLE_LINE_INFO) return action.payload;
  return state;
}

const loadingTableLineReducer = (state = true, action) => {
  if (action.type === LOADING_TABLE_LINE) return action.payload;
  return state;
}

const currentBageInPagintorReducer = (state = 1, action) => {
  if (action.type === CURRENT_PAGE_IN_PAGINATOR) return action.payload;
  return state;
}

const  showTableLineReducer = (state = [], { type,  payload} ) => {
  if (type === SHOW_TABLE_LINE) return payload;
  if (type === ASCENDING_HANDLER) {//сортировака по возрастанию и убыванию
    if(payload.ascending) return state.sort((elem1, elem2) => elem1[payload.placePressing] > elem2[payload.placePressing] ? 1 : -1);
    if(!payload.ascending) return state.sort((elem1, elem2) => elem1[payload.placePressing] < elem2[payload.placePressing] ? 1 : -1);
  }
  return state;
}

export default combineReducers({
  selectedItemForSearch: selectedItemReducer,
  searchText: searchTextReducer,
  tableLines: tableLineReducer,
  selectedTableLineId: selectedTableLineIdReducer,
  loadingTableLine: loadingTableLineReducer,
  currnetPageInPaginator: currentBageInPagintorReducer,
  showTableLine: showTableLineReducer,
})