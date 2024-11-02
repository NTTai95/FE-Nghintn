Bizweb.doNotTriggerClickOnThumb = false;
function changeImageQuickView(img, selector) {
  var src = $(img).attr("src");
  src = src.replace("_compact", "");
  $(selector).attr("src", src);
}
function validate(evt) {
  var theEvent = evt || window.event;
  var key = theEvent.keyCode || theEvent.which;
  key = String.fromCharCode(key);
  var regex = /[0-9]|\./;
  if (!regex.test(key)) {
    theEvent.returnValue = false;
    if (theEvent.preventDefault) theEvent.preventDefault();
  }
}
var selectCallbackQuickView = function (variant, selector) {
  $("#quick-view-product form").show();
  var productItem = jQuery(".quick-view-product .product-item"),
    addToCart = productItem.find(".add_to_cart_detail"),
    productPrice = productItem.find(".price"),
    comparePrice = productItem.find(".old-price"),
    form2 = jQuery(".soluong1"),
    status = productItem.find(".soluong"),
    sku = productItem.find(".sku_"),
    totalPrice = productItem.find(".total-price span");

  if (variant && variant.sku) {
    sku.text(variant.sku);
  } else {
    sku.text("Đang cập nhật");
  }
  if (variant && variant.available) {
    var form = jQuery("#" + selector.domIdPrefix).closest("form");
    for (var i = 0, length = variant.options.length; i < length; i++) {
      var radioButton = form.find(
        '.swatch[data-option-index="' +
          i +
          '"] :radio[value="' +
          variant.options[i] +
          '"]'
      );
    }
    addToCart.removeClass("disabled").removeAttr("disabled");
    addToCart
      .html('<span class="btn-content text_1">Thêm vào giỏ hàng</span>')
      .removeAttr("disabled");
    status.text("Còn hàng");
    if (variant.price < 1) {
      $("#quick-view-product .price").html("Liên hệ");
      $(
        "#quick-view-product del, #quick-view-product .quantity_wanted_p"
      ).hide();
      $("#quick-view-product .prices .old-price").hide();
      form2.hide();
    } else {
      productPrice.html(
        Bizweb.formatMoney(
          variant.price,
          "{{amount_no_decimals_with_comma_separator}}₫"
        )
      );
      if (variant.compare_at_price > variant.price) {
        comparePrice
          .html(
            Bizweb.formatMoney(
              variant.compare_at_price,
              "{{amount_no_decimals_with_comma_separator}}₫"
            )
          )
          .show();
        productPrice.addClass("on-sale");
      } else {
        comparePrice.hide();
        productPrice.removeClass("on-sale");
      }

      $(".quantity_wanted_p").show();
      $(".input_qty_qv_").show();
      form2.show();
    }

    updatePricingQuickView();

    /*begin variant image*/
    if (variant && variant.featured_image) {
      var originalImage = $("#product-featured-image-quickview");
      var newImage = variant.featured_image;
      var element = originalImage[0];
      Bizweb.Image.switchImage(
        newImage,
        element,
        function (newImageSizedSrc, newImage, element) {
          $("#thumblist_quickview img").each(function () {
            var parentThumbImg = $(this).parent();
            var productImage = $(this).parent().data("image");
            if (newImageSizedSrc.includes(productImage)) {
              $(this).parent().trigger("click");
              return false;
            }
          });
        }
      );
      $("#product-featured-image-quickview").attr(
        "src",
        variant.featured_image.src
      );
    }
  } else {
    addToCart.addClass("disabled").attr("disabled", "disabled");
    addToCart
      .removeClass("d-none")
      .addClass("btn_buy")
      .attr("disabled", "disabled")
      .html('<div class="disabled">Hết hàng</div>')
      .show();
    status.text("Hết hàng");
    $(".quantity_wanted_p").show();
    if (variant) {
      if (variant.price < 1) {
        $("#quick-view-product .price").html("Liên hệ");
        $("#quick-view-product del").hide();
        $("#quick-view-product .quantity_wanted_p").hide();
        $("#quick-view-product .prices .old-price").hide();
        form2.hide();
        comparePrice.hide();
        productPrice.removeClass("on-sale");
        addToCart.addClass("disabled").attr("disabled", "disabled");
        addToCart
          .removeClass("d-none")
          .addClass("btn_buy")
          .attr("disabled", "disabled")
          .html('<div class="disabled">Hết hàng</div>')
          .show();
      } else {
        if (variant.compare_at_price > variant.price) {
          comparePrice
            .html(
              Bizweb.formatMoney(
                variant.compare_at_price,
                "{{amount_no_decimals_with_comma_separator}}₫"
              )
            )
            .show();
          productPrice.addClass("on-sale");
        } else {
          comparePrice.hide();
          productPrice.removeClass("on-sale");
          $("#quick-view-product .prices .old-price").html("");
        }
        $("#quick-view-product .price").html(
          Bizweb.formatMoney(
            variant.price,
            "{{amount_no_decimals_with_comma_separator}}₫"
          )
        );
        $("#quick-view-product del ").hide();
        $("#quick-view-product .prices .old-price").show();
        $(".input_qty_qv_").hide();
        form2.hide();
        addToCart.addClass("disabled").attr("disabled", "disabled");
        addToCart
          .removeClass("d-none")
          .addClass("btn_buy")
          .attr("disabled", "disabled")
          .html('<div class="disabled">Hết hàng</div>')
          .show();
      }
    } else {
      $("#quick-view-product .price").html("Liên hệ");
      $("#quick-view-product del").hide();
      $("#quick-view-product .quantity_wanted_p").hide();
      $("#quick-view-product .prices .old-price").hide();
      form2.hide();
      comparePrice.hide();
      productPrice.removeClass("on-sale");
      addToCart.addClass("disabled").attr("disabled", "disabled");
      addToCart
        .removeClass("d-none")
        .addClass("btn_buy")
        .attr("disabled", "disabled")
        .html('<div class="disabled">Hết hàng</div>')
        .show();
    }
  }
  /*begin variant image*/
  if (variant && variant.featured_image) {
    var originalImage = $("#product-featured-image-quickview");
    var newImage = variant.featured_image;
    var element = originalImage[0];
    Bizweb.Image.switchImage(
      newImage,
      element,
      function (newImageSizedSrc, newImage, element) {
        $("#thumblist_quickview img").each(function () {
          var parentThumbImg = $(this).parent();
          var productImage = $(this).parent().data("image");
          if (newImageSizedSrc.includes(productImage)) {
            $(this).parent().trigger("click");
            return false;
          }
        });
      }
    );
    $("#product-featured-image-quickview").attr(
      "src",
      variant.featured_image.src
    );
  }
};
