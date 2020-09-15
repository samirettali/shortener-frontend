import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { Redirect, withRouter } from "react-router-dom";
import axios from "axios";
import Alert from "../Components/Alert";
import Input from "../Components/Input";

const registrationSchema = Yup.object().shape({
  username: Yup.string().max(50, "Too long!").required("Required!"),
  password: Yup.string().min(8, "Too short!").required("Required!"),
  passwordConfirmation: Yup.string().min(8, "Too short!").required("Required!"),
});

class Register extends React.Component {
  state = {
    error: null,
  };

  handleAlertClick = (event) => {
    this.setState({ error: null });
  };

  render() {
    if (this.props.loggedIn) {
      return <Redirect to={"/dashboard"} />;
    }

    return (
      <Formik
        initialValues={{
          username: "",
          password: "",
          passwordConfirmation: "",
        }}
        validationSchema={registrationSchema}
        onSubmit={(data, { setSubmitting, resetForm }) => {
          resetForm();
          this.setState({ error: null });
          setSubmitting(true);
          axios
            .post("/users/register", data)
            .then((response) => this.props.history.push("/dashboard"))
            .catch((err) =>
              this.setState({
                error: err.response
                  ? err.response.data.message
                  : "Unknown error",
              })
            );
          setSubmitting(false);
        }}
      >
        {({
          errors,
          touched,
          values,
          isSubmitting,
          handleBlur,
          handleSubmit,
        }) => (
          <div>
            <div className="mt-8">
              <Form className="w-full mx-auto max-w-sm px-8 pt-6 pb-8 mb-4">
                <div className="md:flex md:items-center mb-1">
                  <div className="md:w-1/3">
                    <label
                      className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
                      htmlFor="username"
                    >
                      Username
                    </label>
                  </div>
                  <div className="md:w-2/3">
                    <Input name="username" type="text" placeholder="Username" />
                  </div>
                </div>
                <div className="md:flex md:items-center mb-6">
                  <div className="md:w-1/3"></div>
                  <div className="md:w-2/3">
                    {errors.username && touched.username ? (
                      <p className="text-red-500 text-xs italic">
                        {errors.username}
                      </p>
                    ) : null}
                  </div>
                </div>
                <div className="md:flex md:items-center mb-1">
                  <div className="md:w-1/3">
                    <label
                      className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
                      htmlFor="password"
                    >
                      Password
                    </label>
                  </div>
                  <div className="md:w-2/3">
                    <Input
                      name="password"
                      type="password"
                      placeholder="Password"
                    />
                  </div>
                </div>
                <div className="md:flex md:items-center mb-6">
                  <div className="md:w-1/3"></div>
                  <div className="md:w-2/3">
                    {errors.password && touched.password ? (
                      <p className="text-red-500 text-xs italic">
                        {errors.password}
                      </p>
                    ) : null}
                  </div>
                </div>
                <div className="md:flex md:items-center mb-1">
                  <div className="md:w-1/3">
                    <label
                      className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
                      htmlFor="username"
                    >
                      Confirm password
                    </label>
                  </div>
                  <div className="md:w-2/3">
                    <Input
                      name="passwordConfirmation"
                      type="password"
                      placeholder="Confirm password"
                    />
                  </div>
                </div>
                <div className="md:flex md:items-center mb-6">
                  <div className="md:w-1/3"></div>
                  <div className="md:w-2/3">
                    {errors.passwordConfirmation &&
                    touched.passwordConfirmation ? (
                      <p className="text-red-500 text-xs italic">
                        {errors.passwordConfirmation}
                      </p>
                    ) : null}
                  </div>
                </div>
                <div className="md:flex md:items-center">
                  <div className="md:w-1/3"></div>
                  <div className="md:w-2/3">
                    <button
                      disabled={isSubmitting}
                      type="submit"
                      className="shadow bg-gray-900 hover:bg-gray-800 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
                    >
                      Register
                    </button>
                  </div>
                </div>
              </Form>
            </div>
            {this.state.error && (
              <Alert
                color="red"
                title="There was an error"
                text={this.state.error}
                handleClick={this.handleAlertClick}
              />
            )}
            {this.state.registered && <div>Registered</div>}
          </div>
        )}
      </Formik>
    );
  }
}

export default withRouter(Register);
