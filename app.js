console.log("Hello World");

const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar_menu');

menu.addEventListener('click', function () {
    menu.classList.toggle('is-active');
    menu.classList.toggle('active');
});