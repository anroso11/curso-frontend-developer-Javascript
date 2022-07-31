const navBarEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const iconMenu = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const carritoMenuCompra = document.querySelector('.product-detail');
const iconCarrito = document.querySelector('.navbar-shopping-cart');


navBarEmail.addEventListener('click', showMenuDesktop);
iconMenu.addEventListener('click', showMenuMobile);
iconCarrito.addEventListener('click', showMenuCarrito);

function showMenuDesktop () {

    /*Este Funciona agregar add*/     
    // desktopMenu.classList.toggle('inactive')
    // carritoMenuCompra.classList.add('inactive');

    const iscarritoMenuClosed = carritoMenuCompra.classList.contains('inactive');

    if(!iscarritoMenuClosed){
        carritoMenuCompra.classList.add('inactive');
    }
    desktopMenu.classList.toggle('inactive');
}

function showMenuMobile () {
    
    /*Este Funciona agregar add*/    
    // mobileMenu.classList.toggle('inactive');
    // carritoMenuCompra.classList.add('inactive');

    const iscarritoMenuClosed = carritoMenuCompra.classList.contains('inactive');

    if(!iscarritoMenuClosed){
        carritoMenuCompra.classList.add('inactive');
    }
    mobileMenu.classList.toggle('inactive');
}

function showMenuCarrito() {

     /*Este Funciona agregar add*/    
    // carritoMenuCompra.classList.toggle('inactive');
    // mobileMenu.classList.add('inactive');

    const ismobileMenuClosed = mobileMenu.classList.contains('inactive');

    if(!ismobileMenuClosed){
        mobileMenu.classList.add('inactive');
    }
    carritoMenuCompra.classList.toggle('inactive');
  
}

