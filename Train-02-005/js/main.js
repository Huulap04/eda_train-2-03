$(document).ready(function () {
    // setting slide
    currentSlide = "001";
    localStorage.setItem("current-slide", currentSlide);
    disableSwipe = false;
  
    // flow-slide
    var el = document.getElementById("container");
    swipedetect(el, function (swipedir) {
      if (swipedir == "left") {
        window.goToSlide("006");
      }
      if (swipedir == "right") {
        window.goToSlide("004");
      }
    });
  
    // animation here
  const animations = {
    300: [".note-title"],
    500: [".hero-subtitle-box", ".hero-content-box", ".text-title-highlight"],
  };

  for (const [offset, elem] of Object.entries(animations)) {
    setTimeout(() => elem.forEach((e) => $(e).addClass("show")), offset);
  }
  // Stagger note items from top to bottom
  setTimeout(function () {
    $(".note-item").each(function () {
      $(this).addClass("show");
    });
  }, 500);
  });
  