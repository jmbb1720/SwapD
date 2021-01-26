import React from "react";

class Register extends React.Component {
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
      <div className="zone section-under-nav grid-wrapper-register-login">
        <div className="box tile">
          <form id="form" target="_blank">
            <div className="register-container">
              <a href="/" id="logo">
                <img src width={90} height={50} alt="SwapD-logo" />
              </a>
              <h1>Register</h1>
              <hr />
              <div className="first-last-name-container">
                {}
                <input
                  type="text"
                  id="fname"
                  name="fname"
                  placeholder="Your First Name"
                />
                {}
                {}
                <input
                  type="text"
                  id="lname"
                  name="lname"
                  placeholder="Your Last Name"
                />
                {}
              </div>
              <br />
              <br />
              {}
              <input
                type="text"
                id="email"
                name="email"
                placeholder="Your Dickinson Email"
              />
              <br />
              <br />
              {}
              {}
              <input
                type="password"
                id="password"
                name="password"
                placeholder="Password"
              />
              <br />
              <br />
              {}
              {}
              <input
                type="password"
                id="confirm-password"
                name="cfpassword"
                placeholder="Confirm Password"
              />
              <br />
              <br />
              {}
              <div className="learner-instructor">
                <p id="note">
                  * Please answer this question: Are you signing up to be a
                  learner or an instructor?
                </p>
                <select id="learner-instructor" name="learner-instructor">
                  <option value="learner">Learner</option>
                  <option value="instructor">Instructor</option>
                  <option value="both">Both</option>
                </select>
                <br />
                <br />
              </div>
              <label>
                <input
                  type="checkbox"
                  defaultChecked="checked"
                  name="remember"
                />{" "}
                Remember me
              </label>
              {}
              <p>
                By registering an account, you agree to our{" "}
                <a
                  href
                  style={{
                    color: "#b81c36"
                  }}
                >
                  Terms & Privacy
                </a>
                .
              </p>
              <input
                className="submit-post-button"
                id="submit-register"
                type="submit"
                defaultValue="Submit"
              />
              <br />
              <br />
              {}
            </div>{" "}
            {}
          </form>
        </div>
      </div>
      </div>
    );
  }
}

export default Register;
