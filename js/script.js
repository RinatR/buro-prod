var hamburger = document.querySelector(".hamburger");
var menu = document.querySelector(".menu");
var menuToggle = document.querySelector(".menu__toggle");
var overlay = document.querySelector(".page-wrapper__overlay");
var body = document.querySelector("body");
var modal = document.querySelector(".modal-login");
var closeModal = document.querySelector(".modal-login__close");
var logo = document.querySelector(".logo");

// обработчик открытия меню
hamburger.addEventListener("click", function(event) {
  event.preventDefault();
  menu.classList.add("menu--opened");
  overlay.style.display = "block";

});

// обработчик закрытия меню
menuToggle.addEventListener("click", function(event) {
  event.preventDefault();
  menu.classList.remove("menu--opened");
  overlay.style.display = "none";
});

// обработчик закрытия модального окна
closeModal.addEventListener("click", function() {
  modal.style.display = "none";
  overlay.style.display = "none";
});


if (window.matchMedia("(min-width: 1920px)").matches) {
  fixedMenu();
} else {
  console.log("It's not for mobile and tablet devices");
}

//данная функция делает меню в десктопной версии фиксированным
function fixedMenu() {

  window.onscroll = function() {

  var scrolled = window.pageYOffset || document.documentElement.scrollTop;
    if(scrolled > 228) {
      menu.style.position = "fixed";
      menu.style.left = "363px";
      menu.style.borderBottom = "1px solid #e2e2e2";
      logo.style.position = "fixed";
      logo.style.left = "280px";
      logo.style.top = "0";
      logo.style.zIndex = "2";
      logo.style.width = "49px";
      logo.style.height = "17px";
      logo.style.paddingTop = "19px";
      logo.style.paddingBottom = "19px";
      logo.style.paddingRight = "34px";
      logo.style.backgroundColor = "#ffffff";
      logo.style.borderBottom = "1px solid #e2e2e2";
    }

    else {
      menu.style.position = "relative";
      menu.style.left = "0px";
      menu.style.paddingLeft = "0px";
      menu.style.borderBottom = "none";
      logo.style.position = "static";
      logo.style.width = "168px";
      logo.style.height = "61px";
      logo.style.paddingTop = "30px";
      logo.style.paddingBottom = "30px";
      logo.style.borderBottom = "none";
    }
  }
}









