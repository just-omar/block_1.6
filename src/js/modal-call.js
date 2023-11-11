let asideButtonCall = document.querySelector(".aside__call-btn");
let headerButtonCall = document.querySelector(".header__call-btn");
let modalCall = document.querySelector(".modal-call");
let buttonCallClose = document.querySelector(".button-close-call");
let zoneCloseCall = document.querySelector(".zone-close-call");
let focusInputCall = document.querySelector(".input-call");
let containerMain = document.querySelector(".container-main");

let body = document.querySelector("body");
let aside = document.querySelector(".aside");

console.log({
  asideButtonCall,
  headerButtonCall,
  modalCall,
  buttonCallClose,
  zoneCloseCall,
  focusInputCall,
});

asideButtonCall.onclick = function () {
  modalCall.classList.toggle("feedback-open");
  containerMain.classList.add("container-main-blur");
  aside.classList.add("aside-blur");
  aside.classList.remove("aside-open");
  body.classList.add("body-overflow-hidden");
  focusInputCall.focus();
};

headerButtonCall.onclick = function () {
  modalCall.classList.toggle("feedback-open");
  containerMain.classList.add("container-main-blur");
  aside.classList.add("aside-blur");
  aside.classList.remove("aside-open");
  body.classList.add("body-overflow-hidden");
  focusInputCall.focus();
};

buttonCallClose.onclick = function () {
  modalCall.classList.remove("feedback-open");
  containerMain.classList.remove("container-main-blur");
  aside.classList.remove("aside-open");
  aside.classList.remove("aside-blur");
  body.classList.remove("body-overflow-hidden");
};

zoneCloseCall.onclick = function () {
  modalCall.classList.remove("feedback-open");
  containerMain.classList.remove("container-main-blur");
  aside.classList.remove("aside-open");
  aside.classList.remove("aside-blur");
  body.classList.remove("body-overflow-hidden");
};
