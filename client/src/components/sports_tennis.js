import React from "react";

class Sports_Tennis extends React.Component {
  render() {
    return (
      <div className="zone section-under-nav grid-wrapper">
        <div className="box tile">
          <img
            className="post-image"
            src="https://dsonskillshare.000webhostapp.com/wp-content/uploads/2019/11/Tennis.jpg"
          />
          <h1>Tennis</h1>
          <div className="icon-text-posted-by-someone">
            <img
              className="icon-posted-by-someone"
              src="https://image.flaticon.com/icons/svg/1717/1717787.svg"
            />
            <p className="text-posted-by-someone">
              Posted on 21st November 2019 by Hoang
            </p>
          </div>
          <p id="post">Awesome lesson Contact: 66775508</p>
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

export default Sports_Tennis;
