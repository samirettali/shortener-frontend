import React from 'react';

class Alert extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="fixed bottom-0 right-0 bg-red-lightest text-red-dark pl-4 pr-8 py-3 rounded" role="alert" onClick={this.props.handleClick}>
        <label className={"close cursor-pointer flex items-start justify-between w-full p-2 bg-" + this.props.color + "-500 h-24 rounded shadow-lg text-white"} title="close" htmlFor="footertoast">
          <div className="font-bold w-full">{this.props.title}</div>
          <div>{this.props.text}</div>
          <svg className="fill-current text-white" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18">
            <path d="M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z"></path>
          </svg>
        </label>
      </div>
    );
  }
}

export default Alert;
