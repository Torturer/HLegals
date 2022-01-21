const swiper = new Swiper('.logo-swiper', {
  // Optional parameters
  loop: true,
  slidesPerView: 2,
  spaceBetween: 20,
  speed:1000,
  autoplay: {
      delay: 5000,
  },

  breakpoints: {
    // when window width is >= 576px
    576: {
      slidesPerView: 3,
      spaceBetween: 30
    },
    // when window width is >= 992px
    992: {
      slidesPerView: 4,
      spaceBetween: 40
    }
  },

  // If we need pagination
  pagination: {
    el: '.logo-swiper-pagination',
    clickable: true,
  },
});

$(function() {
  $(".news-open-btn").click(function() {
    $(".news-row").addClass("news-row-open");
    $(this).hide();
  });
});