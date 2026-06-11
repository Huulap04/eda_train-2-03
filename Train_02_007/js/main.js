$(document).ready(function () {
  // setting slide
  currentSlide = "007";
  localStorage.setItem("current-slide", currentSlide);
  disableSwipe = false;

  // flow-slide
  var el = document.getElementById("container");
  swipedetect(el, function (swipedir) {
    if (swipedir == "left") {
      window.goToSlide("008");
    }
    if (swipedir == "right") {
      window.goToSlide("006");
    }
  });

  // animation here
  const animations = {
    300: [".hero-title"],
    500: [".hero-subtitle-box", ".hero-content-box", ".text-title-highlight"],
  };

  for (const [offset, elem] of Object.entries(animations)) {
    setTimeout(() => elem.forEach((e) => $(e).addClass("show")), offset);
  }
});
