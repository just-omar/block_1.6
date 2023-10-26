const readMoreBtn = document.querySelector(".main__next-wrapper");
const info = document.querySelector(".info");
const p2 = info.querySelector(".info__p2");
const p3 = info.querySelector(".info__p3");
const p4 = info.querySelector(".info__p4");

const mobileMedia = "(max-width: 767px)";
const tabletMedia = "(min-width: 768px) and (max-width:1439px)";
const desktopMedia = "(min-width: 1440px)";

readMoreBtn.addEventListener("click", () => {
  readMoreBtn.classList.toggle("read-more");
  if (readMoreBtn.classList.contains("read-more")) {
    if (window.matchMedia(mobileMedia).matches) {
      p3.classList.add("show");
      p4.classList.add("show");
    } else if (window.matchMedia(tabletMedia).matches) {
      p2.classList.add("hide");
      p3.classList.add("show");
      p4.classList.add("show");
    } else if (window.matchMedia(desktopMedia).matches) {
      p4.classList.add("show");
    }
  } else {
    if (window.matchMedia(mobileMedia).matches) {
      p3.classList.remove("show");
      p4.classList.remove("show");
    } else if (window.matchMedia(tabletMedia).matches) {
      p2.classList.remove("hide");
      p3.classList.remove("show");
      p4.classList.remove("show");
    } else if (window.matchMedia(desktopMedia).matches) {
      p4.classList.remove("show");
    }
  }
});
