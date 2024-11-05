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
  
  var swipertop = new Swiper(".top-content-mobile", {
    spaceBetween: 0,
    lazy: true,
    autoplay: {
      delay: 3000,
    },
    loop: true,
  });