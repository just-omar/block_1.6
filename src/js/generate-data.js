import { brandsSwiperData, repairSwiperData } from "./data.js";

const gridContainer = document.querySelector(".brands__container");

for (let i = 0; i < brandsSwiperData.length; i++) {
  const gridItem = document.createElement("div");
  gridItem.classList.add("brands__item", "swiper-slide");
  const image = document.createElement("img");
  image.src = `images/brands/${brandsSwiperData[i]}.svg`;
  image.alt = `${brandsSwiperData[i]}`;
  image.classList.add("brands__img");
  const link = document.createElement("a");
  link.classList.add("brands__link");
  gridItem.appendChild(image);
  gridItem.appendChild(link);
  gridContainer.appendChild(gridItem);
}
console.log("GENERATED");

const repairContainer = document.querySelector(".repair__container");

for (let i = 0; i < repairSwiperData.length; i++) {
  const gridItem = document.createElement("div");
  gridItem.classList.add("repair__item", "swiper-slide");
  const p = document.createElement("p");
  p.textContent = repairSwiperData[i];
  p.classList.add("repair__paragraph");
  const link = document.createElement("a");
  link.classList.add("repair__link");
  gridItem.appendChild(p);
  gridItem.appendChild(link);
  repairContainer.appendChild(gridItem);
}
