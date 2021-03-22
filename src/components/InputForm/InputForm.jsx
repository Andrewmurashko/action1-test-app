import React from 'react';
import { setStorage } from '../../utils/storage';
import { checkInputForm } from '../../utils/checkInputForm';
import './InputForm.scss';

function InputForm({ setTableState, tableState }) {
  const [input, setInput] = React.useState({ name: '', quality: '', cost: '' });

  const changeValue = (e) => {
    const { name, value } = e.target;
    setInput({ ...input, [name]: value });
  };

  const inputHandler = () => {
    const { isValid } = checkInputForm(input);
    if (isValid) {
      const { quality, cost } = input;
      const toUpdateProducts = [...tableState, { ...input, generalCost: quality * cost }];
      setTableState(toUpdateProducts);
      setStorage('productsList', toUpdateProducts);
    }
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
        placeholder="Quality"
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
