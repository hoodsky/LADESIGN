"use strict";
// фиксирование хедера и появление кнопки "наверх" при скроле страницы

var className = "inverted";
var classNameBtn = "back-button-hide";
var classNameLogoHide = "logo-hide";
var classNameLogoShow = "logo-show";
var classManeNavbar = "checkbox__top"
var classManeHamburger = "checkbox__top"
var scrollTrigger = 60;

window.onscroll = function() {
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
        
        details.forEach((targetDetail) => {
            targetDetail.addEventListener("click", () => {
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

// прокрутка раздела "похожие проекты"
   const buttonRight = document.getElementById('moreRight');
    const buttonLeft = document.getElementById('moreLeft');

    buttonRight.onclick = function () {
      document.getElementById('moreLinks').scrollLeft += 200;
    };
    buttonLeft.onclick = function () {
      document.getElementById('moreLinks').scrollLeft -= 200;
};


// прокрутка слайдера на странице работы
        const scroller = document.querySelector('.slider-gallery');
        const nextBtn = document.querySelector('.slideRight');
        const prevBtn = document.querySelector('.slideLeft');
        const itemWidth = document.querySelector('.slider-cell').clientWidth;

        nextBtn.addEventListener('click', scrollToNextItem);
        prevBtn.addEventListener('click', scrollToPrevItem);

        function scrollToNextItem() {
            if (scroller.scrollLeft < (scroller.scrollWidth - itemWidth))
                // The scroll position is not at the beginning of last item
                scroller.scrollBy({ left: itemWidth, top: 0, behavior: 'smooth' });
            else
                // Last item reached. Go back to first item by setting scroll position to 0
                scroller.scrollTo({ left: 0, top: 0, behavior: 'smooth' });
        }
        function scrollToPrevItem() {
            if (scroller.scrollLeft != 0)
                // The scroll position is not at the beginning of first item
                scroller.scrollBy({ left: -itemWidth, top: 0, behavior: 'smooth' });
            else
                // This is the first item. Go to last item by setting scroll position to scroller width
                scroller.scrollTo({ left: scroller.scrollWidth, top: 0, behavior: 'smooth' });
        }