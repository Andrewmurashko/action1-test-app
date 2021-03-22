import React from 'react';
import './List.scss';

import ListCell from '../ListCell/ListCell';

function List({ tableState, setTableState }) {
  function sum(field) {
    let currSum = 0;
    tableState.forEach((el) => {
      currSum += Number(el[field]);
    });

    return `${currSum}`;
  }

  return (
    <table className="table__list">
      <thead>
        <tr className="table__list_header">
          <th>Pos</th>
          <th>Product name</th>
          <th>Quality</th>
          <th>Cost/per 1</th>
          <th>Cost/All</th>
        </tr>
      </thead>
      <tbody>
        <ListCell tableState={tableState} setTableState={setTableState} />
      </tbody>
      <tfoot>
        <tr>
          <td>Total:</td>
          {tableState && <td>{tableState.length}</td>}
          {tableState && <td>{sum('quality')}</td>}
          {tableState && <td>{sum('cost')}</td>}
          <td></td>
        </tr>
      </tfoot>
    </table>
  );
}

export default List;
