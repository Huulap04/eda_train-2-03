$(document).ready(function () {
  // setting slide
  currentSlide = "001";
  localStorage.setItem("current-slide", currentSlide);
  disableSwipe = false;

  // flow-slide
  var el = document.getElementById("container");
  swipedetect(el, function (swipedir) {
    if (swipedir == "left") {
      window.goToSlide("003");
    }
    if (swipedir == "right") {
      window.goToSlide("001");
    }
  });

  // animation here
  const sections = document.querySelectorAll(".info-section");

  sections.forEach(function (section, sectionIndex) {
    var baseDelay = sectionIndex * 180;

    setTimeout(function () {
      section.querySelector(".section-title").classList.add("show");
    }, 300 + baseDelay);

    setTimeout(function () {
      section.querySelector(".info-image").classList.add("show");
    }, 400 + baseDelay);

    var listEls = section.querySelectorAll(".list-item, .section-subtitle");
    listEls.forEach(function (el, i) {
      setTimeout(function () {
        el.classList.add("show");
      }, 500 + baseDelay + i * 100);
    });
  });
});
