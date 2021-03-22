import React from 'react';
import './Table.scss';

import InputForm from '../InputForm/InputForm';
import List from '../List/List';
import { getStorage } from '../../utils/storage';

function Table() {
  const [tableState, setTableState] = React.useState(getStorage('productsList') || []);

  return (
    <div className="wrapper table">
      <InputForm setTableState={setTableState} tableState={tableState} />
      <List tableState={tableState} setTableState={setTableState} />
    </div>
  );
}

export default Table;
