const asideButtonChat = document.querySelector(".aside__chat-btn");
const headerButtonChat = document.querySelector(".header__chat-btn");
const modalFeedback = document.querySelector(".modal-feedback");
const buttonChatClose = document.querySelector(".button-close-feedback");
const zoneCloseFeedback = document.querySelector(".zone-close-feedback");
const focusInputName = document.querySelector(".input-name");

const containerMain = document.querySelector(".container-main");
const body = document.querySelector("body");
const aside = document.querySelector(".aside");

asideButtonChat.addEventListener("click", function () {
  modalFeedback.classList.toggle("feedback-open");
  containerMain.classList.add("container-main-blur");
  aside.classList.add("aside-blur");
  aside.classList.remove("aside-open");
  body.classList.add("body-overflow-hiden");
  focusInputName.focus();
});

headerButtonChat.addEventListener("click", function () {
  modalFeedback.classList.toggle("feedback-open");
  containerMain.classList.add("container-main-blur");
  aside.classList.add("aside-blur");
  aside.classList.remove("aside-open");
  body.classList.add("body-overflow-hiden");
  focusInputName.focus();
});

buttonChatClose.addEventListener("click", function () {
  modalFeedback.classList.remove("feedback-open");
  containerMain.classList.remove("container-main-blur");
  aside.classList.remove("aside-blur");
  body.classList.remove("body-overflow-hiden");
});

zoneCloseFeedback.addEventListener("click", function () {
  modalFeedback.classList.remove("feedback-open");
  containerMain.classList.remove("container-main-blur");
  aside.classList.remove("aside-blur");
  body.classList.remove("body-overflow-hiden");
});
