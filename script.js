$(document).ready(function() {
  $('.meet-wrf-content').slick({
    dots: false,
    infinite: false,
    speed: 300,
    slidesToShow: 1,
    fade: true,
    centerMode: true,
    accessibility: true,
  });
})


/* MEET WRF */

  $('.meet-wrf-link').click(function() {
    $('.meet-wrf').removeClass('meet-wrf--hidden');
    $('.meet-wrf').addClass('meet-wrf--show');
  });

  $('.meet-wrf-close').click(function() {
    $('.meet-wrf').removeClass('meet-wrf--show');
    $('.meet-wrf').addClass('meet-wrf--hidden');
  });


/* WORK WRF */

  $('.work-wrf-link').click(function() {
    $('.work-wrf').removeClass('work-wrf--hidden');
    $('.work-wrf').addClass('work-wrf--show');
  });


  $('.work-wrf-close').click(function() {
    $('.work-wrf').removeClass('work-wrf--show');
    $('.work-wrf').addClass('work-wrf--hidden');
  });

/* CONTACT WRF */
  $('.contact-wrf-link').click(function() {
    $('.contact-wrf').removeClass('contact-wrf--hidden');
    $('.contact-wrf').addClass('contact-wrf--show');
  });


  $('.contact-wrf-close').click(function() {
    $('.contact-wrf').removeClass('contact-wrf--show');
    $('.contact-wrf').addClass('contact-wrf--hidden');
  });

/* NAVBAR SHRINK */

function init() {
  window.addEventListener('scroll', function(e) {
    var distanceY = window.pageYOffset || document.documentElement.scrollTop,
      shrinkOn = 100,
      header = document.querySelector('header');
    if (distanceY > shrinkOn) {
      classie.add(header, 'smaller');
    } else {
      if (classie.has(header, 'smaller')) {
        classie.remove(header, 'smaller');
      }
    }
  });
}
window.onload = init();

