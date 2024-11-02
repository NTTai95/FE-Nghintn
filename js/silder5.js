$(document).ready(function ($) {
  function runSwiperProTow() {
    var swi_product_tow = null;
    function initSwiperProTow() {
      swi_product_tow = new Swiper(".swi_product_tow", {
        slidesPerView: 3,
        spaceBetween: 15,
        slidesPerGroup: 1,
        pagination: {
          el: ".swi_product_tow .swiper-pagination",
          clickable: true,
        },
        breakpoints: {
          280: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          640: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          992: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          1199: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
        },
      });
    }
    function destroySwiperProTow() {
      if (swi_product_tow) {
        swi_product_tow.destroy(true, true);
        swi_product_tow = null;
      }
    }
    function toggleSwiperProTow() {
      if ($(window).width() <= 767 && swi_product_tow) {
        destroySwiperProTow();
      } else if ($(window).width() > 767 && !swi_product_tow) {
        initSwiperProTow();
      }
    }
    toggleSwiperProTow();
    $(window).resize(toggleSwiperProTow);
  }
  lazyBlockProduct("section_product_2", "0px 0px -250px 0px", runSwiperProTow);
});
