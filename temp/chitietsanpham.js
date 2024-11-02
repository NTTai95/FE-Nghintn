let isloadIdex2 = 0;
$(window).on("scroll  mousemove touchstart", function () {
  try {
    if (!isloadIdex2) {
      isloadIdex2 = 1;
      $(document).ready(function ($) {
        SalesPop();
      });
      function fisherYates(myArray) {
        var i = myArray.length,
          j,
          temp;
        if (i === 0) return false;
        while (--i) {
          j = Math.floor(Math.random() * (i + 1));
          temp = myArray[i];
          myArray[i] = myArray[j];
          myArray[j] = temp;
        }
      }
      var collection = new Array();

      collection[0] =
        "<a href='/son-li-maybelline-min-moi-sieu-nhe-1299-do-cam-dat-1-7g' class='jas-sale-pop-img mr__20'><img width='480' height='480' src='https://bizweb.dktcdn.net/100/495/928/products/1686983663359-son-li-maybelline-1.png?v=1700186532620' alt='Son Lì Maybelline Mịn Môi Siêu Nhẹ 1299 Đỏ Cam Đất 1.7g'/></a><div class='jas-sale-pop-content'><h4 class='fs__12 fwm mg__0 jas-sale-name'>Sản phẩm</h4><h3 class='mg__0 mt__5 mb__5 fs__18'><a href='/son-li-maybelline-min-moi-sieu-nhe-1299-do-cam-dat-1-7g' title='Son Lì Maybelline Mịn Môi Siêu Nhẹ 1299 Đỏ Cam Đất 1.7g'>Đã đặt Son Lì Maybelline Mịn Môi Siêu Nhẹ 1299 Đỏ Cam Đất 1.7g</a></h3><span class='fs__12 jas-sale-pop-timeago'></span></div><span class='pe-7s-close pa fs__20'></span>";

      collection[1] =
        "<a href='/gel-rua-mat-la-roche-posay-danh-cho-da-dau-nhay-cam-200ml' class='jas-sale-pop-img mr__20'><img width='480' height='480' src='https://bizweb.dktcdn.net/100/495/928/products/p09671-1-l-min.png?v=1700617216750' alt='Gel Rửa Mặt La Roche-Posay Dành Cho Da Dầu, Nhạy Cảm 200ml'/></a><div class='jas-sale-pop-content'><h4 class='fs__12 fwm mg__0 jas-sale-name'>Sản phẩm</h4><h3 class='mg__0 mt__5 mb__5 fs__18'><a href='/gel-rua-mat-la-roche-posay-danh-cho-da-dau-nhay-cam-200ml' title='Gel Rửa Mặt La Roche-Posay Dành Cho Da Dầu, Nhạy Cảm 200ml'>Đã đặt Gel Rửa Mặt La Roche-Posay Dành Cho Da Dầu, Nhạy Cảm 200ml</a></h3><span class='fs__12 jas-sale-pop-timeago'></span></div><span class='pe-7s-close pa fs__20'></span>";

      collection[2] =
        "<a href='/nuoc-tay-trang-garnier-danh-cho-da-nhay-cam-400ml' class='jas-sale-pop-img mr__20'><img width='480' height='480' src='https://bizweb.dktcdn.net/100/495/928/products/google-shopping-nuoc-tay-trang-g-1.png?v=1698467415973' alt='Nước Tẩy Trang Garnier Dành Cho Da Nhạy Cảm 400ml'/></a><div class='jas-sale-pop-content'><h4 class='fs__12 fwm mg__0 jas-sale-name'>Sản phẩm</h4><h3 class='mg__0 mt__5 mb__5 fs__18'><a href='/nuoc-tay-trang-garnier-danh-cho-da-nhay-cam-400ml' title='Nước Tẩy Trang Garnier Dành Cho Da Nhạy Cảm 400ml'>Đã đặt Nước Tẩy Trang Garnier Dành Cho Da Nhạy Cảm 400ml</a></h3><span class='fs__12 jas-sale-pop-timeago'></span></div><span class='pe-7s-close pa fs__20'></span>";

      collection[3] =
        "<a href='/nuoc-tay-trang-garnier-lam-sach-sau-lop-trang-diem-400ml' class='jas-sale-pop-img mr__20'><img width='480' height='480' src='https://bizweb.dktcdn.net/100/495/928/products/google-shopping-nuoc-tay-trang-g.png?v=1698467425577' alt='Nước Tẩy Trang Garnier Làm Sạch Sâu Lớp Trang Điểm 400ml'/></a><div class='jas-sale-pop-content'><h4 class='fs__12 fwm mg__0 jas-sale-name'>Sản phẩm</h4><h3 class='mg__0 mt__5 mb__5 fs__18'><a href='/nuoc-tay-trang-garnier-lam-sach-sau-lop-trang-diem-400ml' title='Nước Tẩy Trang Garnier Làm Sạch Sâu Lớp Trang Điểm 400ml'>Đã đặt Nước Tẩy Trang Garnier Làm Sạch Sâu Lớp Trang Điểm 400ml</a></h3><span class='fs__12 jas-sale-pop-timeago'></span></div><span class='pe-7s-close pa fs__20'></span>";

      collection[4] =
        "<a href='/nuoc-hoa-hong-klairs-danh-cho-da-nhay-cam-180ml' class='jas-sale-pop-img mr__20'><img width='480' height='480' src='https://bizweb.dktcdn.net/100/495/928/products/google-shopping-nuoc-hoa-hong-kl.png?v=1695132237953' alt='Nước Hoa Hồng Klairs Dành Cho Da Nhạy Cảm 180ml'/></a><div class='jas-sale-pop-content'><h4 class='fs__12 fwm mg__0 jas-sale-name'>Sản phẩm</h4><h3 class='mg__0 mt__5 mb__5 fs__18'><a href='/nuoc-hoa-hong-klairs-danh-cho-da-nhay-cam-180ml' title='Nước Hoa Hồng Klairs Dành Cho Da Nhạy Cảm 180ml'>Đã đặt Nước Hoa Hồng Klairs Dành Cho Da Nhạy Cảm 180ml</a></h3><span class='fs__12 jas-sale-pop-timeago'></span></div><span class='pe-7s-close pa fs__20'></span>";

      collection[5] =
        "<a href='/nuoc-hoa-hong-skin1004-phuc-hoi-va-tai-tao-da-210ml' class='jas-sale-pop-img mr__20'><img width='480' height='480' src='https://bizweb.dktcdn.net/100/495/928/products/1668848627374-nuoc-hoa-hong-rau.png?v=1698467486870' alt='Nước Hoa Hồng Skin1004 Phục Hồi Và Tái Tạo Da 210ml'/></a><div class='jas-sale-pop-content'><h4 class='fs__12 fwm mg__0 jas-sale-name'>Sản phẩm</h4><h3 class='mg__0 mt__5 mb__5 fs__18'><a href='/nuoc-hoa-hong-skin1004-phuc-hoi-va-tai-tao-da-210ml' title='Nước Hoa Hồng Skin1004 Phục Hồi Và Tái Tạo Da 210ml'>Đã đặt Nước Hoa Hồng Skin1004 Phục Hồi Và Tái Tạo Da 210ml</a></h3><span class='fs__12 jas-sale-pop-timeago'></span></div><span class='pe-7s-close pa fs__20'></span>";

      collection[6] =
        "<a href='/combo-2-nuoc-tay-trang-bi-dao-cocoon-lam-sach-giam-dau-500ml' class='jas-sale-pop-img mr__20'><img width='480' height='480' src='https://bizweb.dktcdn.net/100/495/928/products/dgm-nttt-nuoc-tay-trang-bi-dao-c.png?v=1698467530807' alt='Combo 2 Nước Tẩy Trang Bí Đao Cocoon Làm Sạch & Giảm Dầu 500ml'/></a><div class='jas-sale-pop-content'><h4 class='fs__12 fwm mg__0 jas-sale-name'>Sản phẩm</h4><h3 class='mg__0 mt__5 mb__5 fs__18'><a href='/combo-2-nuoc-tay-trang-bi-dao-cocoon-lam-sach-giam-dau-500ml' title='Combo 2 Nước Tẩy Trang Bí Đao Cocoon Làm Sạch & Giảm Dầu 500ml'>Đã đặt Combo 2 Nước Tẩy Trang Bí Đao Cocoon Làm Sạch & Giảm Dầu 500ml</a></h3><span class='fs__12 jas-sale-pop-timeago'></span></div><span class='pe-7s-close pa fs__20'></span>";

      collection[7] =
        "<a href='/xit-khoa-makeup-silkygirl-giu-lop-trang-diem-lau-troi-70ml' class='jas-sale-pop-img mr__20'><img width='480' height='480' src='https://bizweb.dktcdn.net/100/495/928/products/untitled-design-2022-12-19t141.png?v=1698467564147' alt='Xịt Khoá Makeup Silkygirl Giữ Lớp Trang Điểm Lâu Trôi 70ml'/></a><div class='jas-sale-pop-content'><h4 class='fs__12 fwm mg__0 jas-sale-name'>Sản phẩm</h4><h3 class='mg__0 mt__5 mb__5 fs__18'><a href='/xit-khoa-makeup-silkygirl-giu-lop-trang-diem-lau-troi-70ml' title='Xịt Khoá Makeup Silkygirl Giữ Lớp Trang Điểm Lâu Trôi 70ml'>Đã đặt Xịt Khoá Makeup Silkygirl Giữ Lớp Trang Điểm Lâu Trôi 70ml</a></h3><span class='fs__12 jas-sale-pop-timeago'></span></div><span class='pe-7s-close pa fs__20'></span>";

      collection[8] =
        "<a href='/sieu-phan-nuoc-gilaa-cang-bong-02-natural-beige-15g' class='jas-sale-pop-img mr__20'><img width='480' height='480' src='https://bizweb.dktcdn.net/100/495/928/products/han-nuoc-gilaa-vegan-super-glow.png?v=1698467766360' alt='Siêu Phấn Nước Gilaa Căng Bóng 02 Natural Beige 15g'/></a><div class='jas-sale-pop-content'><h4 class='fs__12 fwm mg__0 jas-sale-name'>Sản phẩm</h4><h3 class='mg__0 mt__5 mb__5 fs__18'><a href='/sieu-phan-nuoc-gilaa-cang-bong-02-natural-beige-15g' title='Siêu Phấn Nước Gilaa Căng Bóng 02 Natural Beige 15g'>Đã đặt Siêu Phấn Nước Gilaa Căng Bóng 02 Natural Beige 15g</a></h3><span class='fs__12 jas-sale-pop-timeago'></span></div><span class='pe-7s-close pa fs__20'></span>";

      collection[9] =
        "<a href='/nuoc-hoa-hong-klairs-khong-mui-cho-da-nhay-cam-180ml' class='jas-sale-pop-img mr__20'><img width='480' height='480' src='https://bizweb.dktcdn.net/100/495/928/products/nuoc-hoa-hong-khong-mui-klairs-min.png?v=1700617540240' alt='Nước Hoa Hồng Klairs Không Mùi Cho Da Nhạy Cảm 180ml'/></a><div class='jas-sale-pop-content'><h4 class='fs__12 fwm mg__0 jas-sale-name'>Sản phẩm</h4><h3 class='mg__0 mt__5 mb__5 fs__18'><a href='/nuoc-hoa-hong-klairs-khong-mui-cho-da-nhay-cam-180ml' title='Nước Hoa Hồng Klairs Không Mùi Cho Da Nhạy Cảm 180ml'>Đã đặt Nước Hoa Hồng Klairs Không Mùi Cho Da Nhạy Cảm 180ml</a></h3><span class='fs__12 jas-sale-pop-timeago'></span></div><span class='pe-7s-close pa fs__20'></span>";

      collection[10] =
        "<a href='/phan-phu-silkygirl-khoang-kiem-dau-dang-nen-khong-mau-7g' class='jas-sale-pop-img mr__20'><img width='480' height='480' src='https://bizweb.dktcdn.net/100/495/928/products/untitled-7d0921bb046c45e59c170e9-2-min.png?v=1700617293313' alt='Phấn Phủ Silkygirl Khoáng Kiềm Dầu Dạng Nén Không Màu 7g'/></a><div class='jas-sale-pop-content'><h4 class='fs__12 fwm mg__0 jas-sale-name'>Sản phẩm</h4><h3 class='mg__0 mt__5 mb__5 fs__18'><a href='/phan-phu-silkygirl-khoang-kiem-dau-dang-nen-khong-mau-7g' title='Phấn Phủ Silkygirl Khoáng Kiềm Dầu Dạng Nén Không Màu 7g'>Đã đặt Phấn Phủ Silkygirl Khoáng Kiềm Dầu Dạng Nén Không Màu 7g</a></h3><span class='fs__12 jas-sale-pop-timeago'></span></div><span class='pe-7s-close pa fs__20'></span>";

      collection[11] =
        "<a href='/phan-phu-maybelline-min-li-kiem-dau-110-porcelain-8-5g' class='jas-sale-pop-img mr__20'><img width='480' height='480' src='https://bizweb.dktcdn.net/100/495/928/products/phan-phu-min-li-fit-me-maybellin.png?v=1694959204250' alt='Phấn Phủ Maybelline Mịn Lì Kiềm Dầu 110 Porcelain 8.5g'/></a><div class='jas-sale-pop-content'><h4 class='fs__12 fwm mg__0 jas-sale-name'>Sản phẩm</h4><h3 class='mg__0 mt__5 mb__5 fs__18'><a href='/phan-phu-maybelline-min-li-kiem-dau-110-porcelain-8-5g' title='Phấn Phủ Maybelline Mịn Lì Kiềm Dầu 110 Porcelain 8.5g'>Đã đặt Phấn Phủ Maybelline Mịn Lì Kiềm Dầu 110 Porcelain 8.5g</a></h3><span class='fs__12 jas-sale-pop-timeago'></span></div><span class='pe-7s-close pa fs__20'></span>";

      collection[12] =
        "<a href='/phan-nuoc-aprilskin-ma-thuat-mau-sang-hong-22-pink-beige-15g' class='jas-sale-pop-img mr__20'><img width='480' height='480' src='https://bizweb.dktcdn.net/100/495/928/products/hansunge-aprilskin-magic-snow-ke.png?v=1700100642350' alt='Phấn Nước Aprilskin Ma Thuật Màu Sáng Hồng 22 Pink Beige 15g'/></a><div class='jas-sale-pop-content'><h4 class='fs__12 fwm mg__0 jas-sale-name'>Sản phẩm</h4><h3 class='mg__0 mt__5 mb__5 fs__18'><a href='/phan-nuoc-aprilskin-ma-thuat-mau-sang-hong-22-pink-beige-15g' title='Phấn Nước Aprilskin Ma Thuật Màu Sáng Hồng 22 Pink Beige 15g'>Đã đặt Phấn Nước Aprilskin Ma Thuật Màu Sáng Hồng 22 Pink Beige 15g</a></h3><span class='fs__12 jas-sale-pop-timeago'></span></div><span class='pe-7s-close pa fs__20'></span>";

      collection[13] =
        "<a href='/phan-nuoc-laneige-cho-lop-nen-min-li-24h' class='jas-sale-pop-img mr__20'><img width='480' height='480' src='https://bizweb.dktcdn.net/100/495/928/products/google-shopping-phan-nuoc-laneig.png?v=1694958787473' alt='Phấn Nước Laneige Cho Lớp Nền Mịn Lì 24H'/></a><div class='jas-sale-pop-content'><h4 class='fs__12 fwm mg__0 jas-sale-name'>Sản phẩm</h4><h3 class='mg__0 mt__5 mb__5 fs__18'><a href='/phan-nuoc-laneige-cho-lop-nen-min-li-24h' title='Phấn Nước Laneige Cho Lớp Nền Mịn Lì 24H'>Đã đặt Phấn Nước Laneige Cho Lớp Nền Mịn Lì 24H</a></h3><span class='fs__12 jas-sale-pop-timeago'></span></div><span class='pe-7s-close pa fs__20'></span>";

      collection[14] =
        "<a href='/kem-che-khuyet-diem-maybelline-min-li-10-light-6-8ml' class='jas-sale-pop-img mr__20'><img width='480' height='480' src='https://bizweb.dktcdn.net/100/495/928/products/maybelline-concealer-fit-me-ligh-removebg-preview-min.png?v=1700617335027' alt='Kem Che Khuyết Điểm Maybelline Mịn Lì 10 Light 6.8ml'/></a><div class='jas-sale-pop-content'><h4 class='fs__12 fwm mg__0 jas-sale-name'>Sản phẩm</h4><h3 class='mg__0 mt__5 mb__5 fs__18'><a href='/kem-che-khuyet-diem-maybelline-min-li-10-light-6-8ml' title='Kem Che Khuyết Điểm Maybelline Mịn Lì 10 Light 6.8ml'>Đã đặt Kem Che Khuyết Điểm Maybelline Mịn Lì 10 Light 6.8ml</a></h3><span class='fs__12 jas-sale-pop-timeago'></span></div><span class='pe-7s-close pa fs__20'></span>";

      fisherYates(collection);
      function SalesPop() {
        if ($(".jas-sale-pop").length < 0) return;
        setInterval(function () {
          $(".jas-sale-pop")
            .fadeIn(function () {
              $(this).removeClass("slideUp");
            })
            .delay(10000)
            .fadeIn(function () {
              var randomTime = [
                  "1 phút",
                  "5 phút",
                  "10 phút",
                  "12 phút",
                  "14 phút",
                  "16 phút",
                  "18 phút",
                  "20 phút",
                  "25 phút",
                  "30 phút",
                  "36 phút",
                  "38 phút",
                  "40 phút",
                  "42 phút",
                  "45 phút",
                  "50 phút",
                  "1 giờ",
                  "2 giờ",
                  "3 giờ",
                ],
                randomUser = [
                  "Tú Quyên - 0989313xxx",
                  "Quốc Việt - 0346989xxx",
                  "Tấn Phát - 0935672xxx",
                  "Mạnh Hiệp - 0500345xxx",
                  "Nguyễn An - 0346800xxx",
                  "Thu Thủy - 0345264xxx",
                  "Mỹ Linh - 0378505xxx",
                  "Hoàng Long - 0333878xxx",
                  "Quang Hải - 0911436xxx",
                  "Lê Vân - 0357004xxx",
                  "Vân Anh - 0775637xxx",
                  "Anh Tuấn - 0905398xxx",
                  "Tiến Trình - 0344667xxx",
                  "Hồng Vân - 0989391xxx",
                  "Trần Ngọc - 0392003xxx",
                  "Hữu Phước - 0935921xxx",
                  "Hữu Thọ - 0393335xxx",
                ],
                randomTimeAgo = Math.floor(Math.random() * randomTime.length),
                randomTimeUser = Math.floor(Math.random() * randomUser.length),
                randomProduct = Math.floor(Math.random() * collection.length),
                randomShowP = collection[randomProduct],
                TimeUser = randomUser[randomTimeUser],
                TimeAgo = randomTime[randomTimeAgo];
              $(".jas-sale-pop").html(randomShowP);
              $(".jas-sale-name").text(TimeUser);
              $(".jas-sale-pop-timeago").text(TimeAgo + " trước");
              $(this).addClass("slideUp");
              $(".pe-7s-close").on("click", function () {
                $(".jas-sale-pop").remove();
              });
            })
            .delay(6000);
        }, 6000);
      }
    }
  } catch (e) {
    console.log(e);
  }
});
