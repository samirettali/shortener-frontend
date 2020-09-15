import React from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import Input from './Input';
import Alert from './Alert';

const urlSchema = Yup.object().shape({
  url: Yup.string().url('Invalid URL').required('Required!'),
});

class CreateForm extends React.Component {
   state = {
     error: null
   }

  render() {
    return (
      <Formik
        initialValues={{ url: '' }}
        validationSchema={urlSchema}
        onSubmit={(data, {setSubmitting, resetForm}) => {
          resetForm();
          this.setState({error: null});
          setSubmitting(true);
          axios.post('/urls', data)
            .then(response => {
              this.props.addUrl(response.data);
            })
            .catch(err => this.setState({ error: err.response ? err.response.data.message : 'Unknown error'}));
          setSubmitting(false);
        }}
      >
        {({ errors, touched, values, isSubmitting, handleBlur, handleSubmit }) => (
          <>
          <div className="mt-8">
            <Form className="w-full mx-auto px-8 pt-6 pb-8 mb-4">
              <div className="flex items-center mb-1">
                  <Input name="url" type="text" placeholder="Enter a URL" />
                  <button disabled={isSubmitting} type="submit" className="shadow bg-gray-900 hover:bg-gray-800 focus:shadow-outline focus:outline-none text-white font-bold ml-1 py-2 px-4 rounded">Shorten</button>
              </div>
                {errors.url && touched.url ? (
                  <p className="text-red-500 text-xs italic">{errors.url}</p>
                ) : null}
              <div className="md:flex md:items-center mb-6">
              </div>
            </Form>
          </div>
            {this.state.error && <Alert color="red" title="There was an error" text={this.state.error} handleClick={this.handleAlertClick} />}
          </>

        )}
      </Formik>
    );
  }
}

export default CreateForm;
