$(document).ready(function () {
    // setting slide
    currentSlide = "001";
    localStorage.setItem("current-slide", currentSlide);
    disableSwipe = false;
  
    // flow-slide
    var el = document.getElementById("container");
    swipedetect(el, function (swipedir) {
      if (swipedir == "left") {
        window.goToSlide("019");
      }
      if (swipedir == "right") {    
         window.goToSlide("017");
      }
    });
  
    // animation here
    setTimeout(() => {
      $(".line-chart-container").addClass("animate");
    }, 500);
  });
  