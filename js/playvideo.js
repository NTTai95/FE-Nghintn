let videos = document.querySelectorAll(".open_video");
let popupVideo = document.querySelector(".popup_video");
let close_vd = document.querySelectorAll(".close_video");
videos.forEach((v) =>
  v.addEventListener("click", function (e) {
    e.preventDefault();
    popupVideo.classList.add("open");
    popupVideo.querySelector(
      ".b_video"
    ).innerHTML = `<div class="embed-responsive embed-responsive-16by9"><iframe class="embed-responsive-item" src="https://www.youtube.com/embed/${e.target.dataset.video}?enablejsapi=1" allow="autoplay; encrypted-media" allowfullscreen></iframe></div>`;
  })
);
close_vd.forEach((v) =>
  v.addEventListener("click", function (e) {
    e.preventDefault();
    popupVideo.classList.remove("open");
    setTimeout(function () {
      popupVideo.querySelector(".b_video").innerHTML = ``;
    }, 500);
  })
);
