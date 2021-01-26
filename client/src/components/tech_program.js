import React from "react";

class Tech_Program extends React.Component {
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
            <button className="signup-and-login-button">
              <a id="sign-up" href="/register">
                Register
              </a>
            </button>
            <button className="signup-and-login-button" id="login-button">
              <a id="log-in" href="/login">
                Log In
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
      <div className="zone section-under-nav grid-wrapper">
        <div className="box tile">
          <img
            className="post-image"
            src=""
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
      </div>
    );
  }
}

export default Tech_Program;
