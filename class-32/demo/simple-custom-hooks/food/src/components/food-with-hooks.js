import React from 'react';
import useForm from '../hooks/form';
import { useState } from 'react';

function Food(props){
  const [formData, setFormData] = useState({});
  const [handleChange, handleSubmit, values] = useForm(eat);

  function eat(food){
    setFormData(food)
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

        <strong>From the from data</strong>
        {
          Object.keys(values).map(keyName => (
            <p key={Math.random()}>{keyName} : {formData[keyName]}</p>
          ))
        }
      </div>
    )

}

export default Food;