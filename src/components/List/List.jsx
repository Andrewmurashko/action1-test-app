import React from 'react';
import './List.scss';

import ListCell from '../ListCell/ListCell';

function List({ InputState, setInputState }) {

  function sum(val) {
    let currSum = 0;

      InputState.forEach((el) => {
          console.log(val)
          currSum += Number(el[val])});
 
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
          <td></td>
          {InputState.length && <td>Positions:{InputState.length}</td>}
          {InputState.length && <td>{sum('quality')}</td>}
          {InputState.length && <td>{sum('cost')}</td>}
          {InputState.length && <td>{sum('generalCost')}</td>}
        </tr>
      </tfoot>
    </table>
  );
}

export default List;
