const navBarEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const iconMenu = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const carritoMenuCompra = document.querySelector('.product-detail');
const productDetailContainer = document.querySelector('.product-detail-square');
const productDetailCloseIcon = document.querySelector('.product-detail-close')
const iconCarrito = document.querySelector('.navbar-shopping-cart');
const cardsContainer = document.querySelector('.cards-container');
const productDetailImage = document.querySelector('.product-detail-square > img');
const productDetailPrice = document.querySelector('#product-price');
const productDetailName = document.querySelector('#product-name');


navBarEmail.addEventListener('click', showMenuDesktop);
iconMenu.addEventListener('click', showMenuMobile);
iconCarrito.addEventListener('click', showMenuCarrito);
productDetailCloseIcon.addEventListener('click', closeProductDetailAside);

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

    closeProductDetailAside();
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
   
    const isProductDetailClosed = productDetailContainer.classList.contains('inactive');

    if(!isProductDetailClosed){
        productDetailContainer.classList.add('inactive');
    }

    carritoMenuCompra.classList.toggle('inactive');
  
}

function openProductDetailAside(event) {

    carritoMenuCompra.classList.add('inactive');
    productDetailContainer.classList.remove('inactive');
    setProductInfo(event);
}

function setProductInfo(data) {
    const product = data.path.find(first => first.className === 'product-card');
    const productImage = product.querySelector('img');
    const productName = product.querySelector('.product-info div p:nth-child(2)'); 
    const productPrice = product.querySelector('.product-info div p:nth-child(1)');
    productDetailImage.setAttribute('src', productImage.getAttribute('src'));
    productDetailPrice.innerText = productPrice.innerText;
    productDetailName.innerText = productName.innerText;

}

function closeProductDetailAside() {
    productDetailContainer.classList.add('inactive');
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
productList.push ({
    name:'Bicycle helmet',
    price: 1200,
    image: 'https://assets.specialized.com/i/specialized/60821-104_HLMT_ALIGN-II-HLMT-MIPS-CE-BLK-BLKREFL-S-M_HERO?bg=rgb(241,241,241)&w=1600&h=900&fmt=auto'
});
productList.push ({
    name:'Bicycle helmet',
    price: 1600,
    image: 'https://m.media-amazon.com/images/I/61eExL-rIAL._AC_SL1001_.jpg'
});
productList.push ({
    name:'Bicycle helmet',
    price: 1500,
    image: 'https://assets.specialized.com/i/specialized/60822-140_HLMT_CHAMONIX-HLMT-MIPS-CE-MRN-M-L_HERO?bg=rgb(241,241,241)&w=1600&h=900&fmt=auto'
});
productList.push ({
    name:'Seat',
    price: 300,
    image: 'https://m.media-amazon.com/images/I/61e+sZ9rgNL._AC_SL1500_.jpg'
});
productList.push ({
    name:'Tennis Montain Bike',
    price: 2200,
    image: 'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/8ea578f6c07847fca2d0ac85011d7f1f_9366/Tenis_para_Mountain_Bike_Five_Ten_Freerider_Negro_FW2835_01_standard.jpg'
});
productList.push ({
    name:'Sunglasses',
    price: 800,
    image: 'https://cdn.siroko.com/s/files/1/1220/6874/products/gafas-siroko-tech-k3s-london-lateral/1200x/crop_center.jpg?v=1635209602'
});
productList.push ({
    name:'Sunglasses',
    price: 600,
    image: 'https://cdn.siroko.com/s/files/1/1220/6874/products/siroko-tech-k3s-clearfog-lente-antiniebla-frontal/1200x/crop_center.jpg?v=1635209603'
});
productList.push ({
    name:'Bicycle seat bag',
    price: 876,
    image: 'https://m.media-amazon.com/images/I/81k2Gmal+VL._AC_SL1500_.jpg'
}); 

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
        productImg.addEventListener('click', openProductDetailAside);

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




