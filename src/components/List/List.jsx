import React from 'react';
import './List.scss';

import ListCell from '../ListCell/ListCell';

function List({ InputState, setInputState }) {
  function sum(val) {
    let currSum = 0;
    if (val === InputState[0].quality) {
      InputState.forEach((el) => (currSum += Number(el.quality)));
    }
    if (val === InputState[0].cost) {
      InputState.forEach((el) => (currSum += Number(el.cost)));
    }
    if (val === InputState[0].generalCost) {
        InputState.forEach((el) => (currSum += Number(el.generalCost)));
      }
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
          {InputState.length && <td>{sum(InputState[0].quality)}</td>}
          {InputState.length && <td>{sum(InputState[0].cost)}</td>}
          {InputState.length && <td>{sum(InputState[0].generalCost)}</td>}
        </tr>
      </tfoot>
    </table>
  );
}

export default List;
