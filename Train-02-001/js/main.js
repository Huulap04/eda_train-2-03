$(document).ready(function () {
  // setting slide
  currentSlide = "001";
  localStorage.setItem("current-slide", currentSlide);
  disableSwipe = false;

  // flow-slide
  var el = document.getElementById("container");
  swipedetect(el, function (swipedir) {
    if (swipedir == "left") {
      window.goToSlide("002");
    }
    // if (swipedir == "right") {    
    //   disableSwipe = true;
    // }
  });

  // animation here
  const animations = {
    300: [".intro-text"],
    500: [".hero-subtitle-box", ".hero-content-box", ".text-title-highlight"],
  };

  for (const [offset, elem] of Object.entries(animations)) {
    setTimeout(() => elem.forEach((e) => $(e).addClass("show")), offset);
  }
});
