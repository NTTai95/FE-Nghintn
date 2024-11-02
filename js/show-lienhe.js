$(".addThis_iconContact .item-contact, .addThis_listSharing .addThis_close").on("click", function (e) {
    // Kiểm tra xem danh sách chia sẻ có đang hoạt động hay không
    if ($(".addThis_listSharing").hasClass("active")) {
      // Nếu có, ẩn nó
      $(".addThis_listSharing").removeClass("active").fadeOut(150);
    } else {
      // Nếu không, hiển thị nó
      $(".addThis_listSharing").addClass("active").fadeIn(100);
    }
  });
  