var menuButton = document.getElementById('menuButton');
var menu = document.getElementById('menuList');

document.getElementById("menuButton").onclick = function() {
    menu.classList.toggle('menu__list-active');
};