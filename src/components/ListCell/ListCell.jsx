import React from 'react';
import './ListCell.scss';

function ListCell({ InputState, setInputState }) {

  const deleteHandler = (index) => {
    setInputState(InputState.filter((el,i)=> i !== index))
    console.log(index)
    console.log(InputState)
  };
  const changeValue = (e, index) => {
    const { name, value } = e.target;
    const newValue = InputState.map((el, i) => {
      if (i === index) {
        return { ...el, [name]: value, generalCost: el.quality * el.cost };
      } else {
        return el;
      }
    });
    setInputState(newValue);
  };

  return InputState.map((el, index) => (
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
        <button onClick={() => deleteHandler(index)}>Delete</button>
      </tr>
    </>
  ));
}

export default ListCell;
