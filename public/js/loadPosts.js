const loadPosts = async () => {
    console.log("Calling loadPosts")
    const posts = await fetch('/posts',
    {
        method: 'get',
        headers: { "Content-Type": "application/json" },
    }).then((res) => {
        return res.json()
    }).catch((e) => {
        console.log(e);
    })
}
module.exports = loadPosts