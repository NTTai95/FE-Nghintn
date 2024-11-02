var favoriBean = {};
favoriBean.General = {
  init: function () {
    favoriBean.Wishlist.init();
  },
};
favoriBean.Wishlist = {
  init: function () {
    this.setWishlistProductLoop();
    favoriBean.Wishlist.wishlistProduct();
  },
  setWishlistProductLoop: function () {
    $("body").on("click", ".remove-wishlist", function (e) {
      favoriBean.Wishlist.removeWishlist($(this).attr("data-wish"));
      theme.alert.new(
        "Xóa khỏi danh sách yêu thích",
        "Sản phẩm của bạn đã xóa khỏi sách yêu thích thành công.",
        3000,
        "alert-warning"
      );
    });
    $("body").on("click", ".setWishlist", function (e) {
      e.preventDefault();
      if ($(this).hasClass("active")) {
        favoriBean.Wishlist.removeWishlist($(this).attr("data-wish"));
        theme.alert.new(
          "Xóa khỏi danh sách yêu thích",
          "Sản phẩm của bạn đã xóa khỏi sách yêu thích thành công.",
          3000,
          "alert-warning"
        );
      } else {
        theme.alert.new(
          "Thêm vào danh sách yêu thích",
          "Sản phẩm của bạn đã thêm vào danh sách yêu thích thành công.",
          3000,
          "alert-success"
        );
        var phand = [];
        var handle = $(this).attr("data-wish");
        if (document.cookie.indexOf("bean_wishlist_products") !== -1) {
          var las = Cookies.getJSON("bean_wishlist_products");
          if ($.inArray(handle, las) === -1) {
            phand = [handle];
            for (var i = 0; i < las.length; i++) {
              phand.push(las[i]);
              if (phand.length > 100) {
                break;
              }
            }
            Cookies.set("bean_wishlist_products", phand, {
              expires: 15,
              sameSite: "None",
              secure: true,
            });
          }
        } else {
          phand = [handle];
          Cookies.set("bean_wishlist_products", phand, {
            expires: 15,
            sameSite: "None",
            secure: true,
          });
        }
        favoriBean.Wishlist.wishlistProduct();
      }
    });
  },
  wishlistProduct: function () {
    if (
      $(
        '#list-favorite .list-favorite-right[data-type="wishlist"] .list-favorite-list'
      ).length > 0
    ) {
      if (document.cookie.indexOf("bean_wishlist_products") !== -1) {
        $(
          '#list-favorite .list-favorite-right[data-type="wishlist"] .list-favorite-list'
        ).html("");
        var last_wishlist_pro_array = Cookies.getJSON("bean_wishlist_products");
        favoriBean.Wishlist.activityWishlist();
        var recentview_promises = [];
        for (var i = 0; i < 100; i++) {
          if (typeof last_wishlist_pro_array[i] == "string") {
            var promise = new Promise(function (resolve, reject) {
              $.ajax({
                url:
                  "/products/" + last_wishlist_pro_array[i] + "?view=favorite",
                async: false,
                success: function (product) {
                  resolve({
                    error: false,
                    data: product,
                  });
                },
                error: function (err) {
                  if (err.status === 404) {
                    try {
                      var u = this.url
                        .split("?")[0]
                        .replace("products/index.html", "");
                      resolve({
                        error: true,
                        handle: u,
                      });
                    } catch (e) {
                      resolve({
                        error: false,
                        data: "",
                      });
                    }
                  } else {
                    resolve({
                      error: false,
                      data: "",
                    });
                  }
                  favoriBean.Wishlist.removeWishlist(
                    last_wishlist_pro_array[i]
                  );
                },
              });
            });
            recentview_promises.push(promise);
          }
        }
        Promise.all(recentview_promises).then(function (values) {
          if (values.length > 0) {
            var x = [];
            setTimeout(function () {
              $(".js-wishlist-count").html(values.length);
            }, 500);
            $.each(values, function (i, v) {
              if (v.error) {
                x.push(v.handle);
              } else {
                awe_lazyloadImage();
              }
            });
            if (x.length > 0) {
              var new_last_viewed_pro_array = [];
              $.each(last_wishlist_pro_array, function (i, v) {
                if ($.inArray(v, x) === -1) {
                  new_last_viewed_pro_array.push(v);
                }
              });
              if (new_last_viewed_pro_array.length > 0) {
                Cookies.set("last_viewed_products", new_last_viewed_pro_array, {
                  expires: 180,
                  sameSite: "None",
                  secure: true,
                });
              }
            }
          } else {
            $(".js-wishlist-count").html("0");
            $(
              '#list-favorite .list-favorite-right[data-type="wishlist"] .list-favorite-list'
            ).append(
              '<div class="list-favorite-main-top-error col-lg-12 col-md-12 col-sm-12 col-12"><span>Bạn chưa có sản phẩm yêu thích nào!</span></div>'
            );
          }
        });
      } else {
        $(
          '#list-favorite .list-favorite-right[data-type="wishlist"] .list-favorite-list'
        ).append(
          '<div class="list-favorite-main-top-error col-lg-12 col-md-12 col-sm-12 col-12"><span>Bạn chưa có sản phẩm yêu thích nào! </span></div>'
        );
      }
    } else {
      $(
        '#list-favorite .list-favorite-right[data-type="wishlist"] .list-favorite-list'
      ).append(
        '<div class="list-favorite-right-main-top-error col-lg-12 col-md-12 col-sm-12 col-12"><span>Bạn chưa có sản phẩm yêu thích nào! </span></div>'
      );
    }
  },
  activityWishlist: function () {
    var last_wishlist_pro_array = Cookies.getJSON("bean_wishlist_products");
    $.each(last_wishlist_pro_array, function (i, v) {
      $('.setWishlist[data-wish="' + v + '"]')
        .html(
          '<svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><path fill="#72a834" d="M31.91 61.67L29.62 60c-9.4-6.7-16.72-13.49-21.74-20.17C3.11 33.5.48 27.39.06 21.7A17.63 17.63 0 0 1 5.45 7.16a17 17 0 0 1 11.86-4.81c3.46 0 7.93.39 11.8 3.4A19.09 19.09 0 0 1 32 8.41a19.91 19.91 0 0 1 2.91-2.67c3.89-3 8.37-3.41 11.84-3.41a16.86 16.86 0 0 1 11.85 4.8 17.51 17.51 0 0 1 5.33 14.53c-.44 5.7-3.1 11.81-7.9 18.14C51 46.5 43.63 53.3 34.21 60z"></path></svg>'
        )
        .addClass("active")
        .attr("title", "Bỏ yêu thích");
    });
  },
  removeWishlist: function (handle) {
    var phand = [];

    $('a[data-wish="' + handle + '"]')
      .html(
        '<svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><path fill="#000000" d="M31.91 61.67L29.62 60c-9.4-6.7-16.72-13.49-21.74-20.17C3.11 33.5.48 27.39.06 21.7A17.63 17.63 0 0 1 5.45 7.16a17 17 0 0 1 11.86-4.81c3.46 0 7.93.39 11.8 3.4A19.09 19.09 0 0 1 32 8.41a19.91 19.91 0 0 1 2.91-2.67c3.89-3 8.37-3.41 11.84-3.41a16.86 16.86 0 0 1 11.85 4.8 17.51 17.51 0 0 1 5.33 14.53c-.44 5.7-3.1 11.81-7.9 18.14C51 46.5 43.63 53.3 34.21 60zM8.51 10.38a13.31 13.31 0 0 0-4 11c.35 4.83 2.69 10.15 6.94 15.79 4.7 6.24 11.59 12.65 20.48 19 8.92-6.39 15.84-12.81 20.58-19.08 4.28-5.65 6.64-11 7-15.8a13.25 13.25 0 0 0-4-11 12.53 12.53 0 0 0-8.76-3.57c-2.76 0-6.29.29-9.11 2.48a12.37 12.37 0 0 0-3.09 3.15v.07L32 16l-2.5-3.56a12.68 12.68 0 0 0-3.11-3.2c-2.8-2.17-6.32-2.46-9.07-2.46a12.58 12.58 0 0 0-8.8 3.59z"></path></svg>'
      )
      .removeClass("active")
      .attr("title", "Thêm vào yêu thích");
    if (document.cookie.indexOf("bean_wishlist_products") !== -1) {
      var las = Cookies.getJSON("bean_wishlist_products");
      var flagIndex = $.inArray(handle, las);
      las.splice(flagIndex, 1);
      Cookies.set("bean_wishlist_products", las, {
        expires: 15,
        sameSite: "None",
        secure: true,
      });
    } else {
      phand = [handle];
      Cookies.set("bean_wishlist_products", phand, {
        expires: 15,
        sameSite: "None",
        secure: true,
      });
    }
    favoriBean.Wishlist.wishlistProduct(3, 5);
  },
};
favoriBean.Wishlist.init();
