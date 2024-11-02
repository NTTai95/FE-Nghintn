$(document).ready(function ($) {
  var swi_cate_pro = null;
  function initSwiperCate() {
    swi_cate_pro = new Swiper(".swi_cate_pro", {
      slidesPerView: 4,
      spaceBetween: 15,
      slidesPerGroup: 1,
      navigation: {
        nextEl: ".swi_cate_pro .swiper-button-next",
        prevEl: ".swi_cate_pro .swiper-button-prev",
      },
      autoplay: {
        delay: 4000,
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
          slidesPerView: 2.5,
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
          slidesPerView: 4,
          spaceBetween: 20,
        },
      },
    });
  }
  function destroySwiperCate() {
    if (swi_cate_pro) {
      swi_cate_pro.destroy(true, true);
      swi_cate_pro = null;
    }
  }
  function toggleSwiperCate() {
    if ($(window).width() <= 767 && swi_cate_pro) {
      destroySwiperCate();
    } else if ($(window).width() > 767 && !swi_cate_pro) {
      initSwiperCate();
    }
  }
  toggleSwiperCate();
  $(window).resize(toggleSwiperCate);
});
