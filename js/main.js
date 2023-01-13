$('.trainers__items.owl-carousel').owlCarousel({
  center: false,
  items: 3,
  loop: false,
  margin: 80,
  nav: false,
  dots: true,
  autoplay: true,
  autoplayTimeout: 1000,
  autoplayHoverPause: true,
  responsive: {
    0: {
      items: 1
    },
    600: {
      items: 2
    },
    1000: {
      items: 3
    }
  }
});

$(document).ready(function () {
  $('.header__menu a[href^="#"]').click(function () {
    //Сохраняем значение атрибута href в переменной:
    var target = $(this).attr('href');
    $('html, body').animate(
      {
        scrollTop: $(target).offset().top //можно вычесть высоту меню
      },
      500
    );
    return false;
  });
});

$(document).ready(function () {
  $('.main__btn').click(function () {
    var target = '#form';
    $('html, body').animate(
      {
        scrollTop: $(target).offset().top
      },
      500
    );
    return false;
  });
});

$(document).ready(function () {
  $('.schedule__button').click(function () {
    var target = '#form';
    $('html, body').animate(
      {
        scrollTop: $(target).offset().top
      },
      500
    );
    return false;
  });
});

// sandwich
var sandwich = function () {
  $(document).on('click', '.sandwich', function () {
    $(this).toggleClass('sandwich--active');
    $('.header-adaptive').toggleClass('adaptive--active');
  });
};

sandwich();

// lightGallery(document.getElementById('lightgallery'), {
//   selector: '.gallery__item',
//   plugins: [lgZoom, lgThumbnail],
//   licenseKey: '0000-0000-000-0000'
// });

document.addEventListener('DOMContentLoaded', () => {
  const followCursor = () => {
    // объявляем функцию followCursor
    const el = document.querySelector('.follow-cursor'); // ищем элемент, который будет следовать за курсором

    window.addEventListener('mousemove', e => {
      // при движении курсора
      const target = e.target; // определяем, где находится курсор
      if (!target) return;

      if (
        target.closest('a.header__logo') ||
        target.closest('a.header__menu__item') ||
        target.closest('img')
      ) {
        // если курсор наведён на ссылку
        el.classList.add('follow-cursor_active'); // элементу добавляем активный класс
      } else {
        // иначе
        el.classList.remove('follow-cursor_active'); // удаляем активный класс
      }

      el.style.left = e.pageX + 'px'; // задаём элементу позиционирование слева
      el.style.top = e.pageY + 'px'; // задаём элементу позиционирование сверху
    });
  };

  followCursor(); // вызываем функцию followCursor
});
