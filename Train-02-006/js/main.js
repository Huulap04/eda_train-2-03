$(document).ready(function () {
  // setting slide
  currentSlide = "001";
  localStorage.setItem("current-slide", currentSlide);
  disableSwipe = false;

  // flow-slide
  var el = document.getElementById("container");
  swipedetect(el, function (swipedir) {
    if (swipedir == "left") {
      window.goToSlide("007");
    }
    if (swipedir == "right") {
      window.goToSlide("005")
    }
  });

  // animation here
  setTimeout(function () {
    $(".preserve-left-bg").addClass("show");
  }, 200);

  setTimeout(function () {
    $(".preserve-right").addClass("show");
  }, 250);

  setTimeout(function () {
    $(".preserve-heading").addClass("show");
  }, 400);

  setTimeout(function () {
    $(".preserve-card-title").addClass("show");
  }, 550);

  $(".preserve-item").each(function (i) {
    var el = this;
    setTimeout(function () {
      $(el).addClass("show");
    }, 700 + i * 120);
  });

  setTimeout(function () {
    $(".preserve-product").addClass("show");
  }, 600);
});
