import React from "react";

class User_Info extends React.Component {
  render() {
    return (
      <div>
      <div className="top-bar sticky">
        <div className="logo-slogan-and-signup-container">
          <div className="fixed-width">
            <a href="/" id="logo">
              <img src width={90} height={50} alt="SwapD-logo" />
              {}
            </a>
            <div id="slogan">Connecting the community one skill at a time</div>
          </div>
          <div className="signup-and-login-container">
          <button class='user-profile-button'>
            <a id='sign-up' href="user-info">
              <img id='user-profile' src="https://www.flaticon.com/svg/vstatic/svg/847/847969.svg?token=exp=1610723078~hmac=2eb409cdf3acef0180f2156034eaeffd"></img>
            </a>
          </button>
          </div>
        </div>
      </div>
      <nav className="zone nav-bar">
      <ul className="main-nav">
        <li id="home">
          <a href="/">Home</a>
        </li>
        <li id="home">
          <div className="dropdown">
            {}
            <button className="drop-button">Arts</button>
            <div className="dropdown-content">
              <a href="/arts-studio">Studio Art</a>
              <a href="/arts-studio">Art History</a>
              <a href="/arts-studio">Art Business</a>
            </div>
          </div>
        </li>
        <li id="home">
          <div className="dropdown">
            <button className="drop-button">Academics</button>
            <div className="dropdown-content">
              <a href>Peer Tutor</a>
              <a href>Language</a>
              <a href>Study Strategy</a>
            </div>
          </div>
        </li>
        <li id="home">
          <div className="dropdown">
            <button className="drop-button">Sports</button>
            <div className="dropdown-content">
              <a href="/sports-tennis">Tennis</a>
              <a href="/sports-tennis">Basketball</a>
              <a href="/sports-tennis">Badminton</a>
              <a href="/sports-tennis">Baseball</a>
            </div>
          </div>
        </li>
        <li id="home">
          <div className="dropdown">
            <button className="drop-button">Technology</button>
            <div className="dropdown-content">
              <a href="/tech-program">Programming</a>
              <a href="/tech-program">A</a>
              <a href="/tech-program">B</a>
              <a href="/tech-program">C</a>
            </div>
          </div>
        </li>
        <li id="home">
          <div className="dropdown">
            <button className="drop-button">Fashion</button>
            <div className="dropdown-content">
              <a href>Sewing</a>
              <a href>Fashion Illustrating</a>
            </div>
          </div>
        </li>
        <li id="home">
          <div className="dropdown">
            <button className="drop-button">Culinary</button>
            <div className="dropdown-content">
              <a href>Cooking</a>
              <a href>Food Tour</a>
            </div>
          </div>
        </li>
        <li id="home">
          <a href>Career Tips</a>
        </li>
        <li id="home">
          <a href>Other</a>
        </li>
        <li id="home">
          <a href>Get Started</a>
        </li>
        <li id="submit-post">
          <button className="submit-post-button">
            <a href="/submit">Submit Post</a>
          </button>
        </li>
      </ul>
      <div className="burger">
        <div className="line1" />
        <div className="line2" />
        <div className="line3" />
      </div>
    </nav>
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
      </div>
    );
  }
}

export default User_Info;
