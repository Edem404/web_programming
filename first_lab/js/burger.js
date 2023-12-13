const burgerMenu = document.querySelector('.header_burger');
const navigationMenu = document.querySelector('.top_ul_style');

burgerMenu.addEventListener('click', () => {
    navigationMenu.classList.toggle('active');
});