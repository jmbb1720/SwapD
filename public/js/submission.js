// select document then fetch
//construct json object to be sent to app.post!
const form = document.getElementById('form')

// TODO: handle submission
form.addEventListener('submit', (e) => {
    e.preventDefault()

    // const post = {
    //     firstName : document.getElementById('fname').value,
    //     lastName: document.getElementById('lname').value,
    //     dsonEmail: document.getElementById('email').value,
    //     title: document.getElementById('postTit').value,
    //     title_lower: document.getElementById('postTit').value.toLowerCase(),
    //     description: document.getElementById('desc').value,
    //     category: document.getElementById('categories').value,
    //     tags: document.getElementById('tags').value,
    //     image: document.getElementById('fileToUpload').value,
    // }
    // console.log(post)

    //   console.log('onImageLoad', e.target.files[0]);
    let formData = new FormData()
    formData.append("firstName", document.getElementById('fname').value)
    console.log(document.getElementById('fname').value)
    formData.append("lastName", document.getElementById('lname').value)
    formData.append("dsonEmail", document.getElementById('email').value)
    formData.append("title", document.getElementById('postTit').value)
    formData.append("description", document.getElementById('desc').value)
    formData.append("category", document.getElementById('categories').value)
    formData.append("tags", document.getElementById('tags').value)
    formData.append("image", document.getElementById("fileToUpload").value)
    // console.log(formData.get("image"))
    console.log(formData.get("lastName"))

    // let form = new FormData(this.refs.myForm);
    //     form.append('myImage', file);
    //     fetch('/upload-image', {
    //       method: 'POST',
    //       body: form
    //     }).then(res => console.log('res of fetch', res));

    fetch('/posts', 
    {
        method: 'post', 
        // headers: { "Content-Type": "application/json" },
        body: formData
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