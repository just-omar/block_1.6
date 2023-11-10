let burgerButtonChat = document.querySelector(".aside__chat-btn");
let headerButtonChat = document.querySelector(".header__button-chat");
let modalFeedback = document.querySelector(".modal-feedback");
let buttonChatClose = document.querySelector(".button-close-feedback");
let zoneCloseFeedback = document.querySelector(".zone-close-feedback");
let focusInputName = document.querySelector(".input-name");

burgerButtonChat.onclick = function () {
  modalFeedback.classList.toggle("feedback-open");
  containerMain.classList.add("container-main-blur");
  burger.classList.add("burger-blur");
  burger.classList.remove("burger-open");
  body.classList.add("body-overflow-hiden");
  focusInputName.focus();
};

headerButtonChat.onclick = function () {
  modalFeedback.classList.toggle("feedback-open");
  containerMain.classList.add("container-main-blur");
  burger.classList.add("burger-blur");
  burger.classList.remove("burger-open");
  body.classList.add("body-overflow-hiden");
  focusInputName.focus();
};

buttonChatClose.onclick = function () {
  modalFeedback.classList.remove("feedback-open");
  containerMain.classList.remove("container-main-blur");
  burger.classList.remove("burger-blur");
  body.classList.remove("body-overflow-hiden");
};

zoneCloseFeedback.onclick = function () {
  modalFeedback.classList.remove("feedback-open");
  containerMain.classList.remove("container-main-blur");
  burger.classList.remove("burger-blur");
  body.classList.remove("body-overflow-hiden");
};
