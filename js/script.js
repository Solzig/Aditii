$(document).ready(function(){
    $('.hero-slider').owlCarousel({
        nav:false,
        center: true,
        responsive: {
            0: {
                items: 1
            }, 
            600: {
                items: 1
            }, 
            900: {
                items: 1
            }, 
            1200: {
                items: 1
            }
        }
    })
  });

var menuButton = document.getElementById('menuButton');
var menu = document.getElementById('menuList');

document.getElementById("menuButton").onclick = function() {
    menu.classList.toggle('menu__list-active');
};