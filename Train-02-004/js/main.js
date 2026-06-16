$(document).ready(function () {
    // setting slide
    currentSlide = "001";
    localStorage.setItem("current-slide", currentSlide);
    disableSwipe = false;
  
    // flow-slide
    var el = document.getElementById("container");
    swipedetect(el, function (swipedir) {
      if (swipedir == "left") {
        window.goToSlide("005");
      }
      if (swipedir == "right") {
        window.goToSlide("003");
      }
    });
  
    // animation here
var blocks = [
    { icon: ".content-icon",   title: ".title",   sub: ".content-sub-title"   },
    { icon: ".content-icon-1", title: ".title-1", sub: ".content-sub-title-1" },
    { icon: ".content-icon-2", title: ".title-2", sub: ".content-sub-title-2" },
    { icon: ".content-icon-3", title: ".title-3", sub: ".content-sub-title-3" },
];

blocks.forEach(function (block, blockIndex) {
    var baseDelay = 300 + blockIndex * 160;

    // Icon scale-in
    setTimeout(function () {
        $(block.icon).addClass("show");
    }, baseDelay);

    // Title stroke flash
    setTimeout(function () {
        $(block.title).addClass("show");
    }, baseDelay + 100);

    // Sub items stagger
    var items = $(block.sub).find("span").add(
        blockIndex === 1 ? $(".disadvantage-title, .disadvantage-content span") : $()
    );
    items.each(function (i) {
        var el = this;
        setTimeout(function () {
            $(el).addClass("show");
        }, baseDelay + 220 + i * 80);
    });
});
  });
  