let asideButtonChat = document.querySelector(".aside__chat-btn");
let headerButtonChat = document.querySelector(".header__chat-btn");
let modalFeedback = document.querySelector(".modal-feedback");
let buttonChatClose = document.querySelector(".button-close-feedback");
let zoneCloseFeedback = document.querySelector(".zone-close-feedback");
let focusInputName = document.querySelector(".input-name");

let containerMain = document.querySelector(".container-main");
let body = document.querySelector("body");
let aside = document.querySelector(".aside");

asideButtonChat.onclick = function () {
  modalFeedback.classList.toggle("feedback-open");
  containerMain.classList.add("container-main-blur");
  aside.classList.add("aside-blur");
  aside.classList.remove("aside-open");
  body.classList.add("body-overflow-hiden");
  focusInputName.focus();
};

headerButtonChat.onclick = function () {
  modalFeedback.classList.toggle("feedback-open");
  containerMain.classList.add("container-main-blur");
  aside.classList.add("aside-blur");
  aside.classList.remove("aside-open");
  body.classList.add("body-overflow-hiden");
  focusInputName.focus();
};

buttonChatClose.onclick = function () {
  modalFeedback.classList.remove("feedback-open");
  containerMain.classList.remove("container-main-blur");
  aside.classList.remove("aside-blur");
  body.classList.remove("body-overflow-hiden");
};

zoneCloseFeedback.onclick = function () {
  modalFeedback.classList.remove("feedback-open");
  containerMain.classList.remove("container-main-blur");
  aside.classList.remove("aside-blur");
  body.classList.remove("body-overflow-hiden");
};
