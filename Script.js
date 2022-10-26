// Changing image and number onclick

document.getElementById('select-1').addEventListener('change', changeFunc);

function changeFunc() {
    var selectBox = document.getElementById('select-1');
  var selectedValue = selectBox.options[selectBox.selectedIndex].value;
  if (selectedValue == 'India') {
    document.getElementById('flag-icon').src = 'Images/langicon.png';
    document.getElementById('ph-number').innerHTML = '+91 9838203708';
  } else if (selectedValue == 'UK') {
    document.getElementById('flag-icon').src = 'Images/UK-flag.png';
    document.getElementById('ph-number').innerHTML = '+44 1632 960846';
  } else if (selectedValue == 'Canada') {
    document.getElementById('flag-icon').src = 'Images/canada-flag.png';
    document.getElementById('ph-number').innerHTML = '+1 202 555 0156';
  } else {
    document.getElementById('flag-icon').src = 'Images/german-flag.png';
    document.getElementById('ph-number').innerHTML = '+49-163-5556-667';
  };
}




// Adding the sticky navbar
window.onscroll = () => {
  myFunction1(), show_scroller();
};
var navbar = document.getElementById("sticky-section");
var sticky = navbar.offsetTop;

function myFunction1() {
  if (window.pageYOffset > sticky) {
    navbar.classList.add("sticky");
    navbar.classList.add("sticky-shadow");
  } else {
    navbar.classList.remove("sticky");
    navbar.classList.remove("sticky-shadow");
  }
}

// Scroll to Top 

let scroll = document.getElementById('scroll-btn')
function show_scroller() {
  if (window.pageYOffset > 125) {
    scroll.style.visibility = "visible";
  } else {
    scroll.style.visibility = "hidden";
  }
}
scroll.addEventListener('click', scrollToTop);
function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  })
}


// product hover
document.querySelectorAll(".product-hover").forEach(product =>{
product.classList.add('hide');
})

document.querySelectorAll('div[id^="product"]').forEach(product => { 
  product.addEventListener('mouseover', event => {
    product.querySelector('.product-img').classList.add('blur');
    product.querySelector('.product-img').querySelector('.product-hover').classList.remove('hide');
    product.querySelector('.product-img').querySelector('.product-hover').classList.add('show');
  })
  product.addEventListener('mouseout', event => {
    product.querySelector('.product-img').classList.remove('blur');
    product.querySelector('.product-img').querySelector('.product-hover').classList.add('hide');
    product.querySelector('.product-img').querySelector('.product-hover').classList.remove('show');
  })
}); 


let productsListUrl = 'https://my-json-server.typicode.com/adithkrishnan98/swagofindia/db';
var productsList;
let htmlToReturn = "",
  htmlToReturn2 = "",
  reviews = "",
  lowStar = 0,
  i = 0.
  

async function loadProducts(productsListUrl) {
  fetch('https://my-json-server.typicode.com/adithkrishnan98/swagofindia/db')
    .then(response => response.json())
    .then(json => {
      productsList = json;
      productsList.products.forEach((product) => {
        htmlToReturn ='<div class="col-xl-4 col-lg-4 col-md-6">'+
        '<div class="single-product" id="product1">'+
        '  <div class="product-img">'+
        '       <img src="images/product1.png" alt="">'+
        '<div class="product-hover  ">'+
        '           <div class="container">'+
        '               <div class="row">'+
        '                   <div class="col-4">'+
        '                   <a href=""><img src="./images/shopping-icon-trans.png" alt="cart"></a>'+
        '                   </div>'+
        '                   <div class="col-4">'+
        '                       <a href=""><img src="./images/eye-icon-trans.png" alt="cart"></a>'+
        '                   </div>'+
        '                   <div class="col-4">'+
        '                       <a href=""> <img src="./images/heart-icon-trans.png" alt="cart"></a>'+
        '                   </div>'+
        '               </div>'+
        '           </div>'+
        '       </div>'+
        '   </div>'+
        '   <div class="product-caption">'+
        '       <div class="product-rating">';
        lowStar=5-product.ratings;
        for(i=1;i<=product.ratings;i++){
          reviews+= '<i class="fas fa-star"></i>'
        }
        for(i=1;i<=lowStar;i++){
          reviews+= '<i class="fas fa-star low-star"></i>'
        }
                 
        htmlToReturn += reviews;
        reviews=""
        htmlToReturn +='       </div>'+
        '       <h4><a href="#">New Boxer</a></h4>'+
        '       <div class="price">'+
        '           <ul>'+
        '               <li>$40.00</li>'+
        '               <li class="discount">$60.00</li>'+
        '           </ul>'+
        '       </div>'+
        '   </div>'+
        '</div>'+
        '</div>';
        document.querySelector('#productsListArea').innerHTML += htmlToReturn;
      });
      // product hover
document.querySelectorAll(".product-hover").forEach(product =>{
  product.classList.add('hide');
  })
  
  document.querySelectorAll('div[id^="product"]').forEach(product => { 
    product.addEventListener('mouseover', event => {
      product.querySelector('.product-img').classList.add('blur');
      product.querySelector('.product-img').querySelector('.product-hover').classList.remove('hide');
      product.querySelector('.product-img').querySelector('.product-hover').classList.add('show');
    })
    product.addEventListener('mouseout', event => {
      product.querySelector('.product-img').classList.remove('blur');
      product.querySelector('.product-img').querySelector('.product-hover').classList.add('hide');
      product.querySelector('.product-img').querySelector('.product-hover').classList.remove('show');
    })
  }); 
    })
  }

loadProducts(productsListUrl);

