$(document).ready(function () {
    // Setting slide
    currentSlide = "020";
    localStorage.setItem("current-slide", currentSlide);
    disableSwipe = false;
 
    // Flow-slide
    var el = document.getElementById("container");
    swipedetect(el, function (swipedir) {
      if (swipedir == "left") {
        window.goToSlide("001");
      }
      if (swipedir == "right") {    
        window.goToSlide("019");
      }
    });
 
    // animation
    setTimeout(() => {
      $(".content-container").addClass("animate");
      $(".trader-info-group").addClass("animate");
    }, 500);
});