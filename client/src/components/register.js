import React from "react";
import './register_login.scss';

class Register extends React.Component {
  render() {
    return (
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
    );
  }
}

export default Register;
