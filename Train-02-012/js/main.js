$(document).ready(function () {
  // setting slide
  currentSlide = "12";
  localStorage.setItem("current-slide", currentSlide);
  disableSwipe = false;

  // flow-slide
  var el = document.getElementById("container");
  swipedetect(el, function (swipedir) {
    if (swipedir == "left") {
      window.goToSlide("13");
    }
    if (swipedir == "right") {
      window.goToSlide("11");
    }
  });

  // animation here
  const animations = {
    300: [".title"],
    500: [".subtitle-box", ".text-bt-next",".bt-image"],
  };

  for (const [offset, elem] of Object.entries(animations)) {
    setTimeout(() => elem.forEach((e) => $(e).addClass("show")), offset);
  }
});
