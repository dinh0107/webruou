$(document).ready(function(){
    $('.banner').slick({
        arrows: true,
        autoplay: false,
        speed: 1500,
        autoplaySpeed: 2000,
        prevArrow: '<ion-icon name="chevron-back-outline"></ion-icon>',
        nextArrow: '<ion-icon class="nextbtn" name="chevron-forward-outline"></ion-icon>'
    });
    $('.sale-content').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: false,
        speed: 1500,
        arrows:true,
        autoplaySpeed: 2000,
        prevArrow: '<ion-icon name="chevron-back-outline"></ion-icon>',
        nextArrow: '<ion-icon class="nextbtn" name="chevron-forward-outline"></ion-icon>'
      });
})
    const listMenu = document.querySelector('.menu-nav')
    const menu = document.querySelectorAll('.icon-item')
    const itemMenu = document.querySelector('.menu-item')
    function changeMenu() {
        for( i = 0; i < menu.length; i++ ) {
        menu[i].classList.toggle('active')
        }
    }

  function showMenu() {
    itemMenu.classList.toggle('active');
  }

  listMenu.addEventListener('click' , showMenu)
  listMenu.addEventListener('click' , changeMenu)
