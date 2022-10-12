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
});

// let promo__subtitle = document.querySelector('.promo__subtitle');
// let subtitle_height = promo__subtitle.offsetHeight;

// let promo__title = document.querySelector('.promo__title');
// let title_height = '50vh';

// // promo__title.offsetHeight;

// const r = document.querySelector(':root');
// r.style.setProperty('--t_heigth', title_heigh);

// function myFunction_set() {
//     r.style.setProperty('--t_heigth', '50vh');
//     r.style.setProperty('--st_heigth', '50vh');
//   };

