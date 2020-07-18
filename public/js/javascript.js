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

const template = document.querySelector('template');
const node = document.importNode(template.content, true);
document.body.appendChild(node);

$("#featured-tab").click(function(){
    $(".tab").removeClass("active");
    $("#featured-tab").addClass("active");
    $('table tr > td:nth-child(2), table tr > th:nth-child(2)').hide();
    $('table tr > td:nth-child(3), table tr > th:nth-child(3)').show();
    $('table tr > td:nth-child(4), table tr > th:nth-child(4)').hide();           
});

$("#premium-tab").click(function(){
    $(".tab").removeClass("active");
    $("#premium-tab").addClass("active");
    $('table tr > td:nth-child(2), table tr > th:nth-child(2)').hide();
    $('table tr > td:nth-child(3), table tr > th:nth-child(3)').hide(); 
    $('table tr > td:nth-child(4), table tr > th:nth-child(4)').show();                     
});
//document.getElementById('update-confirmation').style.display='block'