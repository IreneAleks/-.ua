// Swiper

const swiper = new Swiper('.swiper', {

    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    slidesPerView: 4,
    loop: true,
  });


// Arrow Up

$(window).scroll(function() {
  let scrolled = $(window).scrollTop();

  if (scrolled > 300) {
    $('#arrow-up').addClass('active');
  } else {
    $('#arrow-up').removeClass('active');
  }
});

$('#arrow-up').click(function() {
  $('body,html').animate({scrollTop: 0}, 1000)
});




