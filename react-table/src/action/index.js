import { 
  INITIAL_TABLE_LINE, 
  SERACH_TEXT, 
  GET_TABLE_LINE_INFO,
  ASCENDING_HANDLER, 
  LOADING_TABLE_LINE, 
  CURRENT_PAGE_IN_PAGINATOR,
  SHOW_TABLE_LINE
} from '../types';

export const selectorHandler = (selected) => ({
  type: selected,
});

export const getSerachText = (text) => ({
  type: SERACH_TEXT,
  payload: text,
});

export const initialTabLeLine = (tableLine) => ({
  type: INITIAL_TABLE_LINE,
  payload: tableLine,
});

export const getTableLineInfo = (id) => ({
  type: GET_TABLE_LINE_INFO,
  payload: id,
});

export const getCurrentPageInPagintor = (numberPage) => ({
  type: CURRENT_PAGE_IN_PAGINATOR,
  payload: numberPage
})

export const ascendingHandler = (placePressing, ascending) => ({
  type: ASCENDING_HANDLER,
  payload: {
    placePressing,
    ascending
  }
});

export const handlerLoadingTableLine = (bool) => ({
  type: LOADING_TABLE_LINE,
  payload: bool,
});

export const getShowTabLine = (showTableLine) => ({
  type: SHOW_TABLE_LINE,
  payload: showTableLine,
});
