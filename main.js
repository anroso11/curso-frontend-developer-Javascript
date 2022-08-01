const navBarEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const iconMenu = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const carritoMenuCompra = document.querySelector('.product-detail');
const iconCarrito = document.querySelector('.navbar-shopping-cart');
const cardsContainer = document.querySelector('.cards-container');


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

const productList = [];
productList.push ({
    name: 'Bike',
    price: 250,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940', 
});
productList.push({
    name: 'Alarm clock',
    price: 50,
    image: 'https://images.pexels.com/photos/210528/pexels-photo-210528.jpeg'
})
productList.push({
    name: 'Glases',
    price: 125,
    image: 'https://images.pexels.com/photos/131018/pexels-photo-131018.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',

})
productList.push({
    name: 'TV 55',
    price: 350,
    image: 'https://exitocol.vtexassets.com/arquivos/ids/10044382-1200-auto?v=637674354306070000&width=1200&height=auto&aspect=true',
})

/*<div class="product-card">
<img src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="">
<div class="product-info">
  <div>
    <p>$120,00</p>
    <p>Bike</p>
  </div>
  <figure>
    <img src="./icons/bt_add_to_cart.svg" alt="">
  </figure>
</div>
</div>*/

function renderProducts (arr){

    for (product of arr){

        const productcard = document.createElement('div');
        productcard.classList.add('product-card');

        const productImg = document.createElement('img');
        productImg.setAttribute('src', product.image);

        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info');

        //-----------------------------------//
        const productInfoDivVacio = document.createElement('div');

        const productPrice = document.createElement('p');
        productPrice.innerText = '$' + product.price;

        const productName = document.createElement('p');
        productName.innerText = product.name;

        //-------------------------------------//
        const productInfoFigure = document.createElement('figure');
        const productCarritoImg = document.createElement('img');
        productCarritoImg.setAttribute('src','./icons/bt_add_to_cart.svg')

        //Agregamos el nodo padre principal -> <div class="cards-container">
        cardsContainer.appendChild(productcard);

        //Agregamos el nodo padre -> <div class="product-card">
        //Agregamos el nodo padre -> <div class="product-info">
        productcard.appendChild(productImg);
        productcard.appendChild(productInfo);

        //Agregamos el nodo padre -> <div class="product-info">
        productInfo.appendChild(productInfoDivVacio);
        productInfo.appendChild(productInfoFigure);

        //Agregamos el nodo padre div
        productInfoDivVacio.append(productPrice, productName);

        //Agregamos el nodo padre Figure
        productInfoFigure.appendChild(productCarritoImg);

        }
}   

renderProducts(productList);




