const asideButtonChat = document.querySelector(".aside__chat-btn");
const headerButtonChat = document.querySelector(".header__chat-btn");
const modalFeedback = document.querySelector(".modal-feedback");
const buttonChatClose = document.querySelector(".button-close-feedback");
const zoneCloseFeedback = document.querySelector(".zone-close-feedback");
const focusInputName = document.querySelector(".input-name");

const containerMain = document.querySelector(".container-main");
const body = document.querySelector("body");
const aside = document.querySelector(".aside");

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
