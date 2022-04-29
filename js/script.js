let navbarDiv = document.querySelector('.navbar');
const navbarCollapseDiv = document.getElementById('navbar-collapse');
const navbarShowBtn = document.getElementById('navbar-show-btn');
const navbarCloseBtn = document.getElementById('navbar-close-btn');
window.addEventListener('scroll', () => {
    if (document.body.scrollTop > 40 || document.documentElement.scrollTop > 40) {
        navbarDiv.classList.add('navbar-cng');
    }
    else {
        navbarDiv.classList.remove('navbar-cng');
    }
});

// show navbar
navbarShowBtn.addEventListener('click', () => {
    navbarCollapseDiv.classList.add('navbar-collapse-panel');
});

// close navbar
navbarCloseBtn.addEventListener('click', () => {
    navbarCollapseDiv.classList.remove('navbar-collapse-panel');
});

document.addEventListener('click', (e) => {
    if (e.target.id != "navbar-collapse" && e.target.id != "navbar-show-btn" && e.target.parentElement.id != "navbar-show-btn") {
        navbarCollapseDiv.classList.remove('navbar-collapse-panel');
    }
});

function scrollUp() {
    const scrollUp = document.getElementById('scroll-up');

    // scroll-up visible when the scroll is higher than 750vh (after the header)
    if (this.scrollY >= 750) {
        scrollUp.classList.add('show-scroll');
    }
    else {
        scrollUp.classList.remove('show-scroll')
    }
}
window.addEventListener('scroll', scrollUp)

// dark mode

var darkMode = document.getElementById('mode-btn');

darkMode.onclick = function () {
    document.body.classList.toggle('dark-mode');
}

// disable past dates

var date = new Date();
var day = date.getDate();
var month = date.getMonth() + 1;
var year = date.getFullYear();

if (day < 10) {
    day = '0' + day;
}
if (month < 10) {
    month = '0' + month;
}

var minDate = year + '-' + month + '-' + day;

document.getElementById('date-picker').setAttribute('min', minDate);
document.getElementById('date-picker2').setAttribute('min', minDate);

// popup
var popup = document.getElementById('popup');

document.querySelector('#open-popup-btn').onclick = () =>
{
    popup.classList.toggle('open-popup');
}

document.querySelector('#close-popup-btn').onclick = () =>
{
    popup.classList.remove('open-popup');
}

// login

let loginForm = document.querySelector('.login-form-container');

document.querySelector('#login-btn').onclick = () =>
{
    loginForm.classList.toggle('active');
}

document.querySelector('#close-login-btn').onclick = () =>
{
    loginForm.classList.remove('active');
}


