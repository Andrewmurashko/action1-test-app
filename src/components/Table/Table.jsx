import React from 'react';
import './Table.scss';

import InputForm from '../InputForm/InputForm';
import List from '../List/List';

function Table() {
    const [InputState, setInputState] = React.useState([])
    React.useEffect(() => {
        console.log(InputState)
        }
    , [InputState])

    
  return (
    <div className="table">
      <InputForm setInputState={setInputState} InputState={InputState} />
      <List InputState={InputState} setInputState={setInputState}/>
    </div>
  );
}

export default Table;
