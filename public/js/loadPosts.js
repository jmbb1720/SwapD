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