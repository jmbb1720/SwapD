// select document then fetch
//construct json object to be sent to app.post!
const form = document.getElementById('form')

// TODO: handle submission
form.addEventListener('submit', (e) => {
    e.preventDefault()

    const post = {
        firstName : document.getElementById('fname').value,
        lastName: document.getElementById('lname').value,
        dsonEmail: document.getElementById('email').value,
        title: document.getElementById('postTit').value,
        title_lower: document.getElementById('postTit').value.toLowerCase(),
        description: document.getElementById('desc').value,
        category: document.getElementById('categories').value,
        tags: document.getElementById('tags').value,
    }

    fetch('/posts', 
    {
        method: 'post', 
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(post)
    }).then((res) => {
        return res.json()
    }).then((response) => {
        console.log(response)
    }).catch((error) => {
        alert(error.message)
        console.log(error)
    })
}

)