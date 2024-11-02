$(document).ready(function ($) {
  function runSwiperFirst() {
    var swi_first_pro = null;
    function initSwiperFirst() {
      swi_first_pro = new Swiper(".swiper-first", {
        slidesPerView: 3,
        spaceBetween: 15,
        slidesPerColumn: 2,
        slidesPerColumnFill: "row",
        navigation: {
          nextEl: ".swiper-first .swiper-button-next",
          prevEl: ".swiper-first .swiper-button-prev",
        },
        breakpoints: {
          300: {
            slidesPerView: 2,
            slidesPerColumn: 2,
            spaceBetween: 10,
          },
          767: {
            slidesPerView: 2,
            slidesPerColumn: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          1200: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
        },
      });
    }
    function destroySwiperFirst() {
      if (swi_first_pro) {
        swi_first_pro.destroy(true, true);
        swi_first_pro = null;
      }
    }
    function toggleSwiperFirst() {
      if ($(window).width() <= 767 && swi_first_pro) {
        destroySwiperFirst();
      } else if ($(window).width() > 767 && !swi_first_pro) {
        initSwiperFirst();
      }
    }
    toggleSwiperFirst();
    $(window).resize(toggleSwiperFirst);
  }
  lazyBlockProduct("section_product_tab", "0px 0px -250px 0px", runSwiperFirst);
});
