import React from "react";
import Nav_bar from "./nav_bar";
import Top_bar from "./top_bar";
import Footer from "./footer";

class Submission extends React.Component {
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
                <form id="form" target="_blank">
                    <label className="title" htmlFor="fname">
                        First name:
          </label>
                    <input
                        type="text"
                        id="fname"
                        name="fname"
                        placeholder="Enter your first name"
                    />
                    <br />
                    <br /> {}
                    <label className="title" htmlFor="lname">
                        Last name:
          </label>
                    <input
                        type="text"
                        id="lname"
                        name="lname"
                        placeholder="Enter your last name"
                    />
                    <br />
                    <br /> {}
                    <label className="title" htmlFor="email">
                        Dickinson email:
          </label>
                    <input
                        style={{
                            width: "180px"
                        }}
                        type="text"
                        id="email"
                        name="email"
                        placeholder="Enter your Dickinson email"
                    />
                    {}
                    <p id="note">
                        (This will not be made public. It is only used for verification
                        purposes)
          </p>
                    <label className="title" htmlFor="post">
                        Post title:
          </label>
                    <input
                        type="text"
                        id="postTit"
                        name="post"
                        placeholder="Enter your post title"
                    />
                    <br />
                    <br /> {}
                    <label className="title" htmlFor="desc">
                        Description:
          </label>
                    <br />
                    <br />
                    <textarea
                        rows={6}
                        cols={100}
                        name="comment"
                        id="desc"
                        form="usrform"
                        defaultValue={"Describe your post..."}
                    />
                    <br />
                    <br />
                    {}
                    <label className="title" htmlFor="image">
                        Image Upload:
          </label>
                    <input type="file" name="fileToUpload" id="fileToUpload" />
                    <input type="submit" defaultValue="Upload Image" name="submit" />
                    <br />
                    <br /> {}
                    <div className="dropdown">
                        <label htmlFor="cate">Category:</label>
                        <button className="dropbtn">
                            Choose a category
              <i className="fa fa-caret-down" />
                        </button>
                        <select name="categories" id="categories">
                            <option value="arts">Arts</option>
                            <option value="academics">Academics</option>
                            <option value="sports">Sports</option>
                            <option value="tech">Technology</option>
                            <option value="fashion">Fashion</option>
                            <option value="culinary">Culinary</option>
                            <option value="others">Others</option>
                        </select>
                        <br />
                        <br /> {}
                        <label class="title" for="tags">Tags:</label>
                        <input type="text" id="tags" name="tags" placeholder="Enter your tags" />
                        <br />
                        <br /> {}
                        <label class="title" for="verif">Verification:</label>
                        <p id="verif">Please answer this question: When was Dickinson College founded?</p>
                        <input type="answer" id="answer" name="answer" placeholder="Enter your answer" />
                        <br />
                        <br /> {}
                        <input type="submit" value="Submit" />
                        <br />
                        <br /> {}
                    </div>{" "}
                    {}
                </form>
            </div>
            </div>
        );
    }
}

export default Submission;
