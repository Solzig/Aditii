$(document).ready(function(){
    $('.hero-slider').owlCarousel({
        nav:false,
        center: true,
        loop: true,
        items: 1
    })
    $('.direction-slider').owlCarousel({
        nav: true,
        navText: ["<img src='img/direction/left.png' alt='left' class='direction-slider__arrow direction-slider__arrow_left'>",
                    "<img src='img/direction/right.png' alt='right' class='direction-slider__arrow direction-slider__arrow_right'>"],
        dots: false,
        loop: true,
        center: true,
        items: 3,
        startPosition: 1,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:3
            },
            1000:{
                items:3
            }
        }
    })
  });

var menuButton = document.getElementById('menuButton');
var menu = document.getElementById('menuList');

document.getElementById("menuButton").onclick = function() {
    menu.classList.toggle('menu__list-active');
};