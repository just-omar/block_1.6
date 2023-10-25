import { data } from "./data.js";

const gridContainer = document.querySelector(".brands__container");

for (let i = 0; i < data.length; i++) {
  const gridItem = document.createElement("div");
  gridItem.classList.add("brands__item", "swiper-slide");
  const image = document.createElement("img");
  image.src = `images/brands/${data[i]}.svg`;
  image.alt = `${data[i]}`;
  image.classList.add("brands__img");
  const link = document.createElement("a");
  link.classList.add("brands__link");
  gridItem.appendChild(image);
  gridItem.appendChild(link);
  gridContainer.appendChild(gridItem);
}
console.log("GENERATED");
