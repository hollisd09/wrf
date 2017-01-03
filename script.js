
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
(function () {
    var carouselContent, carouselIndex, carouselLength, firstClone, firstItem, isAnimating, itemWidth, lastClone, lastItem;
    carouselContent = $('.carousel__content');
    carouselIndex = 0;
    carouselLength = carouselContent.children().length;
    isAnimating = false;
    itemWidth = 100 / carouselLength;
    firstItem = $(carouselContent.children()[0]);
    lastItem = $(carouselContent.children()[carouselLength - 1]);
    firstClone = null;
    lastClone = null;
    carouselContent.css('width', carouselLength * 100 + '%');
    carouselContent.transition({ x: carouselIndex * -itemWidth + '%' }, 0);
    $.each(carouselContent.children(), function () {
        return $(this).css('width', itemWidth + '%');
    });
    $('.nav--left').on('click', function () {
        if (isAnimating) {
            return;
        }
        isAnimating = true;
        carouselIndex--;
        if (carouselIndex === -1) {
            lastItem.prependTo(carouselContent);
            carouselContent.transition({ x: (carouselIndex + 2) * -itemWidth + '%' }, 0);
            return carouselContent.transition({ x: (carouselIndex + 1) * -itemWidth + '%' }, 1000, 'easeInOutExpo', function () {
                carouselIndex = carouselLength - 1;
                lastItem.appendTo(carouselContent);
                carouselContent.transition({ x: carouselIndex * -itemWidth + '%' }, 0);
                return isAnimating = false;
            });
        } else {
            return carouselContent.transition({ x: carouselIndex * -itemWidth + '%' }, 1000, 'easeInOutExpo', function () {
                return isAnimating = false;
            });
        }
    });
    $('.nav--right').on('click', function () {
        if (isAnimating) {
            return;
        }
        isAnimating = true;
        carouselIndex++;
        return carouselContent.transition({ x: carouselIndex * -itemWidth + '%' }, 1000, 'easeInOutExpo', function () {
            isAnimating = false;
            if (firstClone) {
                carouselIndex = 0;
                carouselContent.transition({ x: carouselIndex * -itemWidth + '%' }, 0);
                firstClone.remove();
                firstClone = null;
                carouselLength = carouselContent.children().length;
                itemWidth = 100 / carouselLength;
                carouselContent.css('width', carouselLength * 100 + '%');
                $.each(carouselContent.children(), function () {
                    return $(this).css('width', itemWidth + '%');
                });
                return;
            }
            if (carouselIndex === carouselLength - 1) {
                carouselLength++;
                itemWidth = 100 / carouselLength;
                firstClone = firstItem.clone();
                firstClone.addClass('clone');
                firstClone.appendTo(carouselContent);
                carouselContent.css('width', carouselLength * 100 + '%');
                $.each(carouselContent.children(), function () {
                    return $(this).css('width', itemWidth + '%');
                });
                return carouselContent.transition({ x: carouselIndex * -itemWidth + '%' }, 0);
            }
        });
    });
}.call(this));
