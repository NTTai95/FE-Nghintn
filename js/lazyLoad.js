
$(document).ready(function ($) {
  awe_lazyloadImage();
});
function awe_lazyloadImage() {
  var ll = new LazyLoad({
    elements_selector: ".lazyload",
    load_delay: 100,
    threshold: 0,
  });
}
window.awe_lazyloadImage = awe_lazyloadImage;
