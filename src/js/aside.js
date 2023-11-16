const buttonBurgerOpen = document.querySelector(".header__burger-btn");
const aside = document.querySelector(".aside");
const containerMain = document.querySelector(".container-main");
const buttonBurgerClose = document.querySelector(".aside__header-close");
const zoneClose = document.querySelector(".aside__zone-close");
const body = document.querySelector("body");

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
