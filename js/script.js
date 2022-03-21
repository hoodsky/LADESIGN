// фиксирование хедера при скроле

var className = "inverted";
var classNameBtn = "back-button-hide";
var classNameLogoHide = "logo-hide";
var classNameLogoShow = "logo-show";
var scrollTrigger = 60;

window.onscroll = function() {
  // We add pageYOffset for compatibility with IE.
  if (window.scrollY >= scrollTrigger || window.pageYOffset >= scrollTrigger) {
    document.getElementsByClassName("header-fixed")[0].classList.add(className);
    document.getElementsByClassName("back-button")[0].classList.add(classNameBtn);
    document.getElementsByClassName("header-logo_white")[0].classList.add(classNameLogoHide);
    document.getElementsByClassName("header-logo_dark")[0].classList.add(classNameLogoShow);
  } else {
    document.getElementsByClassName("header-fixed")[0].classList.remove(className);
    document.getElementsByClassName("back-button")[0].classList.remove(classNameBtn);
    document.getElementsByClassName("header-logo_white")[0].classList.remove(classNameLogoHide);
    document.getElementsByClassName("header-logo_dark")[0].classList.remove(classNameLogoShow);
  }
};

// открытие только одного блока "details" на странице
        const details = document.querySelectorAll("details");

        // Add the onclick listeners.
        details.forEach((targetDetail) => {
            targetDetail.addEventListener("click", () => {
                // Close all the details that are not targetDetail.
                details.forEach((detail) => {
                    if (detail !== targetDetail) {
                        detail.removeAttribute("open");
                    }
                });
            });
        });

