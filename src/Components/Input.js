import React from 'react';
import { Field } from 'formik';

function Input ({ name, type, placeholder }) {
  return (
    <Field name={name} className="shadow-sm bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:border-gray-500" type={type} placeholder={placeholder} />
  )
}

export default Input;
