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
   const animations = {
    300: [".main-title"],
    500: [".ingredient-wrapper", ".ingredient-heading", ".ingredient-subheading",".ingredient-list",".ingredient-value",".ingredient-value-special"],
    750: [".price-container"],
  };

  for (const [offset, elem] of Object.entries(animations)) {
    setTimeout(() => elem.forEach((e) => $(e).addClass("show")), offset);
  }
  });
  