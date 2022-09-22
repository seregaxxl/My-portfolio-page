const hamburger = document.querySelector('.hamburger'),
        menu = document.querySelector('.menu'),
        menu__close = document.querySelector('.menu__close');
hamburger.addEventListener('click', () => {
    menu.classList.add('menu_active')

});

menu__close.addEventListener('click', () => {
    menu.classList.remove('menu_active')

});

const counters = document.querySelectorAll('.scale_percent'),
    lines = document.querySelectorAll('.scale_fill');

counters.forEach( (item, i) => {
    lines[i].style.width = item.innerHTML;
}) 