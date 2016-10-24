$("#owl-demo").owlCarousel({
  navigation : true,
  slideSpeed : 300,
  paginationSpeed : 400,
  singleItem: true,
  navigationText: ['<', '>'],
  itemsCustom: [
    [0,2],
    [450, 4],
    [600, 7],
    [700, 9],
    [1000, 10],
    [1200, 12],
    [1400, 13],
    [1600, 15]
  ],
  rewindNav: false
});

$("#videoReel").owlCarousel({
  navigation : true,
  slideSpeed : 300,
  paginationSpeed : 400,
  singleItem: true,
  navigationText: ['<', '>'],
  itemsCustom: [
    [0,2],
    [450, 4],
    [600, 7],
    [700, 9],
    [1000, 10],
    [1200, 12],
    [1400, 13],
    [1600, 15]
  ],
});

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


/* CAROUSEL */


