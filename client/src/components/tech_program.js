import React from "react";

class Tech_Program extends React.Component {
  render() {
    return (
      <div className="zone section-under-nav grid-wrapper">
        <div className="box tile">
          <img
            className="post-image"
            src="https://dsonskillshare.000webhostapp.com/wp-content/uploads/2019/11/america.jpg"
          />
          <h1>Java Lessons</h1>
          <div className="icon-text-posted-by-someone">
            <img
              className="icon-posted-by-someone"
              src="https://image.flaticon.com/icons/svg/1717/1717787.svg"
            />
            <p className="text-posted-by-someone">
              Posted on 21st November 2019 by Hoang
            </p>
          </div>
          <p id="post">Come learn Java!</p>
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

export default Tech_Program;
