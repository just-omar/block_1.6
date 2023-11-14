const brands = document.querySelector(".brands");
const brandBtn = brands.querySelector(".btn-wrapper__hide-show");
const brandBtnImg = brands.querySelector(".btn-wrapper__expand");
const items = Array.from(brands.querySelectorAll(".brands__item"));

for (let i = 0; i < items.length; i++) {
  items[i].classList.add(`hide-desktop-items`);
  items[i].classList.add(`hide-tablet-items`);
}

brandBtn.addEventListener("click", () => {
  brandBtn.classList.toggle("content-hidden");
  if (brandBtn.classList.contains("content-hidden")) {
    for (let i = 0; i < items.length; i++) {
      items[i].classList.remove(`show-tablet-items`);
      items[i].classList.remove(`show-desktop-items`);

      items[i].classList.add(`hide-tablet-items`);
      items[i].classList.add(`hide-desktop-items`);
    }
    brandBtnImg.classList.remove(`rotate`);
    brandBtn.textContent = "Показать все";
  } else {
    for (let i = 0; i < items.length; i++) {
      items[i].classList.remove(`hide-tablet-items`);
      items[i].classList.remove(`hide-desktop-items`);

      items[i].classList.add(`show-tablet-items`);
      items[i].classList.add(`show-desktop-items`);
    }
    brandBtnImg.classList.add(`rotate`);
    brandBtn.textContent = "Скрыть";
  }
});

// console.log("brands started");
