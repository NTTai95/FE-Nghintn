$(document).ready(function ($) {
  function runSwiperProOne() {
    var swi_product_one = null;
    function initSwiperProOne() {
      swi_product_one = new Swiper(".swi_product_one", {
        slidesPerView: 5,
        spaceBetween: 15,
        slidesPerGroup: 1,
        navigation: {
          nextEl: ".swi_product_one .swiper-button-next",
          prevEl: ".swi_product_one .swiper-button-prev",
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
            slidesPerView: 4,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 20,
          },
          1199: {
            slidesPerView: 5,
            spaceBetween: 20,
          },
        },
      });
    }
    function destroySwiperProOne() {
      if (swi_product_one) {
        swi_product_one.destroy(true, true);
        swi_product_one = null;
      }
    }
    function toggleSwiperProOne() {
      if ($(window).width() <= 767 && swi_product_one) {
        destroySwiperProOne();
      } else if ($(window).width() > 767 && !swi_product_one) {
        initSwiperProOne();
      }
    }
    toggleSwiperProOne();
    $(window).resize(toggleSwiperProOne);
  }
  lazyBlockProduct("section_product_1", "0px 0px -250px 0px", runSwiperProOne);
});
