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

var darkMode = document.getElementById('mode-btn');
darkMode.onclick = function () {
    document.body.classList.toggle('dark-mode');
}

