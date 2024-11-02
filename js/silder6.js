$(document).ready(function ($) {
  function runSwiperThree() {
    var swi_three_pro = null;
    function initSwiperThree() {
      swi_three_pro = new Swiper(".swiper-three", {
        slidesPerView: 5,
        spaceBetween: 15,
        slidesPerGroup: 1,
        navigation: {
          nextEl: ".swiper-three .swiper-button-next",
          prevEl: ".swiper-three .swiper-button-prev",
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
    function destroySwiperThree() {
      if (swi_three_pro) {
        swi_three_pro.destroy(true, true);
        swi_three_pro = null;
      }
    }
    function toggleSwiperThree() {
      if ($(window).width() <= 767 && swi_three_pro) {
        destroySwiperThree();
      } else if ($(window).width() > 767 && !swi_three_pro) {
        initSwiperThree();
      }
    }
    toggleSwiperThree();
    $(window).resize(toggleSwiperThree);
  }
  lazyBlockProduct(
    "section_product_tab_3",
    "0px 0px -250px 0px",
    runSwiperThree
  );
});
