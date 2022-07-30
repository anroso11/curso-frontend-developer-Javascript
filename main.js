const navBarEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.inactive');

navBarEmail.addEventListener('click', showMenu);

function showMenu () {
    desktopMenu.classList.toggle('inactive');
}