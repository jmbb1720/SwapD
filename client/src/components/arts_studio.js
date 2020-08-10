import React from "react";

class Arts_Studio extends React.Component {
  render() {
    return (
      <div className="zone section-under-nav grid-wrapper">
        <div className="box tile">
          <img
            className="post-image"
            src="https://images.unsplash.com/photo-1588441259691-b04ba5e4ddf5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=900&q=60"
          />
          <h1>Arts</h1>
          <div className="icon-text-posted-by-someone">
            <img
              className="icon-posted-by-someone"
              src="https://image.flaticon.com/icons/svg/1717/1717787.svg"
            />
            <p className="text-posted-by-someone">
              Posted on 21st November 2019 by Hoang
            </p>
          </div>
          <p id="post">Come learn Arts!</p>
          {}
          <a>
            <img
              className="icon-continue-reading"
              src="https://image.flaticon.com/icons/svg/216/216680.svg"
            />
          </a>
          {}
        </div>
      </div>
    );
  }
}

export default Arts_Studio;
