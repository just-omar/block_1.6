import Swiper, { Pagination } from "swiper";

export const swiper = new Swiper(".swiper", {
  direction: "horizontal",
  loop: true,
  slidesPerView: "auto",
  spaceBetween: 5,
  modules: [Pagination],
  breakpoints: {
    768: {
      enabled: false,
    },
  },

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    // type: "bullets",
  },
});
