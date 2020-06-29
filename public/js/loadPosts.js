const loadPosts = async () => {
    console.log("Calling loadPosts")
    const posts = await fetch('/posts',
    {
        method: 'get',
        headers: { "Content-Type": "application/json" },
    }).then((res) => {
        return res.json()
    })
    // const response =  await fetch('/users/login', 
    // {
    //     method: 'post', 
    //     headers: { "Content-Type": "application/json" },
    //     body: JSON.stringify(user)
    // }).then((res) => {
    //     return res.json()
    // })
    // if (Object.keys(response).length) {
    //     alert("Successful Login!")
    //     return response
    // }
    // else {
    //     alert("Wrong email or password - please try again!")
    // }
    try {
        console.log(posts)
    }
    catch(e) {
        console.log(e)
    }
}