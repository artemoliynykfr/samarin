// wepb test
function testWebP(callback) {
   var webP = new Image();
   webP.onload = webP.onerror = function () {
      callback(webP.height == 2);
   };
   webP.src = 'data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA';
}
testWebP(function (support) {
   if (support == true) {
      document.querySelector('body').classList.add('webp');
   } else {
      document.querySelector('body').classList.add('no-webp');
   }
});
// header burger menu
function burger() {
   let header__burger = document.querySelector('.navbar-toggler'),
      header__menu = document.querySelector('.nav'),
      header = document.querySelector('.navbar');
   header__burger.addEventListener('click', function () {
      if (header__burger.classList.contains('active'), header__menu.classList.contains('active'), header.classList.contains('active')) {
         header__burger.classList.remove('active') || header__menu.classList.remove('active') || header.classList.remove('active')
      } else {
         header__burger.classList.add('active') || header__menu.classList.add('active') || header.classList.add('active')
      }
   })
}
burger();


new Swiper(".article__swiper > .swiper-container", {
   direction: "vertical",
   effect: "creative",
   mousewheel: true,
   speed: 500,
   creativeEffect: {
      prev: {
         shadow: false,
         translate: [0, 0, -1],
      },
      next: {
         translate: [0, "100%", 0],
      },
   },
   keyboard: {
      enabled: true,
   },
   scrollbar: {
      el: '.swiper-scrollbar',
      hide: false,
      draggable: true,
      snapOnRelease: true
   },
});
if (document.querySelector('.theme')){
   function theme() {
      var element = document.body;
      element.classList.toggle("theme-dark");
   }
}
if (document.querySelector('.blogmode')){
   function blogMode(){
      let row = document.querySelector('.blog__body-row')
      let column = document.querySelector('.blog__body-column')
      let btnrow = document.querySelector('#btn1')
      let btncolumn = document.querySelector('#btn2')
      row.classList.add('active')
      btnrow.onclick = function(){
         row.classList.add('active')
         btnrow.classList.add('active')
         column.classList.remove('active')
         btncolumn.classList.remove('active')
      }
      btncolumn.onclick = function(){
         column.classList.add('active')
         btncolumn.classList.add('active')
         row.classList.remove('active')
         btnrow.classList.remove('active')
      }
   }
   blogMode()
}