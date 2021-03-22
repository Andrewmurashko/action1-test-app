import React from 'react';
import './ListCell.scss';

function ListCell({ InputState, setInputState }) {
  const [del, setDel] = React.useState(null);

  const deleteHandler = (index) => {
    setDel(InputState.splice(() => index, 1));
    console.log(InputState)
    console.log(InputState.length)
  };
  const changeValue = (e, index) => {
    const { name, value } = e.target;
    const newValue = InputState.map((el, i) => {
      if (i === index) {
        return { ...el, quality: value };
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
        <td>{el.name}</td>
        <td>
          <input
            type="number"
            value={el.quality}
            name="quality"
            onChange={(e) => changeValue(e, index)}
          />
        </td>
        <td>{el.cost}</td>
        <td>{el.generalCost}</td>
        <button onClick={() => deleteHandler(index)}>Delete</button>
      </tr>
    </>
  ));
}

export default ListCell;
