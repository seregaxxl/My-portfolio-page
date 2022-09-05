const hamburger = document.querySelector('.hamburger'),
        menu = document.querySelector('.menu'),
        menu__close = document.querySelector('.menu__close');
hamburger.addEventListener('click', () => {
    menu.classList.add('menu_active')

});

menu__close.addEventListener('click', () => {
    menu.classList.remove('menu_active')

});
// const hamburger = document.querySelector('.hamburger'),
//       menu = document.querySelector('.menu'),
//       closeElem = document.querySelector('.menu__close');

// hamburger.addEventListener('click', () => {
//     menu.classList.add('active');
// });

// closeElem.addEventListener('click', () => {
//     menu.classList.remove('active');
// });