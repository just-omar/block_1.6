let buttonBurgerOpen = document.querySelector(".header__burger-btn");
let aside = document.querySelector(".aside");
let containerMain = document.querySelector(".container-main");
let buttonBurgerClose = document.querySelector(".aside__header-close");
let zoneClose = document.querySelector(".aside__zone-close");
let body = document.querySelector("body");

buttonBurgerOpen.addEventListener("click", () => {
  aside.classList.toggle("aside-open");
  containerMain.classList.toggle("container-main-blur");
  body.classList.add("body-overflow-hidden");
});

buttonBurgerClose.addEventListener("click", () => {
  aside.classList.remove("aside-open");
  containerMain.classList.remove("container-main-blur");
  body.classList.remove("body-overflow-hidden");
});

zoneClose.addEventListener("click", () => {
  aside.classList.remove("aside-open");
  containerMain.classList.remove("container-main-blur");
  body.classList.remove("body-overflow-hidden");
});
