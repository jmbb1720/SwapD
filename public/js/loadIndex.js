// import {loadPost} from './loadPost.js';
const loadPost = require('loadPost.js')

const loadIndex = async () => {
    // console.log("a");
    const response = loadPost();
    // console.log(response);

    // document.getElementById("post-title").innerHTML = document.getElementById("fname").value;
    document.getElementById("post-title").innerHTML = response.get('title');
    document.getElementById("text-posted-by-someone").innerHTML = response.get('firstName') + " " + response.get('lastName');
    document.getElementById("post").innerHTML = response.get('description');
    // fetch('/posts',
    //     {
    //         method: 'get',
    //         headers: { "Content-Type": "application/json" },
    //     })
    //     .then(function (response) {
    //         return response.json();
    //     })
    //     .then(function (data) {
    //         appendData(data);
    //     })
    //     .catch(function (err) {
    //         console.log('error: ' + err);
    //     });

    // function appendData(data) {
    //     const posts = await loadIndex()
    //     obj = JSON.parse(posts);
    //     document.getElementById("post-title") = data[1].title;
        // var mainContainer = document.getElementById("post-title");
        // for (var i = 0; i < data.length; i++) {
        //     mainContainer.innerHTML = data[i].title;
        //     mainContainer.appendChild(div);
        // }
    // }
}

module.exports = loadIndex;