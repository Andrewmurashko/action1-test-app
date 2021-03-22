import React from 'react';
import './ListCell.scss';
import { setStorage } from '../../utils/storage';

function ListCell({ tableState, setTableState }) {

  const deleteHandler = (index) => {
    const toUpdateProducts = tableState.filter((el, i) => i !== index);
    setTableState(toUpdateProducts);
    setStorage('productsList', toUpdateProducts);
  };

  const changeValue = (e, index) => {
    const { name, value } = e.target;
    const newValue = tableState.map((el, i) => (i === index ? { ...el, [name]: value } : el));
    setTableState(newValue);
  };

  return tableState.map((el, index) => (
    <>
      <tr className="table__list_cell" key={index}>
        <td>{index + 1}</td>
        <td>
          <input
            type="string"
            value={el.name}
            name="name"
            onChange={(e) => changeValue(e, index)}
          />
        </td>
        <td>
          <input
            type="number"
            value={el.quality}
            name="quality"
            onChange={(e) => changeValue(e, index)}
          />
        </td>
        <td>
          <input
            type="number"
            value={el.cost}
            name="cost"
            onChange={(e) => changeValue(e, index)}
          />
        </td>
        <td>{el.quality * el.cost}</td>
        <td><button onClick={() => deleteHandler(index)}>Delete</button></td>
      </tr>
    </>
  ));
}

export default ListCell;
