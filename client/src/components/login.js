import React from "react";
import './register_login.scss';

class Login extends React.Component {
  render() {
    return (
      <div className="zone section-under-nav grid-wrapper-register-login">
        <div className="box tile">
          <form id="form" target="_blank">
            <div className="register-container">
              <a href="/" id="logo">
                <img src width={90} height={50} alt="SwapD-logo" />
              </a>
              <h1>Sign In</h1>
              <hr />
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
              <label>
                <input
                  type="checkbox"
                  defaultChecked="checked"
                  name="remember"
                />{" "}
                Remember me
              </label>
              <br />
              <br />
              {}
              <input
                className="submit-post-button"
                id="submit-register"
                type="submit"
                defaultValue="Submit"
              />
              <br />
              <br />
              {}
              <a id="forgot-your-pw" href>
                Forgot Your Password?
              </a>
            </div>{" "}
            {}
          </form>
        </div>
      </div>
    );
  }
}

export default Login;
