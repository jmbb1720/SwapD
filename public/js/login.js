const form = document.getElementById('form')

form.addEventListener('submit', (e) => {
    e.preventDefault()

    const user = {
        dsonEmail: document.getElementById("email").value,
        password: document.getElementById("password").value,
    }
 
    const login = async () => {
        const response =  await fetch('/users/login', 
        {
            method: 'post', 
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(user)
        }).then((res) => {
            return res.json()
        })
        if (Object.keys(response).length) {
            alert("Successful Login!")
            return response
        }
        else {
            alert("Wrong email or password - please try again!")
        }
    }
    login().then((response) => {
        console.log(response)
    }).catch((e) => {
        console.log(e)
    })
})