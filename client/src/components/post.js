import React from "react";

class Post extends React.Component {
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
      <div className="big-post">
        <div id="post-test1" className="post">
          <img src="" />
          <h1 className="post-title"></h1>
          <p></p>
          <p className="post-content">
          </p>
        </div>
        <div className="delete">
          <button
            className="button-post1"
            onclick="document.getElementById('delete-confirmation').style.display='block'"
          >
            {" "}
            Delete Post
          </button>
        </div>
        <div id="delete-confirmation" className="modal">
          <form className="modal-content" action>
            <h3>Are you sure you want to delete your post?</h3>
            <div className="confirmation-button">
              <button
                className="button-post1"
                type="button"
                onclick="document.getElementById('delete-confirmation').style.display='none'"
              >
                {" "}
                Cancel{" "}
              </button>
              <button
                className="button-post1"
                type="button"
                onclick="document.getElementById('delete-confirmation').style.display='none'"
              >
                {" "}
                Delete{" "}
              </button>
            </div>
          </form>
        </div>
        {}
        <div className="update">
          <button className="button-post1" onclick="openPopup()">
            {" "}
            Update Post Test
          </button>
        </div>
        <div id="update-confirmation" className="modal">
          <form className="modal-content" action>
            <span
              className="close"
              type="button"
              onclick="document.getElementById('update-confirmation').style.display='none'"
            >
              {" "}
              X{" "}
            </span>
            <label className="title" htmlFor="post">
              Post title:
            </label>
            <input
              onclick="getPostTitle()"
              id="post-title-update"
              rows={1}
              cols={100}
              name="post-title"
              form="usrform"
            />
            Click to see your current post title
            <br />
            <br />
            <label className="title" htmlFor="desc">
              Description:
            </label>
            <br />
            <br />
            <input
              onclick="getPost()"
              id="post-content-update"
              rows={6}
              cols={100}
              name="comment"
              form="usrform"
            />
            Click to see your current post contents
            <br />
            <br />
            {}
            <input
              type="submit"
              defaultValue="Submit"
              className="button-post1"
            />
            <br />
            <br />
          </form>
        </div>
        <div className="comment-box">
          <form action id="comment">
            <div className="name-input">
              Name: <input type="text" name="username" />
            </div>
            <div className="email-input">
              Dickinson Email: <input type="email" name="email" />
            </div>
            <div className="comment-input">
              Leave your comment here:{" "}
              <input type="text" name="comment" id="comment-space" />
            </div>
            <div className>
              <input type="submit" className="button-post1" />
            </div>
          </form>
        </div>
        <div className="show-comment comment-box">
          <div id="comment_1" className="individual-comment">
            <div className="comment-name">
            <div class='user-icon-comment'>
            <button class='user-profile-button-comment'>
            <a id='sign-up' href="user-info">
              <img id='user-profile' src="https://www.flaticon.com/svg/vstatic/svg/847/847969.svg?token=exp=1611499827~hmac=a1f18eef41c128adf06418e184fecab7"></img>
            </a>
          </button>
              <span> This area is for name </span>
            </div>
            </div>
            <div className="comment-main">
              Comment comment comment
              <br />
              Comment comment comment
              <div className="individual-reply">
                <div className="comment-name">
                <div class='user-icon-comment'>
            <button class='user-profile-button-comment'>
            <a id='sign-up' href="user-info">
              <img id='user-profile' src="https://www.flaticon.com/svg/vstatic/svg/847/847969.svg?token=exp=1611499827~hmac=a1f18eef41c128adf06418e184fecab7"></img>
            </a>
          </button>
              <span> This area is for name </span>
            </div>
                </div>
                <div className="comment-main comment-secondary">
                  Comment comment comment reply reply Reply
                  <br />
                  reply reply
                  <br />
                  comment
                </div>
              </div>
              <div className="individual-reply">
                <div className="comment-name">
                <div class='user-icon-comment'>
            <button class='user-profile-button-comment'>
            <a id='sign-up' href="user-info">
              <img id='user-profile' src="https://www.flaticon.com/svg/vstatic/svg/847/847969.svg?token=exp=1611499827~hmac=a1f18eef41c128adf06418e184fecab7"></img>
            </a>
          </button>
              <span> This area is for name </span>
            </div>
                </div>
                <div className="comment-main comment-secondary">
                  Comment comment comment reply reply Reply
                  <br />
                  reply reply
                  <br />
                  comment
                </div>
              </div>
            </div>
            <form className="comment-reply" action>
              <input
                type="text"
                className="reply-box"
                id="reply"
                name="reply-comment"
                defaultValue="Leave your reply"
              />
              <input
                type="submit"
                defaultValue="Reply"
                className="button-post1"
              />
              <br />
              <br />
            </form>
          </div>
          <div id="comment_2" className="individual-comment">
            <div className="comment-name">
            <div class='user-icon-comment'>
            <button class='user-profile-button-comment'>
            <a id='sign-up' href="user-info">
              <img id='user-profile' src="https://www.flaticon.com/svg/vstatic/svg/847/847969.svg?token=exp=1611499827~hmac=a1f18eef41c128adf06418e184fecab7"></img>
            </a>
          </button>
              <span> This area is for name </span>
            </div>
            </div>
            <div className="comment-main">
              Comment comment comment
              <br />
              Comment comment comment
            </div>
            <div className="individual-reply">
              <div className="comment-name">
              <div class='user-icon-comment'>
            <button class='user-profile-button-comment'>
            <a id='sign-up' href="user-info">
              <img id='user-profile' src="https://www.flaticon.com/svg/vstatic/svg/847/847969.svg?token=exp=1611499827~hmac=a1f18eef41c128adf06418e184fecab7"></img>
            </a>
          </button>
              <span> This area is for name </span>
            </div>
              </div>
              <div className="comment-main comment-secondary">
                Comment comment comment reply reply Reply
                <br />
                reply reply
                <br />
                comment
              </div>
            </div>
            <form className="comment-reply" action>
              <input
                type="text"
                className="reply-box"
                id="reply"
                name="reply-comment"
                defaultValue="Leave your reply"
              />
              <input
                type="submit"
                defaultValue="Reply"
                className="button-post1"
              />
              <br />
              <br />
            </form>
          </div>
          <div id="comment_2" className="individual-comment">
            <div className="comment-name">
            <div class='user-icon-comment'>
            <button class='user-profile-button-comment'>
            <a id='sign-up' href="user-info">
              <img id='user-profile' src="https://www.flaticon.com/svg/vstatic/svg/847/847969.svg?token=exp=1611499827~hmac=a1f18eef41c128adf06418e184fecab7"></img>
            </a>
          </button>
              <span> This area is for name </span>
            </div>
            </div>
            <div className="comment-main">
              Comment comment comment
              <br />
              Comment comment comment
            </div>
            <form className="comment-reply" action>
              <input
                type="text"
                className="reply-box"
                id="reply"
                name="reply-comment"
                defaultValue="Leave your reply"
              />
              <input
                type="submit"
                defaultValue="Reply"
                className="button-post1"
              />
              <br />
              <br />
            </form>
          </div>
        </div>
        <a href="art-page.html">
          <button className="button-post1">More in Art</button>{" "}
        </a>
      </div>
      </div>
    );
  }
}

export default Post;
