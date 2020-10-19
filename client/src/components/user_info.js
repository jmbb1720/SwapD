import React from "react";
import './user_info.scss';

class User_Info extends React.Component {
  render() {
    return (
      <div className="zone section-under-nav">
        <div className="tile-align-user-info">
          <div className="left-side-tile-user-info">
            <div className="big-box-left">
              <img
                id="avatar"
                src="https://images.unsplash.com/photo-1448376561459-dbe8868fa34c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=900&q=60"
                alt="avatar"
                style={{
                  width: "100%"
                }}
              />
              <h1>Firstname Lastname</h1>
              <p className="general-info">Student, Class of (Year)</p>
              <p className="general-info">Computer Science Major</p>
              <p className="general-info">Dickinson College</p>
              <p className="description-info">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Pellentesque dignissim neque porta nunc laoreet, ut placerat
                nulla feugiat. Donec eget blandit tellus, vitae pellentesque
                risus. Nullam mattis auctor ligula, sed lobortis purus. Fusce
                dictum, mi eu tempus ultrices, dolor massa pretium lectus, at
                ullamcorper purus arcu ac mauris. Sed vitae iaculis mi. Mauris
                nec purus fermentum, vulputate metus vel, semper augue. Proin eu
                tincidunt metus. Sed ac nunc ex. Sed rhoncus nunc nec vulputate
                bibendum. Fusce ut nisl vitae metus gravida tristique. Aliquam
                ac quam vitae justo lobortis condimentum et nec orci. Etiam non
                sollicitudin ante.
              </p>
              <div className="icon-contact-container">
                <a href>
                  <img
                    className="icon-contact"
                    id="email-contact"
                    src="https://image.flaticon.com/icons/svg/732/732223.svg"
                  />
                </a>
                <a href>
                  <img
                    className="icon-contact"
                    id="facebook-contact"
                    src="https://image.flaticon.com/icons/svg/1384/1384053.svg"
                  />
                </a>
                <a href>
                  <img
                    className="icon-contact"
                    id="insta-contact"
                    src="https://image.flaticon.com/icons/svg/733/733558.svg"
                  />
                </a>
              </div>
            </div>
          </div>{" "}
          {}
          <div className="right-side-tile-user-info">
            <h2
              style={{
                textAlign: "center",
                lineHeight: "0.8em"
              }}
            >
              Posted by (username)
            </h2>
            <div className="side-box-container">
              <div className="box-user-info side-box-user-info">
                <img
                  src="https://images.unsplash.com/photo-1493770348161-369560ae357d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=900&q=60"
                  width={250}
                  height={150}
                />
                <h1>Arts</h1>
                <div className="icon-text-posted-by-someone">
                  <img
                    className="icon-posted-by-someone"
                    src="https://image.flaticon.com/icons/svg/1717/1717787.svg"
                  />
                  <p className="text-posted-by-someone">
                    Posted on 23rd June 2020 by (username)
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
              <div className="box-user-info side-box-user-info">
                <img
                  src="https://images.unsplash.com/photo-1485546784815-e380f3297414?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=900&q=60"
                  width={250}
                  height={150}
                />
                <h1>Arts</h1>
                <div className="icon-text-posted-by-someone">
                  <img
                    className="icon-posted-by-someone"
                    src="https://image.flaticon.com/icons/svg/1717/1717787.svg"
                  />
                  <p className="text-posted-by-someone">
                    Posted on 23rd June 2020 by (username)
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
              <div className="box-user-info side-box-user-info">
                <img
                  src="https://images.unsplash.com/photo-1485546784815-e380f3297414?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=900&q=60"
                  width={250}
                  height={150}
                />
                <h1>Arts</h1>
                <div className="icon-text-posted-by-someone">
                  <img
                    className="icon-posted-by-someone"
                    src="https://image.flaticon.com/icons/svg/1717/1717787.svg"
                  />
                  <p className="text-posted-by-someone">
                    Posted on 23rd June 2020 by (username)
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
              <div className="box-user-info side-box-user-info">
                <img
                  src="https://images.unsplash.com/photo-1485546784815-e380f3297414?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=900&q=60"
                  width={250}
                  height={150}
                />
                <h1>Arts</h1>
                <div className="icon-text-posted-by-someone">
                  <img
                    className="icon-posted-by-someone"
                    src="https://image.flaticon.com/icons/svg/1717/1717787.svg"
                  />
                  <p className="text-posted-by-someone">
                    Posted on 23rd June 2020 by (username)
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
            <div
              style={{
                display: "flex",
                justifyContent: "center"
              }}
            >
              <button className="submit-post-button">
                <a
                  style={{
                    textDecoration: "none",
                    color: "white",
                    padding: "0px 10px 0px 10px"
                  }}
                  href
                >
                  More
                </a>
              </button>
            </div>
          </div>{" "}
          {}
        </div>{" "}
        {}
      </div>
    );
  }
}

export default User_Info;
