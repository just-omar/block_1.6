let burgerButtonCall = document.querySelector(".aside__call-btn");
let headerButtonCall = document.querySelector(".header__call-btn");
let modalCall = document.querySelector(".modal-call");
let buttonCallClose = document.querySelector(".button-close-call");
let zoneCloseCall = document.querySelector(".zone-close-call");
let focusInputCall = document.querySelector(".input-call");

burgerButtonCall.onclick = function () {
  modalCall.classList.toggle("feedback-open");
  containerMain.classList.add("container-main-blur");
  burger.classList.add("burger-blur");
  burger.classList.remove("burger-open");
  body.classList.add("body-overflow-hiden");
  focusInputCall.focus();
};

headerButtonCall.onclick = function () {
  modalCall.classList.toggle("feedback-open");
  containerMain.classList.add("container-main-blur");
  burger.classList.add("burger-blur");
  burger.classList.remove("burger-open");
  body.classList.add("body-overflow-hiden");
  focusInputCall.focus();
};

buttonCallClose.onclick = function () {
  modalCall.classList.remove("feedback-open");
  containerMain.classList.remove("container-main-blur");
  burger.classList.remove("burger-open");
  burger.classList.remove("burger-blur");
  body.classList.remove("body-overflow-hiden");
};

zoneCloseCall.onclick = function () {
  modalCall.classList.remove("feedback-open");
  containerMain.classList.remove("container-main-blur");
  burger.classList.remove("burger-open");
  burger.classList.remove("burger-blur");
  body.classList.remove("body-overflow-hiden");
};
