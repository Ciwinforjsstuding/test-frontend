import React, { useState } from 'react';

import SearchInput from '../SearchInput';
import FormAddLineTable from '../FormAddLineTable';
import Tabel from '../Tabel';
import Paginator from '../Paginator';
import DetailInfoBar from '../DetailInfoBar';

import './App.css';

import { Button } from '../../styleComponent/Button/Button';

const App = ({ loadingTableLine, selectedTableLineId }) => {

  const [ boolForForm, setBoolForForm ] = useState(false);
  const handlerForm = () => setBoolForForm(!boolForForm);
  return (
    <div className="app">
      <SearchInput />
      <Button 
        textBtn={"add table line"}
        onClickHanlder={handlerForm}
        customStyleBtn="add-table-line"
      />
      {
        boolForForm ?
        <FormAddLineTable 
          isOpen={boolForForm}
          formHandler={setBoolForForm}
        /> : null
      }
      <div className="app-body flex flex-column items-center">
        <Tabel />
        {
          loadingTableLine 
          ? <span>Loading...</span>
          : (
              <Paginator howMuchShowPage={5} />
            )
        }
        {loadingTableLine || (selectedTableLineId == false)
          ? <div className="chose-text">Выберите человека в таблице</div>
          : <DetailInfoBar />
        }
      </div>
      
    </div>
  )
}

export default App;
