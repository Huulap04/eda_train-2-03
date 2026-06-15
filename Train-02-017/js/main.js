$(document).ready(function () {
    // setting slide
    currentSlide = "017";
    localStorage.setItem("current-slide", currentSlide);
    disableSwipe = false;
  
    // flow-slide
    var el = document.getElementById("container");
    swipedetect(el, function (swipedir) {
      if (swipedir == "left") {
        window.goToSlide("018");
      }
      if (swipedir == "right") {    
         window.goToSlide("016");
      }
    });
  
    // animation here
    setTimeout(() => {
    $(".pie-chart").addClass("animate");
  
    $(".slice-text").addClass("animate");

    $(".leg-1, .leg-2, .leg-3, .leg-4, .nutri-btn").addClass("animate");
}, 500);
});
  