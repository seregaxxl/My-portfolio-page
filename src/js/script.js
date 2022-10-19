const hamburger = document.querySelector('.hamburger'),
        menu = document.querySelector('.menu');
hamburger.addEventListener('click', () => {
    menu.classList.add('menu_active')

});

document.querySelectorAll('.menu__close, .menu__link').forEach(e => e.addEventListener('click', () => {
    menu.classList.remove('menu_active')
}));

const counters = document.querySelectorAll('.scale_percent'),
    lines = document.querySelectorAll('.scale_fill');

counters.forEach( (item, i) => {
    lines[i].style.width = item.innerHTML;
});

// jQuery.validator.setDefaults({
//   debug: false,
//   success: "valid"
// });

// function validateForms(form) {
//     $(form).validate({
//       rules: {
//         name: {
//           required: true,
//           minlength: 2
//         },
//         email: {
//           required:true,
//           email: true
//           }
//         },
//       messages: {
//         name:{
//           required: "Пожалуйста, укажите Ваше имя",
//           minlength: jQuery.validator.format("Имя не может быть короче {0} символов!")
//         },
//         email: {
//           required: "Пожалуйста, укажите Ваш e-mail",
//           email: "Используйте формат name@domain.com"
//         }
//       }
//     });
//   };

// validateForms('.contacts__form');

$('form').submit(function(e) {
  e.preventDefault();
  $.ajax({
      type: "POST",
      url: "mailer/smart.php",
      data: $(this).serialize()
  }).done(function() {
    $(this).find("input").val("");
    alert("Сообщение успешно отправлено");
    $("form").trigger("reset");
  });
  return false;
  });

