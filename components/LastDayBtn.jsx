import React from "react";

export default class LastDayBtn extends React.Component {

  handleClick = (event) => {
    event.target.style.backgroundColor = "rgb(255, 255, 255)";
    event.target.style.color = "rgb(109, 142, 207)";
  };

  render() {
    return (
      <button
        type="button"
        className="
              h5
              inline-block
              shadow-2
              pl2
              pr2
              pt1
              pb1
              border-grey
              bold
              last-day
            "
        onClick={this.handleClick}
      >
        Last 24 hours
      </button>
    );
  }
}
