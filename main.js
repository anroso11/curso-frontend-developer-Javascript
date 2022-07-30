const navBarEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const iconMenu = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');

navBarEmail.addEventListener('click', showMenuDesktop);
iconMenu.addEventListener('click', showMenuMobile);

function showMenuDesktop () {
    desktopMenu.classList.toggle('inactive');
}

function showMenuMobile () {
    mobileMenu.classList.toggle('inactive');
}

