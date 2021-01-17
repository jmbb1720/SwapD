import React from "react";
import { useHistory } from "react-router-dom";

const loadPosts = require('../js/loadPosts.js') //TODO

function RedirectLink() {
  const history = useHistory()

  const routeChange = () => {
    let path = '/post'
    history.push(path)
  }
  return (
    <img
        className="icon-continue-reading"
        src="https://image.flaticon.com/icons/svg/216/216680.svg"
        onClick={routeChange}
      />
  );
}
class Thumbnail extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            fullList: []
        }
    }

    async callAPI() {
        const list = await loadPosts()
    //extract college name from this list, put in uniList
        console.log(list)
        const tempList = []
        list.forEach((post) => {
            console.log(post)
            tempList.push({'title': post.title_lower, 'desc': post.description})
        })
        this.setState({fullList: tempList.slice(0,1)})
    }

    componentDidMount() {
        this.callAPI()
    }

    render() {
      return (
        // need redirection to thumbnail
        // todo: update name from post data
        <div className="box tile">
          <img
            className="post-image"
            src=""
          />
          {this.state.fullList.map(post => <h1 id="post">{post.title}</h1>)}
          <div className="icon-text-posted-by-someone">
            <img
              className="icon-posted-by-someone"
              src="https://image.flaticon.com/icons/svg/1717/1717787.svg"
            />
            <p className="text-posted-by-someone">
            </p>
          </div>
          {this.state.fullList.map(post => <p id="post">{post.desc}</p>)}
          {}
          <RedirectLink/>
          {}
        </div>
      )
    }

}

class Home extends React.Component {
  render() {
    return (
        <div className="zone section-under-nav grid-wrapper">
          <Thumbnail/>
          <Thumbnail/>
          <Thumbnail/>
          <Thumbnail/>
          <Thumbnail/>
          <Thumbnail/>
          <Thumbnail/>
          <Thumbnail/>
        </div>
    /*         
      // <div className="zone section-under-nav grid-wrapper">
      // <div className="box tile">
      //     <img
      //       className="post-image"
      //       src="https://dsonskillshare.000webhostapp.com/wp-content/uploads/2019/11/Tennis.jpg"
      //     />
      //     <h1>Tennis</h1>
      //     <div className="icon-text-posted-by-someone">
      //       <img
      //         className="icon-posted-by-someone"
      //         src="https://image.flaticon.com/icons/svg/1717/1717787.svg"
      //       />
      //       <p className="text-posted-by-someone">
      //         Posted on 21st November 2019 by Hoang
      //       </p>
      //     </div>
      //     <p id="post">Awesome lesson Contact: 66775508</p>
      //     {}
      //     <a href="/tennis">
      //       <img
      //         className="icon-continue-reading"
      //         src="https://image.flaticon.com/icons/svg/216/216680.svg"
      //       />
      //     </a>
      //     {} 

      //   <Thumbnail>
      //   </div>
      //   <div className="box tile">
      //     <img
      //       className="post-image"
      //       src="https://dsonskillshare.000webhostapp.com/wp-content/uploads/2019/11/america.jpg"
      //     />
      //     <h1>Java Lessons</h1>
      //     <div className="icon-text-posted-by-someone">
      //       <img
      //         className="icon-posted-by-someone"
      //         src="https://image.flaticon.com/icons/svg/1717/1717787.svg"
      //       />
      //       <p className="text-posted-by-someone">
      //         Posted on 21st November 2019 by Hoang
      //       </p>
      //     </div>
      //     <p id="post">Come learn Java!</p>
      //     {}
      //     <a>
      //       <img
      //         className="icon-continue-reading"
      //         src="https://image.flaticon.com/icons/svg/216/216680.svg"
      //       />
      //     </a>
      //     {}
      //   </div>
      //   <div className="box tile">
      //     <img
      //       className="post-image"
      //       src="https://images.unsplash.com/photo-1588441259691-b04ba5e4ddf5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=900&q=60"
      //     />
      //     <h1>Arts</h1>
      //     <div className="icon-text-posted-by-someone">
      //       <img
      //         className="icon-posted-by-someone"
      //         src="https://image.flaticon.com/icons/svg/1717/1717787.svg"
      //       />
      //       <p className="text-posted-by-someone">
      //         Posted on 21st November 2019 by Hoang
      //       </p>
      //     </div>
      //     <p id="post">Come learn Arts!</p>
      //     {}
      //     <a>
      //       <img
      //         className="icon-continue-reading"
      //         src="https://image.flaticon.com/icons/svg/216/216680.svg"
      //       />
      //     </a>
      //     {}
      //   </div>
      //   <div className="box tile">
      //     <img
      //       className="post-image"
      //       src="https://dsonskillshare.000webhostapp.com/wp-content/uploads/2019/11/america.jpg"
      //     />
      //     <h1>Java Lessons</h1>
      //     <div className="icon-text-posted-by-someone">
      //       <img
      //         className="icon-posted-by-someone"
      //         src="https://image.flaticon.com/icons/svg/1717/1717787.svg"
      //       />
      //       <p className="text-posted-by-someone">
      //         Posted on 21st November 2019 by Hoang
      //       </p>
      //     </div>
      //     <p id="post">Come learn Java!</p>
      //     {}
      //     <a>
      //       <img
      //         className="icon-continue-reading"
      //         src="https://image.flaticon.com/icons/svg/216/216680.svg"
      //       />
      //     </a>
      //     {}
      //   </div>
      //   <div className="box tile">
      //     <img
      //       className="post-image"
      //       src="https://dsonskillshare.000webhostapp.com/wp-content/uploads/2019/11/Tennis.jpg"
      //     />
      //     <h1>Tennis</h1>
      //     <div className="icon-text-posted-by-someone">
      //       <img
      //         className="icon-posted-by-someone"
      //         src="https://image.flaticon.com/icons/svg/1717/1717787.svg"
      //       />
      //       <p className="text-posted-by-someone">
      //         Posted on 21st November 2019 by Hoang
      //       </p>
      //     </div>
      //     <p id="post">Awesome lesson Contact: 66775508</p>
      //     {}
      //     <a href="tennis.html">
      //       <img
      //         className="icon-continue-reading"
      //         src="https://image.flaticon.com/icons/svg/216/216680.svg"
      //       />
      //     </a>
      //     {}
      //   </div>
      //   <div className="box tile">
      //     <img
      //       className="post-image"
      //       src="https://dsonskillshare.000webhostapp.com/wp-content/uploads/2019/11/america.jpg"
      //     />
      //     <h1>Java Lessons</h1>
      //     <div className="icon-text-posted-by-someone">
      //       <img
      //         className="icon-posted-by-someone"
      //         src="https://image.flaticon.com/icons/svg/1717/1717787.svg"
      //       />
      //       <p className="text-posted-by-someone">
      //         Posted on 21st November 2019 by Hoang
      //       </p>
      //     </div>
      //     <p id="post">Come learn Java!</p>
      //     {}
      //     <a>
      //       <img
      //         className="icon-continue-reading"
      //         src="https://image.flaticon.com/icons/svg/216/216680.svg"
      //       />
      //     </a>
      //     {}
      //   </div>
      //   <div className="box tile">
      //     <img
      //       className="post-image"
      //       src="https://images.unsplash.com/photo-1588441259691-b04ba5e4ddf5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=900&q=60"
      //     />
      //     <h1>Arts Lessons</h1>
      //     <div className="icon-text-posted-by-someone">
      //       <img
      //         className="icon-posted-by-someone"
      //         src="https://image.flaticon.com/icons/svg/1717/1717787.svg"
      //       />
      //       <p className="text-posted-by-someone">
      //         Posted on 21st November 2019 by Hoang
      //       </p>
      //     </div>
      //     <p id="post">Come learn Arts!</p>
      //     {}
      //     <a>
      //       <img
      //         className="icon-continue-reading"
      //         src="https://image.flaticon.com/icons/svg/216/216680.svg"
      //       />
      //     </a>
      //     {}
      //   </div>
      //   <div className="box tile">
      //     <img
      //       className="post-image"
      //       src="https://dsonskillshare.000webhostapp.com/wp-content/uploads/2019/11/america.jpg"
      //     />
      //     <h1>Java Lessons</h1>
      //     <div className="icon-text-posted-by-someone">
      //       <img
      //         className="icon-posted-by-someone"
      //         src="https://image.flaticon.com/icons/svg/1717/1717787.svg"
      //       />
      //       <p className="text-posted-by-someone">
      //         Posted on 21st November 2019 by Hoang
      //       </p>
      //     </div>
      //     <p id="post">Come learn Java!</p>
      //     {}
      //     <a>
      //       <img
      //         className="icon-continue-reading"
      //         src="https://image.flaticon.com/icons/svg/216/216680.svg"
      //       />
      //     </a>
      //     {}
      //   </div>
      // </div> */
    );
  }
}

export default Home;
