import React from "react";

class Post extends React.Component {
  render() {
    return (
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
              <span> This area is for name </span>
            </div>
            <div className="comment-main">
              Comment comment comment
              <br />
              Comment comment comment
              <div className="individual-reply">
                <div className="comment-name">
                  <span> This area is for name </span>
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
                  <span> This area is for name </span>
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
              <span> This area is for name </span>
            </div>
            <div className="comment-main">
              Comment comment comment
              <br />
              Comment comment comment
            </div>
            <div className="individual-reply">
              <div className="comment-name">
                <span> This area is for name </span>
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
              <span> This area is for name </span>
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
    );
  }
}

export default Post;
