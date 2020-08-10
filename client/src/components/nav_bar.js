import React from "react";

class Nav_bar extends React.Component {
  render() {
    return (
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
                <a href="/post">Studio Art</a>
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
    );
  }
}

export default Nav_bar;
