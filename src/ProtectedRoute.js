import React from "react";
import { Redirect } from "react-router-dom";

class ProtectedRoute extends React.Component {
  render() {
    const Component = this.props.component;
    // TODO verify token validity
    const isAuthenticated = localStorage.getItem("token");
    return isAuthenticated ? (
      <Component />
    ) : (
      <Redirect to={{ pathname: "/" }} />
    );
  }
}

export default ProtectedRoute;
