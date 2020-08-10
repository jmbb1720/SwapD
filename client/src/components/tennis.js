import React from "react";

class Tennis extends React.Component {
  render() {
    return (
      <div className="zone section-under-nav">
        <div className="tile-align">
          <div className="left-side-tile">
            <div className="big-box" id="big-box-top">
              <img
                src="https://dsonskillshare.000webhostapp.com/wp-content/uploads/2019/11/Tennis.jpg"
                width={250}
                height={150}
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
              <p id="post">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
                tempus tincidunt porta. Fusce purus augue, fringilla et
                hendrerit eu, semper eget lectus. Maecenas at felis tortor.
                Vivamus porta, leo a lobortis placerat, est lorem tempor velit,
                at commodo nisl neque sed magna. Aliquam erat volutpat. Sed at
                pellentesque eros. Pellentesque faucibus condimentum ligula sit
                amet imperdiet. Etiam sollicitudin, nisi eu sollicitudin
                commodo, eros lectus tempus massa, sit amet convallis ipsum arcu
                eu eros. Nunc malesuada dapibus nulla nec condimentum. Nulla
                consectetur quam magna, at congue mauris rutrum rutrum. Mauris
                vitae fermentum ante. Sed lobortis sit amet purus ac aliquam.
                Quisque molestie faucibus tincidunt. Etiam porttitor, mauris id
                facilisis fringilla, diam massa malesuada ante, eu luctus tortor
                justo at justo. Proin eros velit, congue sit amet ligula at,
                rutrum efficitur nulla.
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
                src="https://dsonskillshare.000webhostapp.com/wp-content/uploads/2019/11/Tennis.jpg"
                width={250}
                height={150}
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
                src="https://dsonskillshare.000webhostapp.com/wp-content/uploads/2019/11/Tennis.jpg"
                width={250}
                height={150}
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
