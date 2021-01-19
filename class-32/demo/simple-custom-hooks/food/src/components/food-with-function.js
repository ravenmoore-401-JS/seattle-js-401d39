import React from 'react';
import { useState } from 'react';

function Food(props){
  const [values, setValues] = useState({});

  const handleSubmit = e => {
    e.preventDefault();
    console.log(values);
  }

  const handleChange = e => {
    setValues({ ...values, [e.target.name]: e.target.value} );
  }


    return(
      <div id="food">
        <h2>Class Componenet</h2>
        <form onSubmit={handleSubmit}>
          <input onChange={handleChange} type="text" name="food" />
          <input onChange={handleChange}  type="number" name="calories" />
          <button>Eat The Food</button>
        </form>

        <strong>Here are the values from the state</strong>
        {
          Object.keys(values).map(keyName => (
            <p key={Math.random()}>{keyName} : {values[keyName]}</p>
          ))
        }
      </div>
    )

}

export default Food;