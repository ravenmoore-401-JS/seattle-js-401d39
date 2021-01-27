import { useState } from 'react';

const useForm = (callback) => {
  const [values, setValues] = useState({});

  const handleSubmit = e => {
    e.preventDefault();
    console.log(values);

    // this callback function is the 'eat function' from our food-with-hooks. It's job update the formData state
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