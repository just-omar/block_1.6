import Swiper from "swiper";
// import Swiper from 'https://cdn.jsdelivr.net/npm/swiper@10/swiper-bundle.min.mjs'

import { Pagination } from "swiper/modules";

// Styles must use direct files imports
import "swiper/swiper.scss"; // core Swiper
import "swiper/modules/navigation.scss"; // Navigation module
import "swiper/modules/pagination.scss"; // Pagination module

export const swiper = new Swiper(".swiper-1", {
  direction: "horizontal",
  loop: true,
  slidesPerView: "auto",
  spaceBetween: 5,
  breakpoints: {
    768: {
      enabled: false,
    },
  },
  modules: [Pagination],
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    type: "bullets",
  },
});

export const swiper2 = new Swiper(".swiper-2", {
  direction: "horizontal",
  loop: true,
  slidesPerView: "auto",
  spaceBetween: 5,
  breakpoints: {
    768: {
      enabled: false,
    },
  },
  modules: [Pagination],
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    type: "bullets",
  },
});

console.log("swiper");
