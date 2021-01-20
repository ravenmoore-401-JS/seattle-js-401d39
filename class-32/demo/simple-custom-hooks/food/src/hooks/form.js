import { useState } from 'react';

const useForm = (callback) => {
  const [values, setValues] = useState({});

  const handleSubmit = e => {
    e.preventDefault();
    console.log(values);
    callback(values);
  }

  const handleChange = e => {
    setValues({ ...values, [e.target.name]: e.target.value} );
  }

  return [
    handleChange,
    handleSubmit,
    values
  ]
}

export default useForm;