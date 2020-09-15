import React from 'react';
import { FieldProps, getIn } from 'formik';

function TextFormField({field, form, props}) {
  const errorText = getIn(form.touched, field.name) && getIn(form.errors, field.name);
  return (
    <>
      <input
        className="shadow-sm bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:border-gray-500"
        {...field}
        {...props}
      />
      {errorText ? (
        <p class="text-red-500 text-xs italic">
          {errorText}
        </p>
      ) : ""}
    </>
  );
}

export default TextFormField;