$(document).ready(function () {
    // setting slide
    currentSlide = "019"; // Cập nhật đúng số trang
    localStorage.setItem("current-slide", currentSlide);
    disableSwipe = false;
  
    // flow-slide
    var el = document.getElementById("container");
    swipedetect(el, function (swipedir) {
      if (swipedir == "left") {
        window.goToSlide("020");
      }
      if (swipedir == "right") {    
        window.goToSlide("018");
      }
    });
  
    setTimeout(() => {
      $(".bar-chart-container").addClass("animate"); 
    }, 500);
});