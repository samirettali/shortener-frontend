import React from 'react';
import { Link } from 'react-router-dom';

class Navbar extends React.Component {

  render() {
    return (
      <nav className="flex justify-between bg-gray-900 p-6">
        <div className="flex items-center text-white">
          <Link to="/" className="font-semibold text-xl align-middle tracking-tight">Shortn</Link>
        </div>
        <div className="flex items-center text-sm">
          {!this.props.loggedIn ? (<>
            <Link to="/" className="block lg:inline-block lg:mt-0 text-gray-200 hover:text-white mr-4">
              Login
            </Link>
            <Link to="/register" className="block lg:inline-block lg:mt-0 text-gray-200 hover:text-white mr-4">
              Register
            </Link>
          </>) : (<>
            <Link to="/dashboard" className="block lg:inline-block lg:mt-0 align-middle text-gray-200 hover:text-white mr-4">
              Dashboard
            </Link>
            <Link to="/" onClick={this.props.onLogout} className="block lg:inline-block lg:mt-0 align-middle text-gray-200 hover:text-white mr-4">
              Logout
            </Link>
          </>)}
        </div>
      </nav>
    );
  }
}

export default Navbar;
