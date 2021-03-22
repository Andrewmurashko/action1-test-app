import React from 'react';
import './ListCell.scss';

function ListCell({ InputState, setInputState }) {
  const [del, setDel] = React.useState(null);

  const deleteHandler = (index) => {
    setDel(InputState.splice(() => index, 1));
  };
  const changeValue = (e, index) => {
    const { name, value } = e.target;
    console.log(e.target, index, InputState[index].quality);
    // setInputState({ ...InputState, InputState[index].quality: value});
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
