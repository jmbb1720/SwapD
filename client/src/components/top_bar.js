import React from "react";

class Top_bar extends React.Component {
  render() {
    return (
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
    );
  }
}

export default Top_bar;
