const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.main-nav');
    const navLinks = document.querySelectorAll('.main-nav li');

    //Toggle Nav
    burger.addEventListener('click', () => {
        nav.classList.toggle('nav-active');
        //Animate Links
        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = '';
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7}s`;
            }
        });
    });
}

navSlide();

//Update Post
function getPostTitle() {
    var x = document.getElementById("post-test1").getElementsByClassName("post-title")[0].innerHTML;
    document.getElementById("post-title-update").innerHTML = x;
}

function getPost() {
    var x = document.getElementById("post-test1").getElementsByClassName("post-content")[0].innerHTML;
    document.getElementById("post-content-update").innerHTML = x;
}

function openPopup() {
    var x = document.getElementById("update-confirmation");
    x.style.display = 'block';
    getPostTitle();
    getPost();
}

//document.getElementById('update-confirmation').style.display='block'