import React from "react";
import Navbar from "./Components/Navbar";
import Dashboard from "./Views/Dashboard";
import Login from "./Views/Login";
import Register from "./Views/Register";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import ProtectedRoute from "./ProtectedRoute";
import "./App.css";

class App extends React.Component {
  state = {
    loggedIn: false,
  };

  componentDidMount() {
    if (localStorage.getItem("token") != null) {
      this.setLoggedIn();
    }
  }

  setLoggedIn = () => {
    this.setState({
      loggedIn: true,
    });
  };

  setLoggedOut = () => {
    localStorage.clear();
    this.setState({
      loggedIn: false,
    });
  };

  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar onLogout={this.setLoggedOut} loggedIn={this.state.loggedIn} />
          <Switch>
            <Route exact path="/">
              <Login
                onLogin={this.setLoggedIn}
                loggedIn={this.state.loggedIn}
              />
            </Route>
            <ProtectedRoute
              exact={true}
              path="/dashboard"
              component={Dashboard}
            />
            <Route exact path="/register">
              <Register loggedIn={this.state.loggedIn} />
            </Route>
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
