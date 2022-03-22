// фиксирование хедера при скроле

var className = "inverted";
var classNameBtn = "back-button-hide";
var classNameLogoHide = "logo-hide";
var classNameLogoShow = "logo-show";
var classManeNavbar = "checkbox__top"
var classManeHamburger = "checkbox__top"


var scrollTrigger = 60;

window.onscroll = function() {
  // We add pageYOffset for compatibility with IE.
  if (window.scrollY >= scrollTrigger || window.pageYOffset >= scrollTrigger) {
    document.getElementsByClassName("header-fixed")[0].classList.add(className);
    document.getElementsByClassName("back-button")[0].classList.add(classNameBtn);
    document.getElementsByClassName("header-logo_white")[0].classList.add(classNameLogoHide);
    document.getElementsByClassName("header-logo_dark")[0].classList.add(classNameLogoShow);
    document.getElementsByClassName("checkbox")[0].classList.add(classManeNavbar);
    document.getElementsByClassName("hamburger-lines")[0].classList.add(classManeHamburger);


  } else {
    document.getElementsByClassName("header-fixed")[0].classList.remove(className);
    document.getElementsByClassName("back-button")[0].classList.remove(classNameBtn);
    document.getElementsByClassName("header-logo_white")[0].classList.remove(classNameLogoHide);
    document.getElementsByClassName("header-logo_dark")[0].classList.remove(classNameLogoShow);
    document.getElementsByClassName("checkbox")[0].classList.remove(classManeNavbar);
    document.getElementsByClassName("hamburger-lines")[0].classList.remove(classManeHamburger);

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
        
// проверка ввода текста для активации кнопки на модальном окне
function checkParams() {
    var fio = $('#name').val();
    var email = $('#phone').val();
    
    if(fio.length != 0 && email.length != 0) {
        $('#submit').removeAttr('disabled');
    } else {
        $('#submit').attr('disabled', 'disabled');
    }
}
// предзагрузка страницы
  window.onload = function () {
    document.body.classList.add('loaded_hiding');
    window.setTimeout(function () {
      document.body.classList.add('loaded');
      document.body.classList.remove('loaded_hiding');
    }, 500);
  }




Open: $('#menuToggle input').prop( "checked" ,true);
Close: $('#menuToggle input').prop( "checked" ,false);
