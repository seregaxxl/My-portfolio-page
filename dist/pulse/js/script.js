const slider = tns({
  container: '.carusel__inner',
  items: 1,
  slideBy: 'page',
  autoplay: false,
  nav: true,
  navPosition: 'bottom',
  controls: false,
  responsive: {
    1200: {
    nav: false,
    },}
});

addEventListener
document.querySelector('.prev').onclick = function () {
  slider.goTo('prev');
};
document.querySelector('.next').addEventListener('click', function () {
  slider.goTo('next');
});

$(document).ready(function(){
  $('ul.catalog__tabs').on('click', 'li:not(.catalog__tab_active)', function() {
    $(this)
      .addClass('catalog__tab_active').siblings().removeClass('catalog__tab_active')
      .closest('div.container').find('div.catalog__content').removeClass('catalog__content_active').eq($(this).index()).addClass('catalog__content_active');
  });

  function toggleSlide(item){
    $(item).each(function(i) {
      $(this).on('click', function(e){
        e.preventDefault();
        $('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
        $('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active');
      })
    }) 
  }
  
  toggleSlide('.catalog-item__link');
  toggleSlide('.catalog-item__back');

  //modal

  $('[data-modal=consultation]').on('click', function() {
    $('.overlay, #consultation').fadeIn('slow');
  });

  $('.modal__close').on('click', function() {
    $('.overlay, #consultation, #order, #thanks').fadeOut('slow');
  });

  $('.button_mini').each(function(i) {
    $(this).on('click', function() {
      $('#order .modal__description').text($('.catalog-item__subtitle').eq(i).text());
      $('.overlay, #order').fadeIn('slow');
    })
  });


  function validateForms(form) {
    $(form).validate({
      rules: {
        name: {
          required: true,
          minlength: 2
        },
        phone: 'required',
        email: {
          required:true,
          email: true
          }
        },
      messages: {
        name:{
          required: "Пожалуйста, укажите Ваше имя",
          minlength: jQuery.validator.format("Имя не может быть короче {0} символов!")
        },
        phone: 'Пожалуйста, укажите Ваш телефон',
        email: {
          required: "Пожалуйста, укажите Ваш e-mail",
          email: "Ваш e-mail должен быть в формате name@domain.com"
        }
      }
    });
  };

  validateForms('.consultation form');
  validateForms('#consultation form');
  validateForms('#order form');

  $('input[name=phone]').mask("+7 (999) 999-99-99");

  $('form').submit(function(e) {
    e.preventDefault();
    $.ajax({
        type: "POST",
        url: "mailer/smart.php",
        data: $(this).serialize()
    }).done(function() {
        $(this).find("input").val("");
        $('#consultation, #order').fadeOut();
        $('.overlay, #thanks').fadeIn('slow');

        $('form').trigger('reset');
    });
    return false;
    });

    //smooth scroll up
  $(window).scroll(function() {
    if ($(this).scrollTop() > 1600) {
      $('.pageup').fadeIn();
    } else {
      $('.pageup').fadeOut();
    }
  });

  new WOW().init();

});