const form = document.getElementById('form')

form.addEventListener('submit', (e) => {
    e.preventDefault()

    var password = document.getElementById("password").value
    var pwConfirm = document.getElementById("confirm-password").value
    if (password !== pwConfirm) {
        return alert("Passwords do not match!")
    }

    var role = document.getElementById("learner-instructor").value
    var isLearner = true
    var isInstructor = true
    if (role == "learner") {
        isInstructor = false
    }
    else if (role == "instructor") {
        isLearner = false
    }
    const user = {
        firstName : document.getElementById('fname').value,
        lastName: document.getElementById('lname').value,
        dsonEmail: document.getElementById('email').value,
        password: document.getElementById("password").value,
        isLearner,
        isInstructor
    }

    fetch('/users', 
    {
        method: 'post', 
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(user)
    }).then((res) => {
        return res.json()
    }).then((response) => {
        const keys = Object.keys(response)
        if (!keys.includes("_id")) {
            if (keys.includes("message")) { // validator error
                alert(response.message)
            }
            else { //MongoDB error
                alert("Email address used! Please try a different email address!")
            }
        }
        else {
            alert("Successful registration!")
        }
        // console.log(response)
    }).catch((error) => {
        console.log(error)
    })
}

)