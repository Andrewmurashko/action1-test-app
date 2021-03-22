import React from 'react';

function InputForm({ setInputState, InputState }) {
  const [input, setInput] = React.useState({});

  const changeValue = (e) => {
    const { name, value } = e.target;
    setInput({ ...input, [name]: value });
    console.log(input);
  };

  const inputHandler = () => {
    const { quality, name, cost } = input;
    setInputState([
      ...InputState,
      { name: name, quality: quality, cost: cost, generalCost: quality * cost },
    ]);
  };

  return (
    <div className="table__input-form">
      <input
        className="table__input-form_name"
        type="text"
        placeholder="Product name"
        name="name"
        onChange={changeValue}
      />
      <input
        className="table__input-form_quantity"
        type="number"
        placeholder="Quantity"
        name="quality"
        onChange={changeValue}
      />
      <input
        className="table__input-form_cost"
        type="number"
        placeholder="Cost"
        name="cost"
        onChange={changeValue}
      />
      <button className="button input-form__button" onClick={inputHandler}>
        Append
      </button>
    </div>
  );
}

export default InputForm;
