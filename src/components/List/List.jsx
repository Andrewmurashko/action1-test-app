import React from 'react';
import './List.scss';

import ListCell from '../ListCell/ListCell';

function List({ InputState, setInputState }) {

  function sum(field) {
    let currSum = 0;
    InputState.forEach((el) => {
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
        <ListCell InputState={InputState} setInputState={setInputState} />
      </tbody>
      <tfoot>
        <tr>
          <td>Total:</td>
          {InputState && <td>{InputState.length}</td>}
          {InputState && <td>{sum('quality')}</td>}
          {InputState && <td>{sum('cost')}</td>}
          {/* {InputState && <td>{sum('generalCost')}</td>} */}
        </tr>
      </tfoot>
    </table>
  );
}

export default List;
