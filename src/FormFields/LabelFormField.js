import React from 'react';
import { getIn } from 'formik';

function LabelFormField({field, form, props}) {
  return (
    <>
      <label
        className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
        {...field}
        {...props}
      />
    </>
  );
}

export default LabelFormField;