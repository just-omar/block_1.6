const asideButtonCall = document.querySelector(".aside__call-btn");
const headerButtonCall = document.querySelector(".header__call-btn");
const modalCall = document.querySelector(".modal-call");
const buttonCallClose = document.querySelector(".button-close-call");
const zoneCloseCall = document.querySelector(".zone-close-call");
const focusInputCall = document.querySelector(".input-call");
const containerMain = document.querySelector(".container-main");

const body = document.querySelector("body");
const aside = document.querySelector(".aside");

// console.log({
//   asideButtonCall,
//   headerButtonCall,
//   modalCall,
//   buttonCallClose,
//   zoneCloseCall,
//   focusInputCall,
// });

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
