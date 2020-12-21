const navBar = document.querySelector('.nav-bar');
const menu = document.querySelector('.menu');
const menuItems = document.querySelector('.menu-items');
const menuLinks = document.querySelectorAll('.menu-link');

let showNav = false;
navBar.addEventListener('click', toggleNav);

function toggleNav() {
    if (!showNav) {
        navBar.classList.add('close');
        menu.classList.add('show');
        menuItems.classList.add('show');
        menuLinks.forEach(link => link.classList.add('show'));
        showNav = true;
    }
    else {
        navBar.classList.remove('close');
        menu.classList.remove('show');
        menuItems.classList.remove('show');
        menuLinks.forEach(link => link.classList.remove('show'));
        showNav = false;
    }
}