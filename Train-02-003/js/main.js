$(document).ready(function () {
    // setting slide
    currentSlide = "001";
    localStorage.setItem("current-slide", currentSlide);
    disableSwipe = false;
  
    // flow-slide
    var el = document.getElementById("container");
    swipedetect(el, function (swipedir) {
      if (swipedir == "left") {
        window.goToSlide("004");
      }
      if (swipedir == "right") {
        window.goToSlide("002");
      }
    });
  
    // animation here
    setTimeout(() => {
      $(".line").addClass("show"); //this line only for example
    }, 500);
  });
  