$(document).ready(function ($) {
  function runSwiperSale() {
    var swi_deal_pro = null;
    function initSwiperSale() {
      swi_deal_pro = new Swiper(".swi_deal_pro", {
        slidesPerView: 5,
        spaceBetween: 15,
        slidesPerGroup: 1,
        navigation: {
          nextEl: ".swi_deal_pro .swiper-button-next",
          prevEl: ".swi_deal_pro .swiper-button-prev",
        },
        autoplay: false,
        loop: false,
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
    function destroySwiperSale() {
      if (swi_deal_pro) {
        swi_deal_pro.destroy(true, true);
        swi_deal_pro = null;
      }
    }
    function toggleSwiperPro1() {
      if ($(window).width() <= 767 && swi_deal_pro) {
        destroySwiperSale();
      } else if ($(window).width() > 767 && !swi_deal_pro) {
        initSwiperSale();
      }
    }
    toggleSwiperPro1();
    $(window).resize(toggleSwiperPro1);
  }
  lazyBlockProduct("section_flash_sale", "0px 0px -250px 0px", runSwiperSale);
});
