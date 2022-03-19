// фиксирование хедера при скроле

var className = "inverted";
var classNameBtn = "back-button-hide";
var scrollTrigger = 60;

window.onscroll = function() {
  // We add pageYOffset for compatibility with IE.
  if (window.scrollY >= scrollTrigger || window.pageYOffset >= scrollTrigger) {
    document.getElementsByClassName("header-fixed")[0].classList.add(className);
    document.getElementsByClassName("back-button")[0].classList.add(classNameBtn);
  } else {
    document.getElementsByClassName("header-fixed")[0].classList.remove(className);
    document.getElementsByClassName("back-button")[0].classList.remove(classNameBtn);
  }
};



