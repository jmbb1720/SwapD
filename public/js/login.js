const form = document.getElementById('form')

form.addEventListener('submit', (e) => {
    e.preventDefault()

    const user = {
        dsonEmail: document.getElementById("email").value,
        password: document.getElementById("password").value,
    }
 
    fetch('/users/login', 
    {
        method: 'post', 
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(user)
    }).then((res) => {
        return res.json()
    }).then((response) => {
        if (Object.keys(response).length) {
            alert("Successful Login!")
        }
        else {
            alert("Wrong email or password - please try again!")
        }
        // console.log(response)
    }).catch((error) => {
        alert(error)
    })
})