import React from "react";
import Nav_bar from "./nav_bar";
import Top_bar from "./top_bar";
import Footer from "./footer";

class Submission extends React.Component {
    render() {
        return (
            <div className="zone section-under-nav grid-wrapper">
                <form id="form" /*target="_blank"*/>
                    <label className="title" htmlFor="fname" encType="multipart/form-data">
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
        );
    }
}

export default Submission;
