import React from "react";
import './tennis.scss';

class Tennis extends React.Component {
  render() {
    return (
      <div className="zone section-under-nav">
        <div className="tile-align">
          <div className="left-side-tile">
            <div className="big-box" id="big-box-top">
              <img
                src=""
                width={250}
                height={150}
              />
              <h1></h1>
              <div className="icon-text-posted-by-someone">
                <img
                  className="icon-posted-by-someone"
                  src="https://image.flaticon.com/icons/svg/1717/1717787.svg"
                />
                <p className="text-posted-by-someone">
                </p>
              </div>
              <p id="post"></p>
              <p id="post">
              </p>
            </div>{" "}
            {}
            <div className="big-box" id="big-box-bottom">
              <p>Comment</p>
              <textarea
                rows={5}
                cols={100}
                name="comment"
                form="usrform"
                defaultValue={"Leave a comment..."}
              />
              <button className="button-comment">Continue Reading</button>
            </div>
          </div>{" "}
          {}
          <div className="right-side-tile">
            <div className="side-box" id="side-box-top">
              <img
                src=""
                width={250}
                height={150}
              />
              <h1></h1>
              <div className="icon-text-posted-by-someone">
                <img
                  className="icon-posted-by-someone"
                  src="https://image.flaticon.com/icons/svg/1717/1717787.svg"
                />
                <p className="text-posted-by-someone">
                </p>
              </div>
              <p id="post"></p>
              <a>
                <img
                  className="icon-continue-reading"
                  src="https://image.flaticon.com/icons/svg/216/216680.svg"
                />
              </a>
            </div>{" "}
            {}
            <div className="side-box" id="side-box-bottom">
              <img
                src=""
                width={250}
                height={150}
              />
              <h1></h1>
              <div className="icon-text-posted-by-someone">
                <img
                  className="icon-posted-by-someone"
                  src="https://image.flaticon.com/icons/svg/1717/1717787.svg"
                />
                <p className="text-posted-by-someone">
                </p>
              </div>
              <p id="post"></p>
              <a>
                <img
                  className="icon-continue-reading"
                  src="https://image.flaticon.com/icons/svg/216/216680.svg"
                />
              </a>
            </div>{" "}
            {}
          </div>{" "}
          {}
        </div>
      </div>
    );
  }
}

export default Tennis;
