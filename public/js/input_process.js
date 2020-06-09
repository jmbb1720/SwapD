// select document then fetch
//construct json object to be sent to app.post!
const form = document.getElementById('form')

// TODO: handle submission
form.addEventListener('submit', (e) => {
    e.preventDefault()

    const post = {
        firstName : document.getElementById('fname').textContent,
        lastName: document.getElementById('lname').textContent,
        dsonEmail: document.getElementById('email').textContent,
        title: document.getElementById('postTit').textContent,
        description: document.getElementById('desc').textContent,
        category: document.getElementById('categories').value,
        tags: document.getElementById('tags').textContent,
    }

    console.log('Form submitted!')
    fetch('/posts', {method: 'post', body: post}).then((res) => {
        return res.json()
    }).then((response) => {
        console.log(response)
    }).catch((error) => {
        console.log(error)
    })
}

)