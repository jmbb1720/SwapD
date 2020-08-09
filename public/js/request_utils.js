/**
Get all posts from the database
TODO: limit the number of retrieved posts to the last 10-15 only? 
[give user a load more option to get older posts]
@param id post id
@param updates a JSON object consisting of fields and values to update
 */
const retrievePosts = async () => {
    try {
        const response = await fetch('/posts',
            {
                method: 'get',
                headers: { "Content-Type": "application/json" },
            })
        const posts = await response.json()
        return posts
    }
    catch (e) {
        console.log(e)
    }
}

/**
Get a single post by id
@param id post id
 */
const getSinglePostById = async(id) => {
    try {
        const response = await fetch('/posts/' + id,
            {
                method: 'get',
                headers: { "Content-Type": "application/json" },
            })
        const post = await response.json()
        return post
    }
    catch (e) {
        console.log(e)
    }
}

/**
Update a single post
@param id post id
@param updates a JSON object consisting of fields and values to update
 */
const updatePost = async(id, updates) => {
    console.log(JSON.stringify(updates))
    try {
        const response = await fetch('/posts/' + id,
            {
                method: 'PATCH',
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(updates)
            })
        const post = await response.json()
        return post
    }
    catch (e) {
        console.log(e)
    }
}

/**
Delete a single post
@param id post id
 */
const deletePost = async(id) => {
    try {
        const response = await fetch('/posts/' + id,
            {
                method: 'delete',
                headers: { "Content-Type": "application/json" },
            })
        const post = await response.json()
        return post
    }
    catch (e) {
        console.log(e)
    }
}

/**
Load the full post to a page
 */
const loadPostsToPage = async () => {
    //EXPLANATION:
    //loadPostsToPage is an asynchronous function, so it will return a promise
    //a promise specifies that the asynchronous function will return a needed value sometime in the future

    //Read more about aysnchronous JS, Promises, and the async-await patterns here: 
    // https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Asynchronous/Introducing
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise
    //(most of the time, so we don't need to write promises on our own). But we need to know
    //when a function returns a promise so we can handle it appropriately.

    //in an async function, we use await to wait for the result of another async function
    //before continuing execution
    const posts = await retrievePosts()

    //Use posts to update HTML below...
    console.log(posts)
}

/**
Load posts to index page
TODO: load only the most recent 10-15 posts
 */
const loadIndex = async () => {
    const posts = await retrievePosts()

    //Use posts to update HTML below...
    console.log(posts)
    for (var i = 0; i < posts.length; i++) {
        // Display the title
        document.getElementById("post-title-"+i).innerHTML = posts[i].title;
        // Display the first name and last name of the user
        document.getElementById("text-posted-by-someone-"+i).innerHTML = posts[i].firstName + " " + posts[i].lastName;
        // Display the description of the post. Limit the number of characters without cutting the words.
        var description = posts[i].description;
        var trimmedString = description.substr(0, 100);
        if(description.length > trimmedString.length){
            trimmedString = trimmedString.substr(0, Math.min(trimmedString.length, trimmedString.lastIndexOf(" ")))
            document.getElementById("post-"+i).innerHTML = trimmedString + '...';
        } else {
            document.getElementById("post-"+i).innerHTML = description;
        }
        
    }
}